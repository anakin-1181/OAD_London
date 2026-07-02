import type { CSSProperties } from "react";
import {
  AlertTriangle,
  Compass,
  DollarSign,
  Heart,
  ListFilter,
  MapPinned,
  RotateCcw,
  Search,
  SlidersHorizontal,
  Sparkles,
  Star,
  Utensils
} from "lucide-react";
import { categoryMeta, sortLabels } from "../domain/restaurantConfig";
import {
  getBranchCountLabel,
  getArea,
  getBestRank,
  getHeroImage,
  getPrimaryCategory,
  isSaved,
  needsReview
} from "../domain/restaurants";
import { CATEGORY_IDS, PRICE_TIERS, type DiscoveryPreset, type PriceTier, type Restaurant } from "../domain/types";
import type { RestaurantExplorer } from "../hooks/useRestaurantExplorer";
import { AuthControl } from "./AuthControl";

type ExplorerPanelProps = {
  explorer: RestaurantExplorer;
};

const presets: { id: DiscoveryPreset; label: string; helper: string }[] = [
  { id: "destination", label: "Destination", helper: "Top tables and classics" },
  { id: "casual", label: "Casual Gems", helper: "Lower lift, still special" },
  { id: "value", label: "Value Hunt", helper: "Cheaper by OAD estimate" },
  { id: "saved", label: "Saved", helper: "Your shortlist" }
];

