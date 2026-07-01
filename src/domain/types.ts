export const CATEGORY_IDS = ["top", "casual", "classical", "cheap-eats"] as const;
export const PRICE_TIERS = ["£", "££", "£££", "££££"] as const;
export const VISIT_STATUSES = ["want", "booked", "visited", "loved"] as const;

export type CategoryId = (typeof CATEGORY_IDS)[number];
export type PriceTier = (typeof PRICE_TIERS)[number];
export type VisitStatus = (typeof VISIT_STATUSES)[number];
export type SortMode = "rank" | "name" | "category" | "price";
export type DiscoveryPreset = "destination" | "casual" | "value" | "saved";

export type ListEntry = {
  categoryId: CategoryId;
  category: string;
  listId?: number;
  rank: number;
  rankTypeCode: string;
  listRankTypeId?: number;
  listRestaurantTypeName?: string | null;
  sourceUrl: string;
};

export type Restaurant = {
  id: string;
  oadRestaurantId?: number;
  name: string;
  displayName: string;
  chef: string;
  cuisine: string;
  city: string;
  country: string;
  regionName: string;
  locationName?: string;
  friendlyUrl?: string;
  oadUrl: string | null;
  image: string | null;
  thumbnail: string | null;
  categories: string[];
  categoryIds: CategoryId[];
  listEntries: ListEntry[];
  estimatedPrice: string;
  priceBasis: string;
  address: string | null;
  addressSource?: "oad-detail" | "oad-title" | "manual-correction" | null;
  phone: string | null;
  website: string | null;
  description: string | null;
  photos: string[];
  photoCredits: string[];
  hours: { day: string; value: string }[];
  detailWarning: string | null;
  lat: number | null;
  lng: number | null;
  geocodeQuery?: string | null;
  geocodeDisplayName: string | null;
  coordinateQuality?: "verified-address" | "name-match" | "name-match-review" | "missing";
  locationQuality?: "verified" | "review" | "unmapped";
  needsManualReview?: boolean;
  dataCorrections?: string[];
  dataQuality: {
    oadList: boolean;
    oadDetail: boolean;
    geocoded: boolean;
    estimatedPrice: boolean;
    detailAddressStatus?: "verified" | "title-fallback" | "rejected" | "missing" | "corrected";
  };
};

export type DataSet = {
  metadata: {
    title?: string;
    restaurantCount: number;
    listEntryCount: number;
    excludedCount?: number;
    byCategory: Record<CategoryId, number>;
    byCoordinateQuality?: Record<string, number>;
    generatedAt: string;
    source?: string;
    dataNotes: string[];
  };
  restaurants: Restaurant[];
};

export type UserRecord = {
  status?: VisitStatus | undefined;
  note?: string | undefined;
};

export type UserRecords = Record<string, UserRecord>;

export type RestaurantFilters = {
  query: string;
  activeCategories: CategoryId[];
  activePrices: PriceTier[];
  cuisineFilter: string;
  areaFilter: string;
  sortMode: SortMode;
  showNeedsReview: boolean;
  showSavedOnly: boolean;
};

export type CountOption = {
  label: string;
  count: number;
};
