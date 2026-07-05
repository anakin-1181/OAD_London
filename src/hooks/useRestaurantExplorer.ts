import { useCallback, useEffect, useMemo, useState } from "react";
import { CATEGORY_IDS, PRICE_TIERS, type CategoryId, type DiscoveryPreset, type PriceTier, type RestaurantFilters, type SortMode, type UserRecord, type VisitStatus } from "../domain/types";
import {
  buildAreaOptions,
  buildCuisineOptions,
  createInitialFilters,
  filterRestaurants,
  getBranchById,
  getExplorerStats,
  getPrimaryBranch,
  getSavedRestaurants,
  hasCoordinate
} from "../domain/restaurants";
import { useRestaurantDataset } from "./useRestaurantDataset";
import { useUserRecords } from "./useUserRecords";

export function useRestaurantExplorer() {
  const [filters, setFilters] = useState<RestaurantFilters>(() => createInitialFilters());
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [selectedBranchId, setSelectedBranchId] = useState<string | undefined>();
  const { dataset, isLoading, error } = useRestaurantDataset();
  const { authError, authStatus, authUser, signInWithGoogle, signOut, userRecords, updateRecord, toggleStatus } = useUserRecords();
  const restaurants = dataset.restaurants;

  useEffect(() => {
    if (selectedId || !restaurants.length) return;
    const initialRestaurant = restaurants.find(hasCoordinate) ?? restaurants[0];
    setSelectedId(initialRestaurant?.id);
    setSelectedBranchId(initialRestaurant ? getPrimaryBranch(initialRestaurant)?.id : undefined);
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

  useEffect(() => {
    if (!selectedRestaurant) return;
    const primaryBranchId = getPrimaryBranch(selectedRestaurant)?.id;
    const hasSelectedBranch = selectedBranchId
      ? getBranchById(selectedRestaurant, selectedBranchId)?.id === selectedBranchId
      : false;
    if (!hasSelectedBranch && primaryBranchId) setSelectedBranchId(primaryBranchId);
  }, [selectedBranchId, selectedRestaurant]);

  const selectedBranch = useMemo(
    () => (selectedRestaurant ? getBranchById(selectedRestaurant, selectedBranchId) : undefined),
    [selectedBranchId, selectedRestaurant]
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

  const patchFilters = useCallback((patch: Partial<RestaurantFilters>) => {
    setFilters((current) => ({ ...current, ...patch }));
  }, []);

  const toggleCategory = useCallback((categoryId: CategoryId) => {
    setFilters((current) => {
      if (current.activeCategories.includes(categoryId) && current.activeCategories.length === 1) return current;

      const activeCategories = current.activeCategories.includes(categoryId)
        ? current.activeCategories.filter((item) => item !== categoryId)
        : [...current.activeCategories, categoryId];

      return { ...current, activeCategories };
    });
  }, []);

  const togglePrice = useCallback((price: PriceTier) => {
    setFilters((current) => {
      const nextPrices = current.activePrices.includes(price)
        ? current.activePrices.filter((item) => item !== price)
        : [...current.activePrices, price];

      return { ...current, activePrices: nextPrices.length ? nextPrices : [...PRICE_TIERS] };
    });
  }, []);

  const applyPreset = useCallback((preset: DiscoveryPreset) => {
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
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(createInitialFilters());
  }, []);

  const updateSelectedRecord = useCallback((patch: UserRecord) => {
    if (!selectedRestaurant) return;
    updateRecord(selectedRestaurant.id, patch);
  }, [selectedRestaurant, updateRecord]);

  const toggleSelectedStatus = useCallback((status: VisitStatus) => {
    if (!selectedRestaurant) return;
    toggleStatus(selectedRestaurant.id, status);
  }, [selectedRestaurant, toggleStatus]);

  const selectRestaurant = useCallback((restaurantId: string, branchId?: string) => {
    const restaurant = restaurants.find((candidate) => candidate.id === restaurantId);
    setSelectedId(restaurantId);
    setSelectedBranchId(restaurant ? branchId || getPrimaryBranch(restaurant)?.id : branchId);
  }, [restaurants]);

  const selectBranch = useCallback((branchId: string) => {
    setSelectedBranchId(branchId);
  }, []);

  const setQuery = useCallback((query: string) => patchFilters({ query }), [patchFilters]);
  const setCuisineFilter = useCallback((cuisineFilter: string) => patchFilters({ cuisineFilter }), [patchFilters]);
  const setAreaFilter = useCallback((areaFilter: string) => patchFilters({ areaFilter }), [patchFilters]);
  const setSortMode = useCallback((sortMode: SortMode) => patchFilters({ sortMode }), [patchFilters]);
  const toggleNeedsReview = useCallback(() => {
    setFilters((current) => ({ ...current, showNeedsReview: !current.showNeedsReview }));
  }, []);
  const toggleSavedOnly = useCallback(() => {
    setFilters((current) => ({ ...current, showSavedOnly: !current.showSavedOnly }));
  }, []);
  const closeRestaurant = useCallback(() => {
    setSelectedId(undefined);
    setSelectedBranchId(undefined);
  }, []);

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
    selectedBranch,
    selectedRecord,
    selectedId,
    selectedBranchId,
    userRecords,
    auth: {
      error: authError,
      signInWithGoogle,
      signOut,
      status: authStatus,
      user: authUser
    },
    activeFilterCount,
    setQuery,
    setCuisineFilter,
    setAreaFilter,
    setSortMode,
    toggleNeedsReview,
    toggleSavedOnly,
    toggleCategory,
    togglePrice,
    applyPreset,
    resetFilters,
    selectRestaurant,
    selectBranch,
    closeRestaurant,
    updateSelectedRecord,
    toggleSelectedStatus
  };
}

export type RestaurantExplorer = ReturnType<typeof useRestaurantExplorer>;