export function ExplorerPanel({ explorer }: ExplorerPanelProps) {
  return (
    <aside className="explorer-panel" aria-label="Restaurant discovery filters">
      <header className="product-header">
        <div>
          <span className="eyebrow">OAD Europe 2026</span>
          <h1>London Food Map</h1>
          <p>Find the right London restaurant by rank, mood, area, price, and your own shortlist.</p>
        </div>
        <div className="header-actions">
          <AuthControl
            error={explorer.auth.error}
            onSignIn={explorer.auth.signInWithGoogle}
            onSignOut={explorer.auth.signOut}
            status={explorer.auth.status}
            user={explorer.auth.user}
          />
          <div className="source-lockup" aria-label={`${explorer.stats.total} restaurants in dataset`}>
            <strong>{explorer.isLoading ? "..." : explorer.stats.total}</strong>
            <span>places</span>
          </div>
        </div>
      </header>

      <section className="metric-strip" aria-label="Explorer summary">
        <Metric value={explorer.stats.mapped} label="mapped" />
        <Metric value={explorer.stats.savedCount} label="saved" />
        <Metric value={explorer.stats.bestVisibleRank ? `#${explorer.stats.bestVisibleRank}` : "-"} label="best visible" />
      </section>

      <section className="preset-grid" aria-label="Discovery presets">
        {presets.map((preset) => (
          <button key={preset.id} type="button" className="preset-button" onClick={() => explorer.applyPreset(preset.id)}>
            <Sparkles size={16} aria-hidden="true" />
            <span>
              <strong>{preset.label}</strong>
              <small>{preset.helper}</small>
            </span>
          </button>
        ))}
      </section>

      <label className="search-box">
        <span className="sr-only">Search restaurants, chefs, cuisines, and areas</span>
        <Search size={18} aria-hidden="true" />
        <input
          value={explorer.filters.query}
          onChange={(event) => explorer.setQuery(event.target.value)}
          placeholder="Search restaurant, chef, cuisine, area"
          type="search"
        />
      </label>

      <section className="filter-block">
        <div className="section-label">
          <ListFilter size={16} aria-hidden="true" />
          Guide Lists
        </div>
        <div className="category-grid">
          {CATEGORY_IDS.map((categoryId) => (
            <button
              key={categoryId}
              type="button"
              className={explorer.filters.activeCategories.includes(categoryId) ? "category-chip active" : "category-chip"}
              style={
                {
                  "--chip-color": categoryMeta[categoryId].color,
                  "--chip-soft": categoryMeta[categoryId].soft,
                  "--chip-ink": categoryMeta[categoryId].ink
                } as CSSProperties
              }
              aria-pressed={explorer.filters.activeCategories.includes(categoryId)}
              onClick={() => explorer.toggleCategory(categoryId)}
            >
              <span className="chip-dot" aria-hidden="true" />
              <span>{categoryMeta[categoryId].shortLabel}</span>
              <em>{explorer.dataset.metadata.byCategory[categoryId]}</em>
            </button>
          ))}
        </div>
      </section>

      <section className="filter-block">
        <div className="section-label">
          <DollarSign size={16} aria-hidden="true" />
          Price Estimate
        </div>
        <div className="price-grid">
          {PRICE_TIERS.map((price) => (
            <button
              key={price}
              type="button"
              className={explorer.filters.activePrices.includes(price) ? "price-chip active" : "price-chip"}
              aria-pressed={explorer.filters.activePrices.includes(price)}
              onClick={() => explorer.togglePrice(price as PriceTier)}
            >
              {price}
            </button>
          ))}
        </div>
      </section>

      <section className="controls-grid" aria-label="Refine restaurants">
        <label className="select-control">
          <Utensils size={16} aria-hidden="true" />
          <span className="sr-only">Cuisine</span>
          <select value={explorer.filters.cuisineFilter} onChange={(event) => explorer.setCuisineFilter(event.target.value)}>
            <option value="all">All cuisines</option>
            {explorer.cuisineOptions.map((cuisine) => (
              <option key={cuisine.label} value={cuisine.label}>
                {cuisine.label} ({cuisine.count})
              </option>
            ))}
          </select>
        </label>

        <label className="select-control">
          <MapPinned size={16} aria-hidden="true" />
          <span className="sr-only">Area</span>
          <select value={explorer.filters.areaFilter} onChange={(event) => explorer.setAreaFilter(event.target.value)}>
            <option value="all">All London areas</option>
            {explorer.areaOptions.map((area) => (
              <option key={area.label} value={area.label}>
                {area.label} ({area.count})
              </option>
            ))}
          </select>
        </label>

        <label className="select-control wide">
          <SlidersHorizontal size={16} aria-hidden="true" />
          <span className="sr-only">Sort</span>
          <select value={explorer.filters.sortMode} onChange={(event) => explorer.setSortMode(event.target.value as keyof typeof sortLabels)}>
            {Object.entries(sortLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </section>

      <section className="toggle-row" aria-label="Special filters">
        <button
          type="button"
          className={explorer.filters.showNeedsReview ? "toggle-pill active warning" : "toggle-pill"}
          aria-pressed={explorer.filters.showNeedsReview}
          onClick={explorer.toggleNeedsReview}
        >
          <AlertTriangle size={16} aria-hidden="true" />
          Review
        </button>
        <button
          type="button"
          className={explorer.filters.showSavedOnly ? "toggle-pill active saved" : "toggle-pill"}
          aria-pressed={explorer.filters.showSavedOnly}
          onClick={explorer.toggleSavedOnly}
        >
          <Heart size={16} aria-hidden="true" />
          Saved
        </button>
        <button type="button" className="toggle-pill reset" onClick={explorer.resetFilters}>
          <RotateCcw size={16} aria-hidden="true" />
          Reset {explorer.activeFilterCount ? `(${explorer.activeFilterCount})` : ""}
        </button>
      </section>

      <section className="result-header" aria-live="polite">
        <div>
          <strong>{explorer.filteredRestaurants.length}</strong>
          <span>matching places</span>
        </div>
        <div>
          <Compass size={16} aria-hidden="true" />
          <span>{explorer.stats.missingCoordinates} unmapped</span>
        </div>
      </section>

      <div className="restaurant-list" aria-label="Restaurant results">
        {explorer.isLoading ? (
          <div className="empty-state loading-state">
            <strong>Loading the London guide.</strong>
            <span>Preparing restaurant data, map pins, and filters.</span>
          </div>
        ) : null}

        {explorer.loadError ? (
          <div className="empty-state">
            <strong>Restaurant data could not load.</strong>
            <span>{explorer.loadError}</span>
            <button type="button" onClick={() => window.location.reload()}>
              Retry
            </button>
          </div>
        ) : null}

        {!explorer.isLoading && !explorer.loadError
          ? explorer.filteredRestaurants.map((restaurant) => (
              <RestaurantRow
                key={restaurant.id}
                restaurant={restaurant}
                selected={restaurant.id === explorer.selectedId}
                saved={isSaved(restaurant, explorer.userRecords)}
                onSelect={explorer.selectRestaurant}
              />
            ))
          : null}

        {!explorer.isLoading && !explorer.loadError && !explorer.filteredRestaurants.length ? (
          <div className="empty-state">
            <strong>No restaurants match those filters.</strong>
            <span>Try clearing a price, area, or saved-only filter.</span>
            <button type="button" onClick={explorer.resetFilters}>
              Reset filters
            </button>
          </div>
        ) : null}
      </div>
    </aside>
  );
}

function Metric({ value, label }: { value: number | string; label: string }) {
  return (
    <div>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function RestaurantRow({
  restaurant,
  selected,
  saved,
  onSelect
}: {
  restaurant: Restaurant;
  selected: boolean;
  saved: boolean;
  onSelect: (restaurantId: string) => void;
}) {
  const category = getPrimaryCategory(restaurant);
  const image = getHeroImage(restaurant);
  const bestRank = getBestRank(restaurant);

  return (
    <button
      type="button"
      className={selected ? "restaurant-row selected" : "restaurant-row"}
      onClick={() => onSelect(restaurant.id)}
      aria-pressed={selected}
    >
      <span className="row-media">
        {image ? <img src={image} alt="" loading="lazy" /> : <span>{restaurant.displayName.slice(0, 1)}</span>}
      </span>
      <span className="row-main">
        <span className="row-title">
          <strong>{restaurant.displayName}</strong>
          <em>{restaurant.estimatedPrice}</em>
        </span>
        <small>
          {[restaurant.cuisine || "Cuisine unavailable", getBranchCountLabel(restaurant) || getArea(restaurant)].join(" · ")}
        </small>
        <span className="row-badges">
          <span
            style={
              {
                "--chip-color": categoryMeta[category].color,
                "--chip-soft": categoryMeta[category].soft,
                "--chip-ink": categoryMeta[category].ink
              } as CSSProperties
            }
          >
            {categoryMeta[category].shortLabel}
          </span>
          <span>{bestRank < 9999 ? `#${bestRank}` : "Review"}</span>
        </span>
      </span>
      <span className="row-flags" aria-hidden="true">
        {saved ? <Star size={16} /> : null}
        {needsReview(restaurant) ? <AlertTriangle size={16} /> : null}
      </span>
    </button>
  );
}
