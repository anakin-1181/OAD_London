import { useEffect, useMemo, useRef, useState } from "react";
import { CheckCircle2, Heart, LoaderCircle, LocateFixed, MapPin, Navigation, ShieldCheck, X } from "lucide-react";
import type { LocationStatus } from "../domain/location";
import { categoryMeta } from "../domain/restaurantConfig";
import {
  getArea,
  getBestRank,
  getBranchCountLabel,
  getHeroImage,
  getRestaurantBranches,
  hasBranchCoordinate
} from "../domain/restaurants";
import { CATEGORY_IDS, type Restaurant, type RestaurantBranch } from "../domain/types";
import { useLeafletRestaurantMap } from "../hooks/useLeafletRestaurantMap";
import { useUserLocation } from "../hooks/useUserLocation";

type MapViewProps = {
  restaurants: Restaurant[];
  filteredCount: number;
  selectedRestaurant: Restaurant | undefined;
  selectedBranch: RestaurantBranch | undefined;
  selectedId: string | undefined;
  selectedBranchId: string | undefined;
  reviewCount: number;
  savedRestaurants: Restaurant[];
  savedListOpen: boolean;
  savedHighlightActive: boolean;
  onSelect: (restaurantId: string, branchId?: string) => void;
  onToggleSavedList: () => void;
  onCloseSavedList: () => void;
  onToggleSavedHighlight: () => void;
};

