import {
  CATEGORY_IDS,
  PRICE_TIERS,
  type CategoryId,
  type CountOption,
  type PriceTier,
  type Restaurant,
  type RestaurantBranch,
  type RestaurantFilters,
  type SortMode,
  type UserRecords
} from "./types";

export function createInitialFilters(): RestaurantFilters {
  return {
    query: "",
    activeCategories: [...CATEGORY_IDS],
    activePrices: [...PRICE_TIERS],
    cuisineFilter: "all",
    areaFilter: "all",
    sortMode: "rank",
    showNeedsReview: false,
    showSavedOnly: false
  };
}

export function getBestRank(restaurant: Restaurant): number {
  const ranks = restaurant.listEntries.map((entry) => entry.rank).filter((rank) => Number.isFinite(rank));
  return ranks.length ? Math.min(...ranks) : 9999;
}

export function getRankLabel(restaurant: Restaurant): string {
  const rank = getBestRank(restaurant);
  return rank < 9999 ? `#${rank}` : "Review";
}

export function getPrimaryCategory(restaurant: Restaurant): CategoryId {
  if (restaurant.categoryIds.includes("top")) return "top";
  if (restaurant.categoryIds.includes("classical")) return "classical";
  if (restaurant.categoryIds.includes("casual")) return "casual";
  return restaurant.categoryIds[0] ?? "cheap-eats";
}

export function hasCoordinate(restaurant: Restaurant): boolean {
  return getRestaurantBranches(restaurant).some(hasBranchCoordinate);
}

export function hasBranchCoordinate(branch: RestaurantBranch): boolean {
  return typeof branch.lat === "number" && typeof branch.lng === "number";
}

export function needsReview(restaurant: Restaurant): boolean {
  return (
    restaurant.needsManualReview === true ||
    !hasCoordinate(restaurant) ||
    Boolean(restaurant.detailWarning) ||
    restaurant.verification?.status === "needs-review" ||
    Boolean(restaurant.verification?.issues.length)
  );
}

export function priceValue(price: string): number {
  return price.length;
}

export function getArea(restaurant: Restaurant): string {
  const [, area] = String(restaurant.regionName || "").split(",");
  return area?.trim() || "Central";
}

export function getHeroImage(restaurant: Restaurant): string | null {
  return restaurant.photos?.[0] ?? restaurant.image ?? restaurant.thumbnail ?? null;
}

export function buildMapSearchUrl(restaurant: Restaurant): string {
  return buildBranchMapSearchUrl(getPrimaryBranch(restaurant), restaurant);
}

