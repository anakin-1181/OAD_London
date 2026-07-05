import { describe, expect, it } from "vitest";
import { getGeolocationErrorMessage, getGeolocationErrorStatus } from "../../src/domain/location";
import {
  buildAreaOptions,
  createInitialFilters,
  filterRestaurants,
  getArea,
  getBranchCountLabel,
  getBestRank,
  getExplorerStats,
  getPrimaryCategory,
  getRestaurantBranches,
  getRestaurantPresentation,
  getSavedRestaurants,
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

  it("builds a rank-sorted saved shortlist from statuses and notes", () => {
    const restaurants = [
      makeRestaurant({ id: "unsaved", displayName: "Unsaved", listEntries: [{ ...baseRestaurant.listEntries[0], rank: 1 }] }),
      makeRestaurant({ id: "note", displayName: "Note Saved", listEntries: [{ ...baseRestaurant.listEntries[0], rank: 18 }] }),
      makeRestaurant({ id: "status", displayName: "Status Saved", listEntries: [{ ...baseRestaurant.listEntries[0], rank: 4 }] })
    ];

    const saved = getSavedRestaurants(restaurants, {
      note: { note: "Try the counter" },
      status: { status: "want" }
    });

    expect(saved.map((restaurant) => restaurant.id)).toEqual(["status", "note"]);
  });

  it("prepares reusable presentation metadata for rendering and filtering", () => {
    const restaurant = makeRestaurant({
      id: "kiln",
      displayName: "Kiln",
      chef: "Ben Chapman",
      cuisine: "Thai",
      regionName: "London,Soho",
      photos: ["https://example.com/kiln.jpg"],
      listEntries: [{ ...baseRestaurant.listEntries[0], rank: 22 }]
    });

    const presentation = getRestaurantPresentation(restaurant);

    expect(presentation).toBe(getRestaurantPresentation(restaurant));
    expect(presentation).toMatchObject({
      area: "Soho",
      bestRank: 22,
      branchCount: 1,
      branchCountLabel: null,
      hasCoordinate: true,
      heroImage: "https://example.com/kiln.jpg",
      needsReview: false,
      primaryCategory: "top",
      rankLabel: "#22"
    });
    expect(presentation.searchText).toContain("kiln");
    expect(presentation.searchText).toContain("ben chapman");
    expect(presentation.searchText).toContain("soho");
  });

  it("keeps branch pins grouped under a parent restaurant record", () => {
    const restaurant = makeRestaurant({
      id: "hoppers",
      displayName: "Hoppers",
      branches: [
        {
          id: "hoppers:source:soho",
          restaurantId: "hoppers",
          displayName: "Hoppers Soho",
          address: "49 Frith Street, London W1D 4SG",
          lat: 51.5139,
          lng: -0.1322,
          phone: null,
          website: "https://www.hopperslondon.com/",
          externalPlaceId: "soho",
          mapUri: "https://www.openstreetmap.org/?mlat=51.5139&mlon=-0.1322#map=17/51.5139/-0.1322",
          businessStatus: "OPERATIONAL",
          confidence: 0.9,
          isPrimary: true,
          sources: [{ type: "website", label: "Official website structured data" }]
        },
        {
          id: "hoppers:source:kings-cross",
          restaurantId: "hoppers",
          displayName: "Hoppers King's Cross",
          address: "Pancras Square, London N1C 4AG",
          lat: 51.5321,
          lng: -0.1253,
          phone: null,
          website: "https://www.hopperslondon.com/",
          externalPlaceId: "kings-cross",
          mapUri: "https://www.openstreetmap.org/?mlat=51.5321&mlon=-0.1253#map=17/51.5321/-0.1253",
          businessStatus: "OPERATIONAL",
          confidence: 0.84,
          sources: [{ type: "website", label: "Official website structured data" }]
        }
      ]
    });

    expect(getRestaurantBranches(restaurant)).toHaveLength(2);
    expect(getBranchCountLabel(restaurant)).toBe("2 London branches");
    expect(getSavedRestaurants([restaurant], { hoppers: { status: "visited" } }).map((item) => item.id)).toEqual(["hoppers"]);
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

describe("location domain helpers", () => {
  it("maps browser geolocation errors to user-facing states", () => {
    expect(getGeolocationErrorStatus(1)).toBe("denied");
    expect(getGeolocationErrorStatus(2)).toBe("unavailable");
    expect(getGeolocationErrorStatus(3)).toBe("error");

    expect(getGeolocationErrorMessage(1)).toContain("permission");
    expect(getGeolocationErrorMessage(2)).toContain("unavailable");
    expect(getGeolocationErrorMessage(3)).toContain("timed out");
  });
});
