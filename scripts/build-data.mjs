import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";

const root = process.cwd();
const rawDir = path.join(root, "raw");
const cacheDir = path.join(root, ".cache", "oad");
const outputDir = path.join(root, "src", "data");

const SOURCES = [
  {
    categoryId: "top",
    category: "Top Restaurants",
    listId: 130,
    sourceUrl: "https://www.oadguides.com/lists/europe/top-restaurants/2026",
    raw: "oad_europe_top_2026.json",
    estimatedPrice: "££££",
    priceBasis: "Estimated from OAD category; OAD does not publish price bands."
  },
  {
    categoryId: "casual",
    category: "Casual",
    listId: 131,
    sourceUrl: "https://www.oadguides.com/lists/europe/casual/2026",
    raw: "oad_europe_casual_2026.json",
    estimatedPrice: "££",
    priceBasis: "Estimated from OAD category; OAD does not publish price bands."
  },
  {
    categoryId: "classical",
    category: "Classical",
    listId: 132,
    sourceUrl: "https://www.oadguides.com/lists/europe/class/2026",
    raw: "oad_europe_classical_2026.json",
    estimatedPrice: "£££",
    priceBasis: "Estimated from OAD category; OAD does not publish price bands."
  },
  {
    categoryId: "cheap-eats",
    category: "Cheap Eats",
    listId: 133,
    sourceUrl: "https://www.oadguides.com/lists/europe/cheap-eats/2026",
    raw: "oad_europe_cheap_eats_2026.json",
    estimatedPrice: "£",
    priceBasis: "Estimated from OAD category; OAD does not publish price bands."
  }
];

const LONDON_REGION_PARTS = new Set(["central", "east", "west", "north", "south of the river"]);
const NON_LONDON_REGION_PARTS = new Set([
  "antwerp",
  "basque region",
  "bilbao",
  "left bank",
  "naples region",
  "paris",
  "rest of norway",
  "rome",
  "vienna"
]);
const NON_LONDON_ADDRESS_PARTS = [
  "arcadia, california",
  "antwerp",
  "basque region",
  "french riviera",
  "ginza",
  "hong kong",
  "kanto",
  "kantō",
  "manhattan",
  "naples region",
  "new york",
  "paris, france",
  "rest of norway",
  "rome, italy",
  "san sebastian",
  "san sebastián",
  "tokyo",
  "vienna"
];
const LONDON_CORE_BOUNDS = {
  minLat: 51.42,
  maxLat: 51.6,
  minLng: -0.36,
  maxLng: 0.16
};
const ADDRESS_CORRECTIONS = {
  "alex-dilling-at-cafe-royal": "Hotel Cafe Royal, 10 Air Street, London, United Kingdom",
  amaya: "Halkin Arcade, Lowndes Street, London SW1X 8JT, United Kingdom",
  angler: "South Place Hotel, 3 South Place, London EC2M 2AF, United Kingdom",
  araki: "Unit 4, 12 New Burlington Street, London W1S 3BF, United Kingdom",
  "aqua-shard": "Level 31, The Shard, 31 St Thomas Street, London SE1 9RY, United Kingdom",
  "aulis-london": "16 St Anne's Court, London W1F 0BF, United Kingdom",
  bibi: "42 North Audley Street, London, United Kingdom",
  "bocca-di-luppo": "12 Archer Street, London W1D 7BB, United Kingdom",
  "bombay-brasserie": "Courtfield Road, London SW7 4QH, United Kingdom",
  brooklands: "The Peninsula London, 1 Grosvenor Place, London, United Kingdom",
  "cafe-spice-namaste": "1-2 Lower Dock Walk, London E16 2GT, United Kingdom",
  corenucopia: "18-22 Holbein Place, London, United Kingdom",
  "china-tang": "China Tang, Park Lane, London W1K 7TP, United Kingdom",
  decimo: "10 Argyle Street, London, United Kingdom",
  "din-tai-fung": "Din Tai Fung, 5 Henrietta Street, London WC2E 8PS, United Kingdom",
  "fat-badger": "310 Portobello Road, London, United Kingdom",
  "golden-hind": "71a-73 Marylebone Lane, London, United Kingdom",
  hide: "85 Piccadilly, London W1J 7NB, United Kingdom",
  hutong: "The Shard, 31 St Thomas Street, London SE1 9RY, United Kingdom",
  ibai: "90 Bartholomew Close, London EC1A 7BN, United Kingdom",
  ikoyi: "180 Strand, Temple, London WC2R 1EA, United Kingdom",
  "j-dot-sheekey": "28-32 St Martin's Court, London WC2N 4AL, United Kingdom",
  "kioku-by-endo": "Raffles London, 2 Whitehall Place, London, United Kingdom",
  "kokin-restaurant": "The Stratford, 20 International Way, London, United Kingdom",
  "la-petite-maison": "La Petite Maison, 54 Brook's Mews, London W1K 4EG, United Kingdom",
  legado: "1C Montacute Yards, London, United Kingdom",
  "mauro-colagreco-at-raffles": "Raffles London at The OWO, 57 Whitehall, London, United Kingdom",
  "min-jiang": "2-24 Kensington High Street, London W8 4PT, United Kingdom",
  "mr-dot-chow": "Mr Chow, 151 Knightsbridge, London SW1X 7PA, United Kingdom",
  "mount-street-restaurant": "41-43 Mount Street, London, United Kingdom",
  "noble-rot-mayfair": "5 Trebeck Street, Shepherd Market, London, United Kingdom",
  pavyllon: "Four Seasons Hotel London at Park Lane, Hamilton Place, London, United Kingdom",
  "sessions-arts-club": "Old Sessions House, 24 Clerkenwell Green, London, United Kingdom",
  singburi: "Unit 7 Montacute Yards, London, United Kingdom",
  "sushi-kanesaka": "Sushi Kanesaka, 45 Park Lane, London W1K 1PN, United Kingdom",
  "the-savoy-grill": "The Savoy, 100 Strand, London WC2R 0EZ, United Kingdom",
  trivet: "36 Snowsfields, London SE1 3SU, United Kingdom",
  "wild-honey-st-dot-james": "Sofitel St James, 8 Pall Mall, London, United Kingdom"
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function ensureDirs() {
  for (const dir of [cacheDir, outputDir]) {
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  }
}

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, "utf8"));
}