export function MapView({
  restaurants,
  filteredCount,
  selectedRestaurant,
  selectedBranch,
  selectedId,
  selectedBranchId,
  reviewCount,
  savedRestaurants,
  savedListOpen,
  savedHighlightActive,
  onSelect,
  onToggleSavedList,
  onCloseSavedList,
  onToggleSavedHighlight
}: MapViewProps) {
  const mapNodeRef = useRef<HTMLDivElement | null>(null);
  const [locationPromptOpen, setLocationPromptOpen] = useState(false);
  const savedRestaurantIds = useMemo(() => savedRestaurants.map((restaurant) => restaurant.id), [savedRestaurants]);
  const branchPinCount = useMemo(
    () => restaurants.reduce((count, restaurant) => count + getRestaurantBranches(restaurant).filter(hasBranchCoordinate).length, 0),
    [restaurants]
  );
  const { errorMessage, focusKey, isLocating, location, requestLocation, status } = useUserLocation();
  const locationFeedback = getLocationFeedback(status, errorMessage);
  const locateButtonLabel = getLocateButtonLabel(status, Boolean(location));
  const locationPromptCopy = getLocationPromptCopy(status, errorMessage);
  const locateButtonClassName = [
    "locate-button",
    isLocating ? "locating" : ""
  ]
    .filter(Boolean)
    .join(" ");

  useLeafletRestaurantMap({
    mapNodeRef,
    restaurants,
    selectedId,
    selectedBranchId,
    onSelect,
    savedHighlightActive,
    highlightedRestaurantIds: savedRestaurantIds,
    userLocation: location,
    userLocationFocusKey: focusKey
  });

  useEffect(() => {
    if (status === "denied" || status === "unavailable") {
      setLocationPromptOpen(true);
    }
  }, [status]);

  function handleLocateClick() {
    setLocationPromptOpen(false);
    requestLocation();
  }

  function handleTryLocationAgain() {
    setLocationPromptOpen(false);
    requestLocation();
  }

  return (
    <section className="map-stage" aria-label="Interactive restaurant map">
      <div ref={mapNodeRef} className="map-canvas" />

      <button
        type="button"
        className={savedListOpen ? "map-saved-button active" : "map-saved-button"}
        onClick={onToggleSavedList}
        aria-controls="mobile-saved-restaurants"
        aria-expanded={savedListOpen}
        aria-label={savedListOpen ? "Close saved restaurants list" : "Open saved restaurants list"}
        title={savedListOpen ? "Close saved restaurants" : "Open saved restaurants"}
      >
        <Heart size={18} aria-hidden="true" />
        <span>Saved</span>
        {savedRestaurants.length ? <strong>{savedRestaurants.length}</strong> : null}
      </button>

      {savedListOpen ? (
        <section id="mobile-saved-restaurants" className="saved-list-popover" aria-label="Saved restaurants">
          <header className="saved-list-header">
            <div>
              <span className="eyebrow">Your Shortlist</span>
              <h2>Saved Restaurants</h2>
            </div>
            <button type="button" onClick={onCloseSavedList} aria-label="Close saved restaurants">
              <X size={18} aria-hidden="true" />
            </button>
          </header>
          {savedRestaurants.length ? (
            <div className="saved-list-items">
              {savedRestaurants.map((restaurant) => (
                <SavedRestaurantButton
                  key={restaurant.id}
                  restaurant={restaurant}
                  onSelect={() => {
                    onCloseSavedList();
                    onSelect(restaurant.id);
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="saved-list-empty">
              <Heart size={20} aria-hidden="true" />
              <strong>No saved restaurants yet</strong>
              <span>Mark a place as Want, Booked, Visited, Loved, or add a note to save it here.</span>
            </div>
          )}
        </section>
      ) : null}

      <div className="map-controls" aria-label="Map location controls">
        {locationFeedback ? (
          <div
            className={`location-feedback ${status}`}
            role={status === "denied" || status === "unavailable" || status === "error" ? "alert" : "status"}
            aria-live="polite"
          >
            {locationFeedback}
          </div>
        ) : null}
        <button
          type="button"
          className={locateButtonClassName}
          onClick={handleLocateClick}
          disabled={isLocating}
          aria-label={locateButtonLabel}
          title={locateButtonLabel}
        >
          {isLocating ? <LoaderCircle size={20} aria-hidden="true" /> : <LocateFixed size={20} aria-hidden="true" />}
        </button>
      </div>

      {locationPromptOpen ? (
        <div className="location-permission-overlay" role="presentation">
          <section
            className="location-permission-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="location-permission-title"
            aria-describedby="location-permission-copy location-permission-safari"
          >
            <button
              type="button"
              className="location-permission-close"
              onClick={() => setLocationPromptOpen(false)}
              aria-label="Close location permission prompt"
            >
              <X size={18} aria-hidden="true" />
            </button>
            <div className="location-permission-icon" aria-hidden="true">
              <LocateFixed size={23} />
            </div>
            <div className="location-permission-copy">
              <span className="eyebrow">{locationPromptCopy.eyebrow}</span>
              <h2 id="location-permission-title">{locationPromptCopy.title}</h2>
              <p id="location-permission-copy">{locationPromptCopy.body}</p>
              <p id="location-permission-safari" className="location-permission-note">
                {locationPromptCopy.note}
              </p>
            </div>
            <div className="location-permission-actions">
              <button type="button" className="secondary-action" onClick={() => setLocationPromptOpen(false)}>
                Not now
              </button>
              <button type="button" className="primary-action" onClick={handleTryLocationAgain}>
                Try again
              </button>
            </div>
          </section>
        </div>
      ) : null}

      <div className="map-topbar">
        <div>
          <MapPin size={17} aria-hidden="true" />
          <span>
            {branchPinCount}/{filteredCount} pins
          </span>
        </div>
        <div>
          <Navigation size={17} aria-hidden="true" />
          <span>{selectedRestaurant ? getSelectedAreaLabel(selectedRestaurant, selectedBranch) : "London"}</span>
        </div>
        <div>
          <ShieldCheck size={17} aria-hidden="true" />
          <span>{reviewCount} review</span>
        </div>
      </div>

      <button
        type="button"
        className={savedHighlightActive ? "map-visited-button active" : "map-visited-button"}
        onClick={onToggleSavedHighlight}
        aria-pressed={savedHighlightActive}
        aria-label={savedHighlightActive ? "Restore normal map marker colors" : "Highlight saved and visited restaurants"}
        title={savedHighlightActive ? "Restore marker colors" : "Highlight saved and visited restaurants"}
      >
        <CheckCircle2 size={17} aria-hidden="true" />
        <span>Visited</span>
        {savedRestaurants.length ? <strong>{savedRestaurants.length}</strong> : null}
      </button>

      <div className="map-callout">
        <LocateFixed size={18} aria-hidden="true" />
        <div>
          <strong>{selectedRestaurant?.displayName || "Choose a restaurant"}</strong>
          <span>
            {selectedRestaurant
              ? [getBranchCountLabel(selectedRestaurant), selectedBranch?.displayName, selectedRestaurant.estimatedPrice].filter(Boolean).join(" · ")
              : "Select a pin or a result to inspect the place."}
          </span>
        </div>
      </div>

      <div className="map-legend" aria-label="Map marker legend">
        {CATEGORY_IDS.map((categoryId) => (
          <span key={categoryId}>
            <i style={{ backgroundColor: categoryMeta[categoryId].color }} />
            {categoryMeta[categoryId].shortLabel}
          </span>
        ))}
      </div>
    </section>
  );
}

function getLocationFeedback(status: LocationStatus, errorMessage: string | undefined) {
  if (status === "locating") return "Finding your current location...";
  return errorMessage;
}

function getSelectedAreaLabel(restaurant: Restaurant, branch: RestaurantBranch | undefined) {
  if (!branch?.address) return getArea(restaurant);
  const parts = branch.address.split(",").map((part) => part.trim()).filter(Boolean);
  return parts.slice(-3, -1).join(", ") || getArea(restaurant);
}

function getLocateButtonLabel(status: LocationStatus, hasLocation: boolean) {
  if (status === "locating") return "Finding your current location";
  if (hasLocation) return "Recenter map on your current location";
  return "Show my current location on the map";
}

function getLocationPromptCopy(status: LocationStatus, errorMessage: string | undefined) {
  if (status === "denied") {
    return {
      eyebrow: "Safari Location",
      title: "Location is blocked",
      body: "Safari returned a blocked permission state before showing the Apple location prompt.",
      note: "Check Safari's Aa menu: Website Settings > Location > Allow. Also check iPhone Settings: Privacy & Security > Location Services > Safari Websites > While Using the App. Then tap Try again."
    };
  }

  if (status === "unavailable") {
    return {
      eyebrow: "Location Setup",
      title: "Location is unavailable",
      body: errorMessage || "This browser cannot access location right now.",
      note: "Open the HTTPS Vercel URL in Safari and make sure iPhone Location Services are enabled. Then tap Try again."
    };
  }

  return {
    eyebrow: "Map Location",
    title: "Allow location access?",
    body: "Safari should show its Apple location prompt after you tap the locate button.",
    note: "Your position is only used to center the map and show your blue dot. It is not saved."
  };
}

type SavedRestaurantButtonProps = {
  restaurant: Restaurant;
  onSelect: () => void;
};

function SavedRestaurantButton({ restaurant, onSelect }: SavedRestaurantButtonProps) {
  const heroImage = getHeroImage(restaurant);
  const rank = getBestRank(restaurant);
  const rankLabel = rank < 9999 ? `#${rank}` : "Review";

  return (
    <button type="button" className="saved-list-row" onClick={onSelect}>
      <span className="saved-list-media" aria-hidden="true">
        {heroImage ? <img src={heroImage} alt="" /> : restaurant.displayName.slice(0, 1)}
      </span>
      <span className="saved-list-main">
        <strong>{restaurant.displayName}</strong>
        <small>
          {[restaurant.cuisine || "Cuisine", restaurant.estimatedPrice, getBranchCountLabel(restaurant) || getArea(restaurant)].join(" · ")}
        </small>
      </span>
      <span className="saved-list-rank">{rankLabel}</span>
    </button>
  );
}