export function buildBranchMapSearchUrl(branch: RestaurantBranch | undefined, restaurant: Restaurant): string {
  if (branch?.mapUri) return branch.mapUri;
  const query = branch?.address || restaurant.address || `${restaurant.displayName}, London`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function isSaved(restaurant: Restaurant, userRecords: UserRecords): boolean {
  const record = userRecords[restaurant.id];
  return Boolean(record?.status || record?.note);
}

export function getSavedRestaurants(restaurants: Restaurant[], userRecords: UserRecords): Restaurant[] {
  return sortRestaurants(restaurants.filter((restaurant) => isSaved(restaurant, userRecords)), "rank");
}

export function getRestaurantBranches(restaurant: Restaurant): RestaurantBranch[] {
  if (restaurant.branches?.length) {
    return restaurant.branches.map((branch, index) => ({
      ...branch,
      restaurantId: branch.restaurantId || restaurant.id,
      isPrimary: branch.isPrimary ?? index === 0
    }));
  }

  return [
    {
      id: `${restaurant.id}:primary`,
      restaurantId: restaurant.id,
      displayName: restaurant.displayName,
      address: restaurant.address,
      lat: restaurant.lat,
      lng: restaurant.lng,
      phone: restaurant.phone,
      website: restaurant.website,
      externalPlaceId: null,
      mapUri: null,
      businessStatus: null,
      confidence: restaurant.locationQuality === "verified" ? 0.74 : 0.46,
      isPrimary: true,
      sources: [
        { type: "oad", label: restaurant.address ? "OAD detail address" : "OAD list metadata", url: restaurant.oadUrl },
        ...(restaurant.geocodeDisplayName ? [{ type: "nominatim" as const, label: "OpenStreetMap geocode" }] : [])
      ]
    }
  ];
}

export function getPrimaryBranch(restaurant: Restaurant): RestaurantBranch | undefined {
  const branches = getRestaurantBranches(restaurant);
  return (
    branches.find((branch) => branch.isPrimary && hasBranchCoordinate(branch)) ||
    branches.find(hasBranchCoordinate) ||
    branches[0]
  );
}

export function getBranchById(restaurant: Restaurant, branchId: string | undefined): RestaurantBranch | undefined {
  const branches = getRestaurantBranches(restaurant);
  return branches.find((branch) => branch.id === branchId) || getPrimaryBranch(restaurant);
}

export function getBranchCountLabel(restaurant: Restaurant): string | null {
  const branchCount = getRestaurantBranches(restaurant).filter(hasBranchCoordinate).length;
  if (branchCount <= 1) return null;
  return `${branchCount} London branches`;
}

export function cuisineMatches(restaurant: Restaurant, cuisine: string): boolean {
  if (cuisine === "all") return true;
  const current = restaurant.cuisine.toLowerCase();
  const selected = cuisine.toLowerCase();
  return current === selected || current.includes(selected);
}

export function restaurantMatchesQuery(restaurant: Restaurant, query: string): boolean {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return true;

  return [
    restaurant.displayName,
    restaurant.name,
    restaurant.chef,
    restaurant.cuisine,
    restaurant.address,
    getArea(restaurant),
    restaurant.categories.join(" "),
    ...getRestaurantBranches(restaurant).flatMap((branch) => [
      branch.displayName,
      branch.address,
      branch.phone,
      branch.website
    ])
  ]
    .filter(Boolean)
    .some((value) => String(value).toLowerCase().includes(normalizedQuery));
}

export function sortRestaurants(restaurants: Restaurant[], sortMode: SortMode): Restaurant[] {
  return [...restaurants].sort((a, b) => {
    if (sortMode === "name") return a.displayName.localeCompare(b.displayName);
    if (sortMode === "category") return getPrimaryCategory(a).localeCompare(getPrimaryCategory(b));
    if (sortMode === "price") {
      return priceValue(a.estimatedPrice) - priceValue(b.estimatedPrice) || getBestRank(a) - getBestRank(b);
    }
    return getBestRank(a) - getBestRank(b) || a.displayName.localeCompare(b.displayName);
  });
}

export function filterRestaurants(
  restaurants: Restaurant[],
  filters: RestaurantFilters,
  userRecords: UserRecords = {}
): Restaurant[] {
  const filtered = restaurants
    .filter((restaurant) => restaurant.categoryIds.some((categoryId) => filters.activeCategories.includes(categoryId)))
    .filter((restaurant) => filters.activePrices.includes(restaurant.estimatedPrice as PriceTier))
    .filter((restaurant) => cuisineMatches(restaurant, filters.cuisineFilter))
    .filter((restaurant) => filters.areaFilter === "all" || getArea(restaurant) === filters.areaFilter)
    .filter((restaurant) => (filters.showNeedsReview ? needsReview(restaurant) : true))
    .filter((restaurant) => (filters.showSavedOnly ? isSaved(restaurant, userRecords) : true))
    .filter((restaurant) => restaurantMatchesQuery(restaurant, filters.query));

  return sortRestaurants(filtered, filters.sortMode);
}

export function buildCuisineOptions(restaurants: Restaurant[]): CountOption[] {
  return buildCountOptions(restaurants, (restaurant) => restaurant.cuisine);
}

export function buildAreaOptions(restaurants: Restaurant[]): CountOption[] {
  return buildCountOptions(restaurants, getArea);
}

export function buildRestaurantReasons(restaurant: Restaurant): string[] {
  const reasons = [`Ranked ${getRankLabel(restaurant)} across ${restaurant.categories.join(", ")}`];

  if (restaurant.cuisine) reasons.push(`${restaurant.cuisine} cooking`);
  if (restaurant.estimatedPrice) reasons.push(`${restaurant.estimatedPrice} price estimate`);
  if (hasCoordinate(restaurant)) reasons.push(`Mapped in ${getArea(restaurant)} London`);
  if (needsReview(restaurant)) reasons.push("Data quality needs a quick human check");

  return reasons.slice(0, 4);
}

export function getExplorerStats(allRestaurants: Restaurant[], filteredRestaurants: Restaurant[], userRecords: UserRecords) {
  const mappedRestaurants = filteredRestaurants.filter(hasCoordinate);
  const savedCount = allRestaurants.filter((restaurant) => isSaved(restaurant, userRecords)).length;
  const lovedCount = Object.values(userRecords).filter((record) => record.status === "loved").length;
  const reviewCount = allRestaurants.filter(needsReview).length;
  const missingCoordinates = allRestaurants.filter((restaurant) => !hasCoordinate(restaurant)).length;
  const bestVisibleRank = filteredRestaurants.reduce((best, restaurant) => Math.min(best, getBestRank(restaurant)), 9999);

  return {
    total: allRestaurants.length,
    filtered: filteredRestaurants.length,
    mapped: mappedRestaurants.length,
    missingCoordinates,
    reviewCount,
    savedCount,
    lovedCount,
    bestVisibleRank: bestVisibleRank < 9999 ? bestVisibleRank : null
  };
}

function buildCountOptions(restaurants: Restaurant[], getLabel: (restaurant: Restaurant) => string): CountOption[] {
  const counts = restaurants.reduce<Record<string, number>>((summary, restaurant) => {
    const label = getLabel(restaurant);
    if (!label) return summary;
    summary[label] = (summary[label] || 0) + 1;
    return summary;
  }, {});

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([label, count]) => ({ label, count }));
}
