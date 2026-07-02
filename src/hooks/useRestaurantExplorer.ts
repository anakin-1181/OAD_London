import { useEffect, useMemo, useState } from "react";
import { CATEGORY_IDS, PRICE_TIERS, type CategoryId, type DiscoveryPreset, type PriceTier, type RestaurantFilters, type SortMode, type UserRecord, type VisitStatus } from "../domain/types";
import {
  buildAreaOptions,
  buildCuisineOptions,
  createInitialFilters,
  filterRestaurants,
  getExplorerStats,
  getSavedRestaurants,
  hasCoordinate
} from "../domain/restaurants";
import { useRestaurantDataset } from "./useRestaurantDataset";
import { useUserRecords } from "./useUserRecords";

export function useRestaurantExplorer() {
  const [filters, setFilters] = useState<RestaurantFilters>(() => createInitialFilters());
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const { dataset, isLoading, error } = useRestaurantDataset();
  const { authError, authStatus, authUser, signInWithGoogle, signOut, userRecords, updateRecord, toggleStatus } = useUserRecords();
  const restaurants = dataset.restaurants;

  useEffect(() => {
    if (selectedId || !restaurants.length) return;
    setSelectedId(restaurants.find(hasCoordinate)?.id ?? restaurants[0]?.id);
  }, [restaurants, selectedId]);

  const cuisineOptions = useMemo(() => buildCuisineOptions(restaurants), [restaurants]);
  const areaOptions = useMemo(() => buildAreaOptions(restaurants), [restaurants]);
  const filteredRestaurants = useMemo(
    () => filterRestaurants(restaurants, filters, userRecords),
    [filters, restaurants, userRecords]
  );
  const savedRestaurants = useMemo(
    () => getSavedRestaurants(restaurants, userRecords),
    [restaurants, userRecords]
  );
  const mappedRestaurants = useMemo(() => filteredRestaurants.filter(hasCoordinate), [filteredRestaurants]);
  const stats = useMemo(
    () => getExplorerStats(restaurants, filteredRestaurants, userRecords),
    [filteredRestaurants, restaurants, userRecords]
  );

  const selectedRestaurant = useMemo(
    () => restaurants.find((restaurant) => restaurant.id === selectedId),
    [restaurants, selectedId]
  );
  const selectedRecord = selectedRestaurant ? userRecords[selectedRestaurant.id] || {} : {};

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.query.trim()) count += 1;
    if (filters.activeCategories.length !== CATEGORY_IDS.length) count += 1;
    if (filters.activePrices.length !== PRICE_TIERS.length) count += 1;
    if (filters.cuisineFilter !== "all") count += 1;
    if (filters.areaFilter !== "all") count += 1;
    if (filters.showNeedsReview) count += 1;
    if (filters.showSavedOnly) count += 1;
    if (filters.sortMode !== "rank") count += 1;
    return count;
  }, [filters]);

  function patchFilters(patch: Partial<RestaurantFilters>) {
    setFilters((current) => ({ ...current, ...patch }));
  }

  function toggleCategory(categoryId: CategoryId) {
    setFilters((current) => {
      if (current.activeCategories.includes(categoryId) && current.activeCategories.length === 1) return current;

      const activeCategories = current.activeCategories.includes(categoryId)
        ? current.activeCategories.filter((item) => item !== categoryId)
        : [...current.activeCategories, categoryId];

      return { ...current, activeCategories };
    });
  }

  function togglePrice(price: PriceTier) {
    setFilters((current) => {
      const nextPrices = current.activePrices.includes(price)
        ? current.activePrices.filter((item) => item !== price)
        : [...current.activePrices, price];

      return { ...current, activePrices: nextPrices.length ? nextPrices : [...PRICE_TIERS] };
    });
  }

  function applyPreset(preset: DiscoveryPreset) {
    const base = createInitialFilters();

    if (preset === "destination") {
      setFilters({
        ...base,
        activeCategories: ["top", "classical"],
        activePrices: ["£££", "££££"],
        sortMode: "rank"
      });
    }

    if (preset === "casual") {
      setFilters({
        ...base,
        activeCategories: ["casual", "cheap-eats"],
        activePrices: ["£", "££"],
        sortMode: "rank"
      });
    }

    if (preset === "value") {
      setFilters({
        ...base,
        activeCategories: ["casual", "cheap-eats"],
        activePrices: ["£", "££"],
        sortMode: "price"
      });
    }

    if (preset === "saved") {
      setFilters({
        ...base,
        showSavedOnly: true
      });
    }
  }

  function resetFilters() {
    setFilters(createInitialFilters());
  }

  function updateSelectedRecord(patch: UserRecord) {
    if (!selectedRestaurant) return;
    updateRecord(selectedRestaurant.id, patch);
  }

  function toggleSelectedStatus(status: VisitStatus) {
    if (!selectedRestaurant) return;
    toggleStatus(selectedRestaurant.id, status);
  }

  function selectRestaurant(restaurantId: string) {
    setSelectedId(restaurantId);
  }

  return {
    dataset,
    restaurants,
    isLoading,
    loadError: error,
    filters,
    cuisineOptions,
    areaOptions,
    filteredRestaurants,
    savedRestaurants,
    mappedRestaurants,
    stats,
    selectedRestaurant,
    selectedRecord,
    selectedId,
    userRecords,
    auth: {
      error: authError,
      signInWithGoogle,
      signOut,
      status: authStatus,
      user: authUser
    },
    activeFilterCount,
    setQuery: (query: string) => patchFilters({ query }),
    setCuisineFilter: (cuisineFilter: string) => patchFilters({ cuisineFilter }),
    setAreaFilter: (areaFilter: string) => patchFilters({ areaFilter }),
    setSortMode: (sortMode: SortMode) => patchFilters({ sortMode }),
    toggleNeedsReview: () => patchFilters({ showNeedsReview: !filters.showNeedsReview }),
    toggleSavedOnly: () => patchFilters({ showSavedOnly: !filters.showSavedOnly }),
    toggleCategory,
    togglePrice,
    applyPreset,
    resetFilters,
    selectRestaurant,
    closeRestaurant: () => setSelectedId(undefined),
    updateSelectedRecord,
    toggleSelectedStatus
  };
}

export type RestaurantExplorer = ReturnType<typeof useRestaurantExplorer>;