function htmlDecode(value = "") {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripTags(value = "") {
  return htmlDecode(value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim());
}

function slugKey(rest) {
  return rest.friendlyUrl || `${rest.name}-${rest.location1}-${rest.location2}`.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function normaliseImage(url) {
  if (!url || typeof url !== "string") return null;
  if (url.endsWith("/food-images/") || url.endsWith("/chef-images/")) return null;
  return url.startsWith("http") ? url : `https://www.oadguides.com${url}`;
}

function cacheName(prefix, value, extension) {
  const hash = createHash("sha1").update(value).digest("hex");
  return `${prefix}-${hash}.${extension}`;
}

function normaliseAddress(address = "") {
  return htmlDecode(address)
    .replace(/\s+/g, " ")
    .replace(/\s*,\s*/g, ", ")
    .replace(/,\s*London,\s*London,\s*United Kingdom$/i, ", London, United Kingdom")
    .replace(/,\s*UK$/i, ", United Kingdom")
    .replace(/\s+UK$/i, ", United Kingdom")
    .trim();
}

function getRegionPart(rest) {
  return String(rest.regionName || "").split(",").slice(1).join(",").trim().toLowerCase();
}

function hasSuspiciousRegion(rest) {
  const regionPart = getRegionPart(rest);
  return Boolean(regionPart) && !LONDON_REGION_PARTS.has(regionPart);
}

function isKnownNonLondonRegion(rest) {
  return NON_LONDON_REGION_PARTS.has(getRegionPart(rest));
}

function isCredibleLondonAddress(address) {
  if (!address) return false;
  const normalized = normaliseAddress(address);
  const lower = normalized.toLowerCase();
  const hasLondon = lower.includes("london");
  const hasUnitedKingdom = lower.includes("united kingdom") || /\buk\b/.test(lower);
  const hasBadLondonCitySlot = /,\s*london,\s*(antwerp|basque region|bilbao|left bank|naples region|northern ireland|paris|rest of norway|rome|vienna),\s*united kingdom$/i.test(normalized);
  const hasForeignHint = NON_LONDON_ADDRESS_PARTS.some((part) => lower.includes(part));

  return hasLondon && hasUnitedKingdom && !hasBadLondonCitySlot && !hasForeignHint;
}

function normaliseName(value = "") {
  return htmlDecode(value)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\b(the|restaurant|at|by)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function titleNameMatches(rest, titleName) {
  const restName = normaliseName(rest.displayName || rest.name);
  const title = normaliseName(titleName);
  return Boolean(restName && title) && (restName === title || restName.includes(title) || title.includes(restName));
}

function addressesLikelyMatch(first, second) {
  if (!first || !second) return false;
  const firstTokens = new Set(
    normaliseName(first)
      .split(" ")
      .filter((token) => token.length > 2 && !["hotel", "london", "united", "kingdom"].includes(token))
  );
  const secondTokens = normaliseName(second)
    .split(" ")
    .filter((token) => token.length > 2 && !["hotel", "london", "united", "kingdom"].includes(token));
  const sharedTokenCount = secondTokens.filter((token) => firstTokens.has(token)).length;
  const firstNumbers = new Set(first.match(/\d+/g) || []);
  const sharedNumberCount = (second.match(/\d+/g) || []).filter((number) => firstNumbers.has(number)).length;

  return sharedTokenCount >= 2 || (sharedTokenCount >= 1 && sharedNumberCount >= 1);
}

function isInsideLondonCore(result) {
  const lat = Number(result.lat);
  const lng = Number(result.lon);
  return (
    Number.isFinite(lat) &&
    Number.isFinite(lng) &&
    lat >= LONDON_CORE_BOUNDS.minLat &&
    lat <= LONDON_CORE_BOUNDS.maxLat &&
    lng >= LONDON_CORE_BOUNDS.minLng &&
    lng <= LONDON_CORE_BOUNDS.maxLng
  );
}

function isUsableLondonGeocode(result) {
  if (!result || !isInsideLondonCore(result)) return false;
  const displayName = String(result.display_name || "").toLowerCase();
  return displayName.includes("united kingdom") && (displayName.includes("london") || displayName.includes("greater london"));
}

function collectLondonEntries() {
  const records = new Map();

  for (const source of SOURCES) {
    const data = readJson(path.join(rawDir, source.raw));
    const allRows = ["data0", "data1", "data2", "data3"].flatMap((key) => data[key] || []);
    const londonRows = allRows.filter((rest) => (rest.location1 || rest.city || "").toLowerCase() === "london");

    for (const rest of londonRows) {
      const key = slugKey(rest);
      const existing = records.get(key) || {
        id: key,
        oadRestaurantId: rest.id,
        name: rest.name,
        displayName: rest.name.replace(/, The$/, ""),
        chef: rest.chef || "",
        cuisine: rest.cuisine || "",
        city: rest.location1 || rest.city || "London",
        country: rest.location2 || rest.country || "United Kingdom",
        regionName: rest.regionName || "",
        locationName: rest.locationName || "",
        friendlyUrl: rest.friendlyUrl,
        oadUrl: rest.friendlyUrl ? `https://www.oadguides.com/restaurant/${rest.friendlyUrl}` : null,
        image: normaliseImage(rest.fullImage || rest.mainImageUrl || rest.image),
        thumbnail: normaliseImage(rest.image),
        categories: [],
        categoryIds: [],
        listEntries: [],
        estimatedPrice: source.estimatedPrice,
        priceBasis: source.priceBasis,
        dataQuality: {
          oadList: true,
          oadDetail: false,
          geocoded: false,
          estimatedPrice: true
        }
      };

      existing.categories.push(source.category);
      existing.categoryIds.push(source.categoryId);
      existing.listEntries.push({
        categoryId: source.categoryId,
        category: source.category,
        listId: source.listId,
        rank: rest.rank,
        rankTypeCode: rest.listRankTypeCode || "",
        listRankTypeId: rest.listRankTypeId,
        listRestaurantTypeName: rest.listRestaurantTypeName || null,
        sourceUrl: source.sourceUrl
      });

      if (source.categoryId === "cheap-eats") existing.estimatedPrice = "£";
      else if (source.categoryId === "casual" && existing.estimatedPrice !== "£") existing.estimatedPrice = "££";

      records.set(key, existing);
    }
  }

  return [...records.values()].sort((a, b) => {
    const aRank = Math.min(...a.listEntries.map((entry) => entry.rank || 9999));
    const bRank = Math.min(...b.listEntries.map((entry) => entry.rank || 9999));
    return aRank - bRank || a.displayName.localeCompare(b.displayName);
  });
}

async function fetchCached(url, cachePath, throttleMs = 150) {
  if (existsSync(cachePath)) return readFileSync(cachePath, "utf8");
  let lastError = null;

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent": "OAD London Map research project (local personal app)",
          "Accept": "text/html,application/json"
        }
      });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
      const text = await response.text();
      writeFileSync(cachePath, text);
      await delay(throttleMs);
      return text;
    } catch (error) {
      lastError = error;
      await delay(throttleMs * attempt);
    }
  }

  throw lastError;
}

