const LONDON_BOUNDS = {
  minLat: 51.28,
  maxLat: 51.72,
  minLng: -0.55,
  maxLng: 0.33
};

const NAME_STOP_WORDS = new Set([
  "the",
  "restaurant",
  "bar",
  "cafe",
  "café",
  "london",
  "at",
  "by",
  "and",
  "co",
  "ltd"
]);

export function normalizeName(value = "") {
  return String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .split(" ")
    .filter((token) => token && !NAME_STOP_WORDS.has(token))
    .join(" ")
    .trim();
}

export function normalizePhone(value = "") {
  return String(value).replace(/[^\d+]/g, "").replace(/^0044/, "+44");
}

export function extractPostcode(value = "") {
  const match = String(value).toUpperCase().match(/\b([A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2})\b/);
  return match ? match[1].replace(/\s+/, " ") : "";
}

export function getDomain(value = "") {
  if (!value) return "";
  try {
    return new URL(value).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return "";
  }
}

export function isInsideLondon(lat, lng) {
  return (
    Number.isFinite(lat) &&
    Number.isFinite(lng) &&
    lat >= LONDON_BOUNDS.minLat &&
    lat <= LONDON_BOUNDS.maxLat &&
    lng >= LONDON_BOUNDS.minLng &&
    lng <= LONDON_BOUNDS.maxLng
  );
}

export function distanceMeters(first, second) {
  if (!first || !second) return Number.POSITIVE_INFINITY;
  const firstLat = Number(first.lat ?? first.latitude);
  const firstLng = Number(first.lng ?? first.longitude);
  const secondLat = Number(second.lat ?? second.latitude);
  const secondLng = Number(second.lng ?? second.longitude);
  if (![firstLat, firstLng, secondLat, secondLng].every(Number.isFinite)) return Number.POSITIVE_INFINITY;

  const radius = 6_371_000;
  const toRad = (value) => (value * Math.PI) / 180;
  const dLat = toRad(secondLat - firstLat);
  const dLng = toRad(secondLng - firstLng);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(firstLat)) * Math.cos(toRad(secondLat)) * Math.sin(dLng / 2) ** 2;

  return radius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function scoreCandidate(restaurant, candidate) {
  const restaurantName = normalizeName(restaurant.displayName || restaurant.name);
  const candidateName = normalizeName(candidate.displayName || candidate.name);
  const restaurantPostcode = extractPostcode(restaurant.address || "");
  const candidatePostcode = extractPostcode(candidate.address || candidate.formattedAddress || "");
  const restaurantPhone = normalizePhone(restaurant.phone || "");
  const candidatePhone = normalizePhone(candidate.phone || candidate.internationalPhoneNumber || candidate.nationalPhoneNumber || "");
  const restaurantDomain = getDomain(restaurant.website || "");
  const candidateDomain = getDomain(candidate.website || candidate.websiteUri || "");
  const candidateLat = Number(candidate.lat ?? candidate.location?.latitude);
  const candidateLng = Number(candidate.lng ?? candidate.location?.longitude);
  const metres = distanceMeters(
    { lat: restaurant.lat, lng: restaurant.lng },
    { lat: candidateLat, lng: candidateLng }
  );

  const signals = {
    name: Boolean(
      restaurantName &&
        candidateName &&
        (restaurantName === candidateName || restaurantName.includes(candidateName) || candidateName.includes(restaurantName))
    ),
    postcode: Boolean(restaurantPostcode && candidatePostcode && restaurantPostcode === candidatePostcode),
    phone: Boolean(restaurantPhone && candidatePhone && restaurantPhone.endsWith(candidatePhone.slice(-9))),
    website: Boolean(restaurantDomain && candidateDomain && restaurantDomain === candidateDomain),
    distance: Number.isFinite(metres) && metres <= 250,
    london: isInsideLondon(candidateLat, candidateLng),
    operational: !candidate.businessStatus || candidate.businessStatus === "OPERATIONAL"
  };

  let score = 0;
  if (signals.name) score += 0.28;
  if (signals.postcode) score += 0.2;
  if (signals.phone) score += 0.16;
  if (signals.website) score += 0.18;
  if (signals.distance) score += 0.12;
  if (signals.london) score += 0.06;
  if (!signals.operational) score -= 0.22;

  return {
    confidence: clamp(score, 0, 1),
    signals,
    distanceMeters: metres
  };
}

export function createFallbackBranch(restaurant, checkedAt = null) {
  return {
    id: `${restaurant.id}:primary`,
    restaurantId: restaurant.id,
    displayName: restaurant.displayName,
    address: restaurant.address || null,
    lat: typeof restaurant.lat === "number" ? restaurant.lat : null,
    lng: typeof restaurant.lng === "number" ? restaurant.lng : null,
    phone: restaurant.phone || null,
    website: restaurant.website || null,
    externalPlaceId: null,
    mapUri: null,
    businessStatus: null,
    confidence: restaurant.locationQuality === "verified" ? 0.74 : 0.46,
    isPrimary: true,
    sources: [
      {
        type: "oad",
        label: restaurant.address ? "OAD detail address" : "OAD list metadata",
        url: restaurant.oadUrl || null,
        checkedAt
      },
      ...(restaurant.geocodeDisplayName
        ? [{ type: "nominatim", label: "OpenStreetMap geocode", checkedAt }]
        : [])
    ]
  };
}

