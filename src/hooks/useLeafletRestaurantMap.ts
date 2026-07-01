import { useEffect, type RefObject } from "react";
import L, { type LayerGroup, type Map as LeafletMap } from "leaflet";
import { categoryMeta, londonCenter } from "../domain/restaurantConfig";
import { getBestRank, getPrimaryCategory, hasCoordinate } from "../domain/restaurants";
import type { Restaurant } from "../domain/types";

type UseLeafletRestaurantMapOptions = {
  mapNodeRef: RefObject<HTMLDivElement>;
  restaurants: Restaurant[];
  selectedId: string | undefined;
  onSelect: (restaurantId: string) => void;
};

export function useLeafletRestaurantMap({
  mapNodeRef,
  restaurants,
  selectedId,
  onSelect
}: UseLeafletRestaurantMapOptions) {
  useEffect(() => {
    const mapNode = mapNodeRef.current;
    if (!mapNode || mapNode.dataset.ready === "true") return;

    const map = L.map(mapNode, {
      zoomControl: false,
      attributionControl: false,
      preferCanvas: true
    }).setView([londonCenter.lat, londonCenter.lng], londonCenter.zoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19
    }).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);
    L.control
      .attribution({ position: "bottomleft", prefix: false })
      .addAttribution("OpenStreetMap")
      .addTo(map);

    const layer = L.layerGroup().addTo(map);
    mapNode.dataset.ready = "true";
    mapNode.__leafletMap = map;
    mapNode.__leafletLayer = layer;

    return () => {
      map.remove();
      delete mapNode.dataset.ready;
      delete mapNode.__leafletMap;
      delete mapNode.__leafletLayer;
    };
  }, [mapNodeRef]);

  useEffect(() => {
    const layer = mapNodeRef.current?.__leafletLayer;
    if (!layer) return;

    layer.clearLayers();
    restaurants.filter(hasCoordinate).forEach((restaurant) => {
      const category = getPrimaryCategory(restaurant);
      const markerColor = categoryMeta[category].color;
      const rank = getBestRank(restaurant);
      const rankLabel = rank < 9999 ? String(rank) : "";
      const selectedClass = restaurant.id === selectedId ? " marker-selected" : "";
      const icon = L.divIcon({
        className: `restaurant-marker${selectedClass}`,
        html: `<span style="--marker-color:${markerColor}">${rankLabel}</span>`,
        iconSize: [38, 38],
        iconAnchor: [19, 19]
      });

      L.marker([restaurant.lat as number, restaurant.lng as number], {
        icon,
        keyboard: true,
        title: restaurant.displayName
      })
        .on("click", () => onSelect(restaurant.id))
        .bindTooltip(restaurant.displayName, { direction: "top", offset: [0, -15] })
        .addTo(layer);
    });
  }, [mapNodeRef, onSelect, restaurants, selectedId]);

  useEffect(() => {
    const map = mapNodeRef.current?.__leafletMap;
    const selectedRestaurant = restaurants.find((restaurant) => restaurant.id === selectedId);
    if (!map || !selectedRestaurant || !hasCoordinate(selectedRestaurant)) return;

    map.flyTo(
      [selectedRestaurant.lat as number, selectedRestaurant.lng as number],
      Math.max(map.getZoom(), 14),
      { duration: 0.75 }
    );
  }, [mapNodeRef, restaurants, selectedId]);
}

declare global {
  interface HTMLDivElement {
    __leafletMap?: LeafletMap;
    __leafletLayer?: LayerGroup;
  }
}