function parseDetail(html) {
  const pageTitle = stripTags((html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || "");
  const titleParts = pageTitle.includes(" - ") && !pageTitle.startsWith("OAD Lists")
    ? pageTitle.split(/\s+-\s+/)
    : [];
  const title = stripTags((html.match(/<h1[^>]*class="mt-1"[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || "");
  const description = stripTags((html.match(/<div class="restaurant-details--text">\s*<p>([\s\S]*?)<\/p>/i) || [])[1] || "");
  const author = stripTags((html.match(/<span class="author">([\s\S]*?)<\/span>/i) || [])[1] || "").replace(/^Review by:\s*/i, "");
  const address = normaliseAddress(stripTags((html.match(/<span class="sr-only">Address:<\/span>([\s\S]*?)<\/p>/i) || [])[1] || ""));
  const phone = stripTags((html.match(/<span class="sr-only">Telephone:<\/span>([\s\S]*?)<\/p>/i) || [])[1] || "");
  const website = htmlDecode((html.match(/<a target="_blank" class="website"\s+href="([^"]+)"/i) || [])[1] || "");
  const mapQuery = htmlDecode((html.match(/maps\/embed\/v1\/place\?[^"]*?q=([^"&]+)/i) || [])[1] || "");
  const titleName = titleParts[0] || "";
  const titleAddress = normaliseAddress(titleParts.slice(1).join(" - "));
  const photos = [...html.matchAll(/background-image:\s*url\((https:\/\/opinionatedeus\.blob\.core\.windows\.net\/food-images\/[^)]+)\)/g)]
    .map((match) => match[1])
    .filter((url, index, urls) => urls.indexOf(url) === index);
  const photoCredits = [...html.matchAll(/<span class="img-caption">([\s\S]*?)<\/span>/g)]
    .map((match) => stripTags(match[1]))
    .filter((credit, index, credits) => credits.indexOf(credit) === index);
  const hours = [...html.matchAll(/<label class="d-table-cell">([^<]+)<\/label>\s*<label class="d-table-cell last">([\s\S]*?)<\/label>/g)]
    .map((match) => ({
      day: stripTags(match[1]),
      value: stripTags(match[2])
    }));

  return { title, description, author, address, phone, website, mapQuery, photos, photoCredits, hours, pageTitle, titleName, titleAddress };
}

async function enrichDetails(restaurants) {
  for (let index = 0; index < restaurants.length; index += 1) {
    const rest = restaurants[index];
    if (!rest.oadUrl) continue;
    const legacyDetailCachePath = path.join(cacheDir, `detail-${rest.id}.html`);
    const cachePath = existsSync(legacyDetailCachePath)
      ? legacyDetailCachePath
      : path.join(cacheDir, cacheName("detail", rest.oadUrl, "html"));
    const html = await fetchCached(rest.oadUrl, cachePath);
    const detail = parseDetail(html);
    const detailMatchesLondon = isCredibleLondonAddress(detail.address);
    const titleAddressMatchesLondon = isCredibleLondonAddress(detail.titleAddress) && titleNameMatches(rest, detail.titleName);
    const verifiedAddress = detailMatchesLondon
      ? detail.address
      : titleAddressMatchesLondon
        ? detail.titleAddress
        : null;
    const detailAddressStatus = detailMatchesLondon
      ? "verified"
      : titleAddressMatchesLondon
        ? "title-fallback"
        : detail.address
          ? "rejected"
          : "missing";

    restaurants[index] = {
      ...rest,
      address: verifiedAddress,
      addressSource: detailMatchesLondon ? "oad-detail" : titleAddressMatchesLondon ? "oad-title" : null,
      phone: verifiedAddress ? detail.phone || null : null,
      website: verifiedAddress ? detail.website || null : null,
      description: verifiedAddress ? detail.description || null : null,
      reviewAuthor: verifiedAddress ? detail.author || null : null,
      photos: verifiedAddress && detail.photos.length ? detail.photos : rest.image ? [rest.image] : [],
      photoCredits: verifiedAddress ? detail.photoCredits : [],
      hours: verifiedAddress ? detail.hours : [],
      mapQuery: verifiedAddress ? detail.mapQuery || null : null,
      titleAddress: detail.titleAddress || null,
      titleAddressNameMatched: titleAddressMatchesLondon,
      detailWarning: detail.address && !detailMatchesLondon && !titleAddressMatchesLondon ? `OAD detail page address did not match London: ${detail.address}` : null,
      dataQuality: {
        ...rest.dataQuality,
        oadDetail: Boolean(verifiedAddress),
        detailAddressStatus
      }
    };
  }
}

function geocodeQueries(rest) {
  const addressAlreadyContainsName = rest.address && normaliseName(rest.address).includes(normaliseName(rest.displayName));
  const addressQueries = [
    rest.address,
    rest.address && !addressAlreadyContainsName ? `${rest.displayName}, ${rest.address}` : null,
    rest.titleAddressNameMatched && (rest.addressSource === "oad-title" || addressesLikelyMatch(rest.address, rest.titleAddress)) ? rest.titleAddress : null
  ].filter(Boolean);

  const fallbackQueries = rest.address ? [] : [
    `${rest.displayName}, London, United Kingdom`,
    `${rest.name}, London, United Kingdom`,
    `${rest.displayName}, ${rest.cuisine}, London, United Kingdom`
  ];

  return [...addressQueries, ...fallbackQueries]
    .filter(Boolean)
    .filter((query, index, queries) => queries.indexOf(query) === index);
}

function applyAddressCorrections(restaurants) {
  for (let index = 0; index < restaurants.length; index += 1) {
    const correctedAddress = ADDRESS_CORRECTIONS[restaurants[index].id];
    if (!correctedAddress) continue;

    restaurants[index] = {
      ...restaurants[index],
      address: correctedAddress,
      addressSource: "manual-correction",
      dataCorrections: [
        ...(restaurants[index].dataCorrections || []),
        "Corrected an OAD address/title typo or venue-noise string before geocoding."
      ],
      dataQuality: {
        ...restaurants[index].dataQuality,
        oadDetail: true,
        detailAddressStatus: "corrected"
      }
    };
  }
}

async function geocode(restaurants) {
  for (let index = 0; index < restaurants.length; index += 1) {
    const rest = restaurants[index];
    let result = null;
    let queryUsed = null;

    for (const query of geocodeQueries(rest)) {
      const legacyGeoName = `geo-${encodeURIComponent(query).replace(/%/g, "_")}.json`;
      const legacyGeoCachePath = path.join(cacheDir, legacyGeoName);
      const cachePath = legacyGeoCachePath.length < 240 && existsSync(legacyGeoCachePath)
        ? legacyGeoCachePath
        : path.join(cacheDir, cacheName("geo", query, "json"));
      const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=5&countrycodes=gb&q=${encodeURIComponent(query)}`;
      const text = await fetchCached(url, cachePath, 1100);
      const results = JSON.parse(text);
      result = results.find(isUsableLondonGeocode) || null;
      queryUsed = query;
      if (result) break;
    }

    if (result) {
      restaurants[index] = {
        ...rest,
        lat: Number(result.lat),
        lng: Number(result.lon),
        geocodeQuery: queryUsed,
        geocodeDisplayName: result.display_name,
        coordinateQuality: rest.address
          ? "verified-address"
          : rest.detailWarning
            ? "name-match-review"
            : "name-match",
        locationQuality: rest.detailWarning ? "review" : "verified",
        needsManualReview: Boolean(rest.detailWarning),
        dataQuality: {
          ...rest.dataQuality,
          geocoded: true
        }
      };
    } else {
      restaurants[index] = {
        ...rest,
        lat: null,
        lng: null,
        geocodeQuery: queryUsed,
        geocodeDisplayName: null,
        coordinateQuality: "missing",
        locationQuality: "unmapped",
        needsManualReview: true
      };
    }
  }
}

function removeNonLondonAnomalies(restaurants) {
  const kept = [];
  const excluded = [];

  for (const restaurant of restaurants) {
    const shouldExclude = isKnownNonLondonRegion(restaurant) && !restaurant.address;
    if (shouldExclude) {
      excluded.push({
        id: restaurant.id,
        name: restaurant.displayName,
        regionName: restaurant.regionName,
        reason: restaurant.detailWarning || "OAD API labelled the row as London, but the region/detail address points outside London."
      });
    } else {
      kept.push(restaurant);
    }
  }

  return { kept, excluded };
}

function buildMetadata(restaurants, excludedRecords) {
  const listEntries = restaurants.flatMap((restaurant) => restaurant.listEntries);
  const byCategory = Object.fromEntries(
    SOURCES.map((source) => [
      source.categoryId,
      restaurants.filter((restaurant) => restaurant.categoryIds.includes(source.categoryId)).length
    ])
  );
  const byCoordinateQuality = restaurants.reduce((summary, restaurant) => {
    const key = restaurant.coordinateQuality || "unknown";
    summary[key] = (summary[key] || 0) + 1;
    return summary;
  }, {});

  return {
    title: "OAD Europe 2026 London Restaurants",
    generatedAt: new Date().toISOString(),
    source: "OAD Guides Europe 2026",
    sourceLists: SOURCES.map(({ raw, estimatedPrice, priceBasis, ...source }) => source),
    restaurantCount: restaurants.length,
    listEntryCount: listEntries.length,
    excludedCount: excludedRecords.length,
    excludedRecords,
    byCategory,
    byCoordinateQuality,
    dataNotes: [
      "Restaurant list membership, ranks, cuisine, chef, images, descriptions, address, phone, website and opening hours are scraped from OAD Guides pages.",
      "Rows whose OAD detail page points outside London are kept when a London branch can be resolved from name + London lookup; the OAD mismatch warning remains visible.",
      "Clear non-London OAD API anomalies are excluded when no London branch address can be resolved.",
      "A small correction table normalises obvious OAD address typos and venue-noise strings before geocoding; coordinates are still obtained from OpenStreetMap, not hardcoded.",
      "Latitude/longitude are geocoded from verified OAD London address strings with OpenStreetMap Nominatim and validated against a London map bound.",
      "Estimated price is a transparent category-based estimate because OAD does not publish price bands in the scraped fields."
    ]
  };
}

async function main() {
  ensureDirs();
  const collectedRestaurants = collectLondonEntries();
  await enrichDetails(collectedRestaurants);
  applyAddressCorrections(collectedRestaurants);
  const { kept: restaurants, excluded } = removeNonLondonAnomalies(collectedRestaurants);
  await geocode(restaurants);

  const payload = {
    metadata: buildMetadata(restaurants, excluded),
    restaurants
  };

  writeFileSync(path.join(outputDir, "oad-london-2026.json"), `${JSON.stringify(payload, null, 2)}\n`);
  console.log(`Wrote ${restaurants.length} London restaurants to src/data/oad-london-2026.json`);
  if (excluded.length) console.log(`Excluded ${excluded.length} non-London OAD anomalies`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
