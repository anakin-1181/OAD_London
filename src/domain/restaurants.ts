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

export type RestaurantPresentation = {
  area: string;
  bestRank: number;
  branchCount: number;
  branchCountLabel: string | null;
  branches: RestaurantBranch[];
  hasCoordinate: boolean;
  heroImage: string | null;
  mappedBranches: RestaurantBranch[];
  needsReview: boolean;
  primaryCategory: CategoryId;
  rankLabel: string;
  searchText: string;
};

const presentationCache = new WeakMap<Restaurant, RestaurantPresentation>();

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
  return getRestaurantPresentation(restaurant).bestRank;
}

export function getRankLabel(restaurant: Restaurant): string {
  return getRestaurantPresentation(restaurant).rankLabel;
}

export function getPrimaryCategory(restaurant: Restaurant): CategoryId {
  return getRestaurantPresentation(restaurant).primaryCategory;
}

export function hasCoordinate(restaurant: Restaurant): boolean {
  return getRestaurantPresentation(restaurant).hasCoordinate;
}

export function hasBranchCoordinate(branch: RestaurantBranch): boolean {
  return typeof branch.lat === "number" && typeof branch.lng === "number";
}

export function needsReview(restaurant: Restaurant): boolean {
  return getRestaurantPresentation(restaurant).needsReview;
}

export function priceValue(price: string): number {
  return price.length;
}

export function getArea(restaurant: Restaurant): string {
  return getRestaurantPresentation(restaurant).area;
}

export function getHeroImage(restaurant: Restaurant): string | null {
  return getRestaurantPresentation(restaurant).heroImage;
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
  return getRestaurantPresentation(restaurant).branches;
}

export function getRestaurantPresentation(restaurant: Restaurant): RestaurantPresentation {
  const cached = presentationCache.get(restaurant);
  if (cached) return cached;

  const branches = buildRestaurantBranches(restaurant);
  const mappedBranches = branches.filter(hasBranchCoordinate);
  const branchCount = mappedBranches.length;
  const bestRank = getBestRankFromEntries(restaurant);
  const area = getAreaFromRegion(restaurant);
  const hasMappedCoordinate = branchCount > 0;
  const needsReviewValue =
    restaurant.needsManualReview === true ||
    !hasMappedCoordinate ||
    Boolean(restaurant.detailWarning) ||
    restaurant.verification?.status === "needs-review" ||
    Boolean(restaurant.verification?.issues.length);
  const presentation: RestaurantPresentation = {
    area,
    bestRank,
    branchCount,
    branchCountLabel: branchCount > 1 ? `${branchCount} London branches` : null,
    branches,
    hasCoordinate: hasMappedCoordinate,
    heroImage: restaurant.photos?.[0] ?? restaurant.image ?? restaurant.thumbnail ?? null,
    mappedBranches,
    needsReview: needsReviewValue,
    primaryCategory: getPrimaryCategoryFromIds(restaurant),
    rankLabel: bestRank < 9999 ? `#${bestRank}` : "Review",
    searchText: buildRestaurantSearchText(restaurant, branches, area)
  };

  presentationCache.set(restaurant, presentation);
  return presentation;
}

function buildRestaurantBranches(restaurant: Restaurant): RestaurantBranch[] {
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
  const branches = getRestaurantPresentation(restaurant).branches;
  return (
    branches.find((branch) => branch.isPrimary && hasBranchCoordinate(branch)) ||
    branches.find(hasBranchCoordinate) ||
    branches[0]
  );
}

export function getBranchById(restaurant: Restaurant, branchId: string | undefined): RestaurantBranch | undefined {
  const branches = getRestaurantPresentation(restaurant).branches;
  return branches.find((branch) => branch.id === branchId) || getPrimaryBranch(restaurant);
}

export function getBranchCountLabel(restaurant: Restaurant): string | null {
  return getRestaurantPresentation(restaurant).branchCountLabel;
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

  return getRestaurantPresentation(restaurant).searchText.includes(normalizedQuery);
}

export function sortRestaurants(restaurants: Restaurant[], sortMode: SortMode): Restaurant[] {
  return [...restaurants].sort((a, b) => {
    const left = getRestaurantPresentation(a);
    const right = getRestaurantPresentation(b);

    if (sortMode === "name") return a.displayName.localeCompare(b.displayName);
    if (sortMode === "category") return left.primaryCategory.localeCompare(right.primaryCategory);
    if (sortMode === "price") {
      return priceValue(a.estimatedPrice) - priceValue(b.estimatedPrice) || left.bestRank - right.bestRank;
    }
    return left.bestRank - right.bestRank || a.displayName.localeCompare(b.displayName);
  });
}

