import { useRef } from "react";
import { LocateFixed, MapPin, Navigation, ShieldCheck } from "lucide-react";
import { categoryMeta } from "../domain/restaurantConfig";
import { getArea } from "../domain/restaurants";
import { CATEGORY_IDS, type Restaurant } from "../domain/types";
import { useLeafletRestaurantMap } from "../hooks/useLeafletRestaurantMap";

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

  useLeafletRestaurantMap({
    mapNodeRef,
    restaurants,
    selectedId,
    onSelect
  });

  return (
    <section className="map-stage" aria-label="Interactive restaurant map">
      <div ref={mapNodeRef} className="map-canvas" />

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