export function candidateToBranch(restaurant, candidate, checkedAt = null) {
  const match = scoreCandidate(restaurant, candidate);
  const placeId = candidate.externalPlaceId || candidate.id || null;
  const lat = Number(candidate.lat ?? candidate.location?.latitude);
  const lng = Number(candidate.lng ?? candidate.location?.longitude);

  return {
    id: placeId ? `${restaurant.id}:source:${placeId}` : `${restaurant.id}:candidate:${hashBranchKey(candidate)}`,
    restaurantId: restaurant.id,
    displayName: candidate.displayName || candidate.name || restaurant.displayName,
    address: candidate.address || candidate.formattedAddress || null,
    lat: Number.isFinite(lat) ? lat : null,
    lng: Number.isFinite(lng) ? lng : null,
    phone: candidate.phone || candidate.internationalPhoneNumber || candidate.nationalPhoneNumber || null,
    website: candidate.website || candidate.websiteUri || restaurant.website || null,
    externalPlaceId: placeId,
    mapUri: candidate.mapUri || null,
    businessStatus: candidate.businessStatus || null,
    confidence: match.confidence,
    isPrimary: false,
    sources: [
      ...(candidate.sourceType
        ? [{ type: candidate.sourceType, label: candidate.sourceLabel || "Free source candidate", url: candidate.sourceUrl || null, checkedAt }]
        : []),
      ...(candidate.geocodedBy === "nominatim" ? [{ type: "nominatim", label: "OpenStreetMap geocode", checkedAt }] : []),
      ...(restaurant.website ? [{ type: "website", label: "Official website domain", url: restaurant.website, checkedAt }] : [])
    ],
    match
  };
}

export function buildVerifiedBranches(restaurant, candidates = [], checkedAt = new Date().toISOString()) {
  const usableCandidates = candidates
    .filter((candidate) => isInsideLondon(
      Number(candidate.lat ?? candidate.location?.latitude),
      Number(candidate.lng ?? candidate.location?.longitude)
    ))
    .map((candidate) => candidateToBranch(restaurant, candidate, checkedAt))
    .filter((branch) => branch.confidence >= 0.48)
    .sort((first, second) => second.confidence - first.confidence);

  const deduped = dedupeBranches(usableCandidates);
  const fallback = createFallbackBranch(restaurant, checkedAt);
  const branches = deduped.length ? deduped : [fallback];
  const primaryIndex = Math.max(0, branches.findIndex((branch) => branch.confidence >= 0.72));
  const finalBranches = branches.map((branch, index) => ({
    ...branch,
    isPrimary: index === primaryIndex
  }));
  const highConfidenceCount = finalBranches.filter((branch) => branch.confidence >= 0.72).length;
  const closedCount = finalBranches.filter((branch) => String(branch.businessStatus || "").includes("CLOSED")).length;
  const issues = [];

  if (!deduped.length && !restaurant.address) issues.push("No verified London branch candidate found.");
  if (deduped.length && highConfidenceCount === 0) issues.push("Free-source candidates need manual review.");
  if (closedCount) issues.push("One or more branch candidates are marked closed.");
  if (deduped.length > 1 && highConfidenceCount < 2) issues.push("Multiple possible branches were found with mixed confidence.");

  const confidence = finalBranches.length
    ? Math.max(...finalBranches.map((branch) => branch.confidence))
    : fallback.confidence;
  const status = issues.length || confidence < 0.64 ? "needs-review" : "verified";

  return {
    branches: finalBranches,
    verification: {
      status,
      confidence,
      checkedAt,
      issues,
      sourceAgreement: buildSourceAgreement(restaurant, finalBranches)
    }
  };
}

export function buildSourceAgreement(restaurant, branches) {
  const primary = branches.find((branch) => branch.isPrimary) || branches[0];
  if (!primary) {
    return {
      address: false,
      phone: false,
      website: false,
      coordinates: false,
      branchCount: 0
    };
  }

  return {
    address: Boolean(extractPostcode(restaurant.address || "") && extractPostcode(restaurant.address || "") === extractPostcode(primary.address || "")),
    phone: Boolean(normalizePhone(restaurant.phone || "") && normalizePhone(primary.phone || "").endsWith(normalizePhone(restaurant.phone || "").slice(-9))),
    website: Boolean(getDomain(restaurant.website || "") && getDomain(restaurant.website || "") === getDomain(primary.website || "")),
    coordinates: distanceMeters(
      { lat: restaurant.lat, lng: restaurant.lng },
      { lat: primary.lat, lng: primary.lng }
    ) <= 250,
    branchCount: branches.length
  };
}

function dedupeBranches(branches) {
  const deduped = [];

  for (const branch of branches) {
    const duplicateIndex = deduped.findIndex((existing) => {
      if (branch.externalPlaceId && existing.externalPlaceId === branch.externalPlaceId) return true;
      if (extractPostcode(branch.address || "") && extractPostcode(branch.address || "") === extractPostcode(existing.address || "")) return true;
      return distanceMeters(branch, existing) <= 50;
    });

    if (duplicateIndex === -1) {
      deduped.push(stripMatch(branch));
      continue;
    }

    if (branch.confidence > deduped[duplicateIndex].confidence) deduped[duplicateIndex] = stripMatch(branch);
  }

  return deduped;
}

function stripMatch(branch) {
  const publicBranch = { ...branch };
  delete publicBranch.match;
  return publicBranch;
}

function hashBranchKey(candidate) {
  return normalizeName(`${candidate.displayName || candidate.name || ""} ${candidate.address || candidate.formattedAddress || ""}`)
    .replace(/\s+/g, "-")
    .slice(0, 70) || "unknown";
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
