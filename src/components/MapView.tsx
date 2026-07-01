import { useRef } from "react";
import { LoaderCircle, LocateFixed, MapPin, Navigation, ShieldCheck } from "lucide-react";
import type { LocationStatus } from "../domain/location";
import { categoryMeta } from "../domain/restaurantConfig";
import { getArea } from "../domain/restaurants";
import { CATEGORY_IDS, type Restaurant } from "../domain/types";
import { useLeafletRestaurantMap } from "../hooks/useLeafletRestaurantMap";
import { useUserLocation } from "../hooks/useUserLocation";

type MapViewProps = {
  restaurants: Restaurant[];
  filteredCount: number;
  selectedRestaurant: Restaurant | undefined;
  selectedId: string | undefined;
  reviewCount: number;
  onSelect: (restaurantId: string) => void;
};

export function MapView({
  restaurants,
  filteredCount,
  selectedRestaurant,
  selectedId,
  reviewCount,
  onSelect
}: MapViewProps) {
  const mapNodeRef = useRef<HTMLDivElement | null>(null);
  const { errorMessage, focusKey, isLocating, location, requestLocation, status } = useUserLocation();
  const locationFeedback = getLocationFeedback(status, errorMessage);
  const locateButtonLabel = getLocateButtonLabel(status, Boolean(location));
  const locateButtonClassName = [
    "locate-button",
    location ? "has-location" : "",
    isLocating ? "locating" : ""
  ]
    .filter(Boolean)
    .join(" ");

  useLeafletRestaurantMap({
    mapNodeRef,
    restaurants,
    selectedId,
    onSelect,
    userLocation: location,
    userLocationFocusKey: focusKey
  });

  return (
    <section className="map-stage" aria-label="Interactive restaurant map">
      <div ref={mapNodeRef} className="map-canvas" />

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
          onClick={requestLocation}
          disabled={isLocating}
          aria-label={locateButtonLabel}
          title={locateButtonLabel}
        >
          {isLocating ? <LoaderCircle size={20} aria-hidden="true" /> : <LocateFixed size={20} aria-hidden="true" />}
        </button>
      </div>

      <div className="map-topbar">
        <div>
          <MapPin size={17} aria-hidden="true" />
          <span>
            {restaurants.length}/{filteredCount} mapped
          </span>
        </div>
        <div>
          <Navigation size={17} aria-hidden="true" />
          <span>{selectedRestaurant ? getArea(selectedRestaurant) : "London"}</span>
        </div>
        <div>
          <ShieldCheck size={17} aria-hidden="true" />
          <span>{reviewCount} review</span>
        </div>
      </div>

      <div className="map-callout">
        <LocateFixed size={18} aria-hidden="true" />
        <div>
          <strong>{selectedRestaurant?.displayName || "Choose a restaurant"}</strong>
          <span>{selectedRestaurant ? `${selectedRestaurant.cuisine || "Cuisine"} · ${selectedRestaurant.estimatedPrice}` : "Select a pin or a result to inspect the place."}</span>
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
  if (status === "ready") return "Your location is on the map.";
  return errorMessage;
}

function getLocateButtonLabel(status: LocationStatus, hasLocation: boolean) {
  if (status === "locating") return "Finding your current location";
  if (hasLocation) return "Recenter map on your current location";
  return "Show my current location on the map";
}
