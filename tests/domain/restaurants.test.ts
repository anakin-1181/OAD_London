import { describe, expect, it } from "vitest";
import {
  buildAreaOptions,
  createInitialFilters,
  filterRestaurants,
  getArea,
  getBestRank,
  getExplorerStats,
  getPrimaryCategory,
  needsReview
} from "../../src/domain/restaurants";
import type { Restaurant } from "../../src/domain/types";

const baseRestaurant: Restaurant = {
  id: "base",
  name: "Base",
  displayName: "Base",
  chef: "",
  cuisine: "Modern British",
  city: "London",
  country: "United Kingdom",
  regionName: "London,Central",
  oadUrl: null,
  image: null,
  thumbnail: null,
  categories: ["Top Restaurants"],
  categoryIds: ["top"],
  listEntries: [
    {
      categoryId: "top",
      category: "Top Restaurants",
      rank: 10,
      rankTypeCode: "",
      sourceUrl: "https://example.com/top"
    }
  ],
  estimatedPrice: "££££",
  priceBasis: "Test",
  address: "1 London Road",
  phone: null,
  website: null,
  description: null,
  photos: [],
  photoCredits: [],
  hours: [],
  detailWarning: null,
  lat: 51.5,
  lng: -0.1,
  geocodeDisplayName: "London",
  coordinateQuality: "verified-address",
  dataQuality: {
    oadList: true,
    oadDetail: true,
    geocoded: true,
    estimatedPrice: true
  }
};

function makeRestaurant(patch: Partial<Restaurant>): Restaurant {
  return {
    ...baseRestaurant,
    ...patch,
    dataQuality: {
      ...baseRestaurant.dataQuality,
      ...patch.dataQuality
    }
  };
}

describe("restaurant domain helpers", () => {
  it("uses the strongest guide signal for rank and primary category", () => {
    const restaurant = makeRestaurant({
      categoryIds: ["casual", "top"],
      listEntries: [
        { categoryId: "casual", category: "Casual", rank: 42, rankTypeCode: "", sourceUrl: "https://example.com/casual" },
        { categoryId: "top", category: "Top", rank: 8, rankTypeCode: "", sourceUrl: "https://example.com/top" }
      ]
    });

    expect(getBestRank(restaurant)).toBe(8);
    expect(getPrimaryCategory(restaurant)).toBe("top");
  });

  it("filters by category, price, area, query, and saved status", () => {
    const restaurants = [
      makeRestaurant({ id: "a", displayName: "The Table", cuisine: "French", regionName: "London,West" }),
      makeRestaurant({
        id: "b",
        displayName: "Noodle House",
        cuisine: "Ramen",
        categoryIds: ["cheap-eats"],
        categories: ["Cheap Eats"],
        estimatedPrice: "£",
        regionName: "London,East"
      })
    ];
    const filters = {
      ...createInitialFilters(),
      query: "noodle",
      activeCategories: ["cheap-eats"],
      activePrices: ["£"],
      areaFilter: "East",
      showSavedOnly: true
    };

    const result = filterRestaurants(restaurants, filters, { b: { status: "want" } });

    expect(result.map((restaurant) => restaurant.id)).toEqual(["b"]);
  });

  it("separates mapped, unmapped, review, and saved counts", () => {
    const restaurants = [
      makeRestaurant({ id: "mapped" }),
      makeRestaurant({ id: "missing", lat: null, lng: null, coordinateQuality: "missing" }),
      makeRestaurant({ id: "warning", detailWarning: "Review branch" })
    ];

    expect(needsReview(restaurants[1])).toBe(true);
    expect(needsReview(restaurants[2])).toBe(true);

    const stats = getExplorerStats(restaurants, restaurants, {
      mapped: { status: "loved" },
      warning: { note: "Book counter" }
    });

    expect(stats.mapped).toBe(2);
    expect(stats.missingCoordinates).toBe(1);
    expect(stats.reviewCount).toBe(2);
    expect(stats.savedCount).toBe(2);
    expect(stats.lovedCount).toBe(1);
  });

  it("builds area options from the OAD region suffix", () => {
    const restaurants = [
      makeRestaurant({ id: "central", regionName: "London,Central" }),
      makeRestaurant({ id: "east", regionName: "London,East" }),
      makeRestaurant({ id: "east-two", regionName: "London,East" })
    ];

    expect(getArea(restaurants[0])).toBe("Central");
    expect(buildAreaOptions(restaurants)).toEqual([
      { label: "East", count: 2 },
      { label: "Central", count: 1 }
    ]);
  });
});