export function filterRestaurants(
  restaurants: Restaurant[],
  filters: RestaurantFilters,
  userRecords: UserRecords = {}
): Restaurant[] {
  const filtered = restaurants
    .filter((restaurant) => {
      const presentation = getRestaurantPresentation(restaurant);

      return (
        restaurant.categoryIds.some((categoryId) => filters.activeCategories.includes(categoryId)) &&
        filters.activePrices.includes(restaurant.estimatedPrice as PriceTier) &&
        cuisineMatches(restaurant, filters.cuisineFilter) &&
        (filters.areaFilter === "all" || presentation.area === filters.areaFilter) &&
        (!filters.showNeedsReview || presentation.needsReview) &&
        (!filters.showSavedOnly || isSaved(restaurant, userRecords)) &&
        (!filters.query.trim() || presentation.searchText.includes(filters.query.trim().toLowerCase()))
      );
    });

  return sortRestaurants(filtered, filters.sortMode);
}

export function buildCuisineOptions(restaurants: Restaurant[]): CountOption[] {
  return buildCountOptions(restaurants, (restaurant) => restaurant.cuisine);
}

export function buildAreaOptions(restaurants: Restaurant[]): CountOption[] {
  return buildCountOptions(restaurants, getArea);
}

export function buildRestaurantReasons(restaurant: Restaurant): string[] {
  const presentation = getRestaurantPresentation(restaurant);
  const reasons = [`Ranked ${presentation.rankLabel} across ${restaurant.categories.join(", ")}`];

  if (restaurant.cuisine) reasons.push(`${restaurant.cuisine} cooking`);
  if (restaurant.estimatedPrice) reasons.push(`${restaurant.estimatedPrice} price estimate`);
  if (presentation.hasCoordinate) reasons.push(`Mapped in ${presentation.area} London`);
  if (presentation.needsReview) reasons.push("Data quality needs a quick human check");

  return reasons.slice(0, 4);
}

export function getExplorerStats(allRestaurants: Restaurant[], filteredRestaurants: Restaurant[], userRecords: UserRecords) {
  const mappedRestaurants = filteredRestaurants.filter((restaurant) => getRestaurantPresentation(restaurant).hasCoordinate);
  const savedCount = allRestaurants.filter((restaurant) => isSaved(restaurant, userRecords)).length;
  const lovedCount = Object.values(userRecords).filter((record) => record.status === "loved").length;
  const reviewCount = allRestaurants.filter((restaurant) => getRestaurantPresentation(restaurant).needsReview).length;
  const missingCoordinates = allRestaurants.filter((restaurant) => !getRestaurantPresentation(restaurant).hasCoordinate).length;
  const bestVisibleRank = filteredRestaurants.reduce((best, restaurant) => Math.min(best, getRestaurantPresentation(restaurant).bestRank), 9999);

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

function getBestRankFromEntries(restaurant: Restaurant): number {
  const ranks = restaurant.listEntries.map((entry) => entry.rank).filter((rank) => Number.isFinite(rank));
  return ranks.length ? Math.min(...ranks) : 9999;
}

function getPrimaryCategoryFromIds(restaurant: Restaurant): CategoryId {
  if (restaurant.categoryIds.includes("top")) return "top";
  if (restaurant.categoryIds.includes("classical")) return "classical";
  if (restaurant.categoryIds.includes("casual")) return "casual";
  return restaurant.categoryIds[0] ?? "cheap-eats";
}

function getAreaFromRegion(restaurant: Restaurant): string {
  const [, area] = String(restaurant.regionName || "").split(",");
  return area?.trim() || "Central";
}

function buildRestaurantSearchText(restaurant: Restaurant, branches: RestaurantBranch[], area: string): string {
  return [
    restaurant.displayName,
    restaurant.name,
    restaurant.chef,
    restaurant.cuisine,
    restaurant.address,
    area,
    restaurant.categories.join(" "),
    ...branches.flatMap((branch) => [
      branch.displayName,
      branch.address,
      branch.phone,
      branch.website
    ])
  ]
    .filter(Boolean)
    .join("\u0000")
    .toLowerCase();
}
