import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import {
  buildVerifiedBranches,
  extractPostcode,
  getDomain,
  normalizeName,
  normalizePhone
} from "./lib/verification.mjs";

const root = process.cwd();
const dataPath = path.join(root, "public", "data", "oad-london-2026.json");
const cacheDir = path.join(root, ".cache", "oad-verification");
const reportsDir = path.join(root, "reports");
const reportPath = path.join(reportsDir, "data-verification.md");
const googlePlacesKey = process.env.GOOGLE_PLACES_API_KEY || "";
const verifyLimit = Number(process.env.VERIFY_LIMIT || 0);
const verifyWebsites = process.env.VERIFY_WEBSITES === "1";
const checkedAt = new Date().toISOString();
const googleFieldMask = [
  "places.id",
  "places.displayName",
  "places.formattedAddress",
  "places.location",
  "places.nationalPhoneNumber",
  "places.internationalPhoneNumber",
  "places.websiteUri",
  "places.googleMapsUri",
  "places.businessStatus"
].join(",");

function ensureDirs() {
  for (const dir of [cacheDir, reportsDir]) {
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  }
}

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, "utf8"));
}

function writeJson(filePath, value) {
  writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

async function main() {
  ensureDirs();
  const dataset = readJson(dataPath);
  const restaurants = verifyLimit ? dataset.restaurants.slice(0, verifyLimit) : dataset.restaurants;
  const untouched = verifyLimit ? dataset.restaurants.slice(verifyLimit) : [];
  const summaries = [];
  const enrichedRestaurants = [];

  for (const [index, restaurant] of restaurants.entries()) {
    const googleCandidates = googlePlacesKey ? await fetchGooglePlaceCandidates(restaurant) : [];
    const websiteCandidates = verifyWebsites ? await fetchWebsiteCandidates(restaurant) : [];
    const { branches, verification } = buildVerifiedBranches(
      restaurant,
      [...googleCandidates, ...websiteCandidates],
      checkedAt
    );

    enrichedRestaurants.push({
      ...restaurant,
      branches,
      verification,
      needsManualReview: restaurant.needsManualReview === true || verification.status === "needs-review" || Boolean(verification.issues.length)
    });

    summaries.push({
      id: restaurant.id,
      name: restaurant.displayName,
      branchCount: branches.length,
      status: verification.status,
      confidence: verification.confidence,
      issues: verification.issues
    });

    if ((index + 1) % 25 === 0) {
      console.log(`Verified ${index + 1}/${restaurants.length} restaurants`);
    }
  }

  const nextDataset = {
    ...dataset,
    metadata: {
      ...dataset.metadata,
      generatedAt: dataset.metadata.generatedAt,
      verification: buildMetadataVerification(summaries),
      dataNotes: mergeDataNotes(dataset.metadata.dataNotes || [])
    },
    restaurants: [...enrichedRestaurants, ...untouched]
  };

  writeJson(dataPath, nextDataset);
  writeFileSync(reportPath, buildReport(summaries), "utf8");
  console.log(`Verified ${restaurants.length} restaurants`);
  console.log(`Wrote ${path.relative(root, dataPath)}`);
  console.log(`Wrote ${path.relative(root, reportPath)}`);
}

async function fetchGooglePlaceCandidates(restaurant) {
  const query = `${restaurant.displayName} restaurant London`;
  const cachePath = path.join(cacheDir, `google-${hash(query)}.json`);
  if (existsSync(cachePath)) return normalizeGooglePlaces(readJson(cachePath));

  const body = {
    textQuery: query,
    languageCode: "en",
    regionCode: "GB",
    locationBias: {
      rectangle: {
        low: { latitude: 51.28, longitude: -0.55 },
        high: { latitude: 51.72, longitude: 0.33 }
      }
    }
  };

  const response = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": googlePlacesKey,
      "X-Goog-FieldMask": googleFieldMask
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Google Places lookup failed for ${restaurant.displayName}: ${response.status} ${text}`);
  }

  const payload = await response.json();
  writeJson(cachePath, payload);
  return normalizeGooglePlaces(payload);
}

async function fetchWebsiteCandidates(restaurant) {
  if (!restaurant.website) return [];
  const cachePath = path.join(cacheDir, `website-${hash(restaurant.website)}.html`);
  let html = "";

  try {
    if (existsSync(cachePath)) html = readFileSync(cachePath, "utf8");
    else {
      const response = await fetch(restaurant.website, {
        headers: {
          "User-Agent": "OAD London Food Map data verification (contact: repository owner)"
        },
        redirect: "follow"
      });
      if (!response.ok) return [];
      html = await response.text();
      writeFileSync(cachePath, html, "utf8");
    }
  } catch {
    return [];
  }

  return extractJsonLdCandidates(restaurant, html);
}

function normalizeGooglePlaces(payload) {
  return (payload.places || []).map((place) => ({
    id: place.id,
    displayName: place.displayName?.text,
    formattedAddress: place.formattedAddress,
    lat: place.location?.latitude,
    lng: place.location?.longitude,
    phone: place.internationalPhoneNumber || place.nationalPhoneNumber || null,
    websiteUri: place.websiteUri || null,
    googleMapsUri: place.googleMapsUri || null,
    businessStatus: place.businessStatus || null
  }));
}

function extractJsonLdCandidates(restaurant, html) {
  const candidates = [];
  const scripts = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];

  for (const [, rawJson] of scripts) {
    for (const item of flattenJsonLd(safeJsonParse(rawJson))) {
      const type = Array.isArray(item?.["@type"]) ? item["@type"].join(" ") : item?.["@type"];
      if (!type || !/restaurant|foodestablishment|bakery|cafe|bar/i.test(type)) continue;
      const address = formatJsonLdAddress(item.address);
      const geo = item.geo || {};
      candidates.push({
        displayName: item.name || restaurant.displayName,
        address,
        lat: Number(geo.latitude),
        lng: Number(geo.longitude),
        phone: item.telephone || null,
        website: item.url || restaurant.website,
        businessStatus: null
      });
    }
  }

  return candidates.filter((candidate) => candidate.address || Number.isFinite(candidate.lat));
}

function flattenJsonLd(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.flatMap(flattenJsonLd);
  if (value["@graph"]) return flattenJsonLd(value["@graph"]);
  return [value];
}

function formatJsonLdAddress(address) {
  if (!address) return null;
  if (typeof address === "string") return address;
  return [
    address.streetAddress,
    address.addressLocality,
    address.addressRegion,
    address.postalCode,
    address.addressCountry
  ]
    .filter(Boolean)
    .join(", ") || null;
}

function safeJsonParse(value) {
  try {
    return JSON.parse(value.trim());
  } catch {
    return null;
  }
}

function buildMetadataVerification(summaries) {
  const verified = summaries.filter((item) => item.status === "verified").length;
  const needsReview = summaries.length - verified;
  const branchCount = summaries.reduce((total, item) => total + item.branchCount, 0);

  return {
    checkedAt,
    sourceMode: googlePlacesKey ? "google-places" : "fallback",
    websiteVerification: verifyWebsites,
    restaurantCount: summaries.length,
    branchCount,
    verified,
    needsReview
  };
}

function mergeDataNotes(notes) {
  const nextNote = googlePlacesKey
    ? "Restaurant branch candidates are verified with Google Places in the server-side data pipeline when GOOGLE_PLACES_API_KEY is available."
    : "Restaurant branch records fall back to OAD/Nominatim evidence until GOOGLE_PLACES_API_KEY is configured for the verification pipeline.";

  return [...notes.filter((note) => !note.includes("Restaurant branch candidates") && !note.includes("Restaurant branch records fall back")), nextNote];
}

function buildReport(summaries) {
  const reviewItems = summaries.filter((item) => item.status !== "verified" || item.issues.length);
  const multiBranchItems = summaries.filter((item) => item.branchCount > 1);

  return [
    "# OAD London Data Verification Report",
    "",
    `Generated: ${checkedAt}`,
    `Source mode: ${googlePlacesKey ? "Google Places + fallback" : "Fallback only"}`,
    `Website verification: ${verifyWebsites ? "enabled" : "disabled"}`,
    "",
    "## Summary",
    "",
    `- Restaurants checked: ${summaries.length}`,
    `- Branch pins generated: ${summaries.reduce((total, item) => total + item.branchCount, 0)}`,
    `- Verified: ${summaries.filter((item) => item.status === "verified").length}`,
    `- Needs review: ${reviewItems.length}`,
    `- Multi-branch restaurants: ${multiBranchItems.length}`,
    "",
    "## Multi-Branch Restaurants",
    "",
    ...(multiBranchItems.length
      ? multiBranchItems.map((item) => `- ${item.name}: ${item.branchCount} branches (${Math.round(item.confidence * 100)}% confidence)`)
      : ["- None detected in this run."]),
    "",
    "## Needs Review",
    "",
    ...(reviewItems.length
      ? reviewItems.map((item) => `- ${item.name}: ${item.issues.join("; ") || `confidence ${Math.round(item.confidence * 100)}%`}`)
      : ["- None."])
  ].join("\n");
}

function hash(value) {
  return createHash("sha1").update(value).digest("hex");
}

export function describeCandidateDebug(restaurant, candidate) {
  return {
    restaurant: restaurant.displayName,
    candidate: candidate.displayName || candidate.name,
    normalizedRestaurant: normalizeName(restaurant.displayName || restaurant.name),
    normalizedCandidate: normalizeName(candidate.displayName || candidate.name),
    restaurantPostcode: extractPostcode(restaurant.address || ""),
    candidatePostcode: extractPostcode(candidate.address || candidate.formattedAddress || ""),
    restaurantPhone: normalizePhone(restaurant.phone || ""),
    candidatePhone: normalizePhone(candidate.phone || ""),
    restaurantDomain: getDomain(restaurant.website || ""),
    candidateDomain: getDomain(candidate.website || candidate.websiteUri || "")
  };
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
