import { useEffect, useRef, type RefObject } from "react";
import L, { type LayerGroup, type Map as LeafletMap, type Marker } from "leaflet";
import { categoryMeta, londonCenter } from "../domain/restaurantConfig";
import {
  getBestRank,
  getPrimaryCategory,
  getRestaurantBranches,
  hasBranchCoordinate
} from "../domain/restaurants";
import type { UserLocation } from "../domain/location";
import type { Restaurant } from "../domain/types";

type UseLeafletRestaurantMapOptions = {
  mapNodeRef: RefObject<HTMLDivElement>;
  restaurants: Restaurant[];
  selectedId: string | undefined;
  selectedBranchId?: string | undefined;
  onSelect: (restaurantId: string, branchId?: string) => void;
  savedHighlightActive?: boolean;
  highlightedRestaurantIds?: string[];
  userLocation?: UserLocation | undefined;
  userLocationFocusKey?: number;
};

export function useLeafletRestaurantMap({
  mapNodeRef,
  restaurants,
  selectedId,
  selectedBranchId,
  onSelect,
  savedHighlightActive = false,
  highlightedRestaurantIds = [],
  userLocation,
  userLocationFocusKey = 0
}: UseLeafletRestaurantMapOptions) {
  const markerEntriesRef = useRef<Map<string, MarkerEntry>>(new Map());
  const lastSelectionFlyToRef = useRef<string | undefined>();
  const selectedBranchIdRef = useRef<string | undefined>(selectedBranchId);
  const selectedIdRef = useRef<string | undefined>(selectedId);

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
    const userLayer = L.layerGroup().addTo(map);
    mapNode.dataset.ready = "true";
    mapNode.__leafletMap = map;
    mapNode.__leafletLayer = layer;
    mapNode.__leafletUserLayer = userLayer;
    const markerEntries = markerEntriesRef.current;

    return () => {
      markerEntries.clear();
      map.remove();
      delete mapNode.dataset.ready;
      delete mapNode.__leafletMap;
      delete mapNode.__leafletLayer;
      delete mapNode.__leafletUserLayer;
    };
  }, [mapNodeRef]);

  useEffect(() => {
    const layer = mapNodeRef.current?.__leafletLayer;
    if (!layer) return;

    const highlightedRestaurants = new Set(highlightedRestaurantIds);
    markerEntriesRef.current.clear();
    layer.clearLayers();
    restaurants.forEach((restaurant) => {
      const category = getPrimaryCategory(restaurant);
      const shouldDimMarker = savedHighlightActive && !highlightedRestaurants.has(restaurant.id);
      const markerColor = shouldDimMarker ? "#94a3b8" : categoryMeta[category].color;
      const rank = getBestRank(restaurant);
      const rankLabel = rank < 9999 ? String(rank) : "";
      const branches = getRestaurantBranches(restaurant).filter(hasBranchCoordinate);
      const branchCount = branches.length;

      branches.forEach((branch) => {
        const dimmedClass = shouldDimMarker ? " marker-dimmed" : "";
        const branchClass = branchCount > 1 ? " marker-branch" : "";
        const branchBadge = branchCount > 1 && branch.isPrimary ? `<b>${branchCount}</b>` : "";
        const icon = L.divIcon({
          className: `restaurant-marker${dimmedClass}${branchClass}`,
          html: `<span style="--marker-color:${markerColor}">${rankLabel}${branchBadge}</span>`,
          iconSize: [38, 38],
          iconAnchor: [19, 19]
        });

        const marker = L.marker([branch.lat as number, branch.lng as number], {
          icon,
          keyboard: true,
          title: branch.displayName
        })
          .on("click", () => onSelect(restaurant.id, branch.id))
          .bindTooltip(getTooltipLabel(restaurant, branch.displayName), { direction: "top", offset: [0, -15] })
          .addTo(layer);

        markerEntriesRef.current.set(branch.id, {
          branchId: branch.id,
          lat: branch.lat as number,
          lng: branch.lng as number,
          marker,
          restaurantId: restaurant.id
        });
      });
    });
    applyMarkerSelection(markerEntriesRef.current, selectedIdRef.current, selectedBranchIdRef.current);
  }, [highlightedRestaurantIds, mapNodeRef, onSelect, restaurants, savedHighlightActive]);

  useEffect(() => {
    selectedBranchIdRef.current = selectedBranchId;
    selectedIdRef.current = selectedId;
    applyMarkerSelection(markerEntriesRef.current, selectedId, selectedBranchId);
  }, [selectedBranchId, selectedId]);

  useEffect(() => {
    const userLayer = mapNodeRef.current?.__leafletUserLayer;
    if (!userLayer) return;

    userLayer.clearLayers();
    if (!userLocation) return;

    const position = L.latLng(userLocation.lat, userLocation.lng);
    const accuracyRadius = Math.min(Math.max(userLocation.accuracy, 20), 2_500);

    L.circle(position, {
      radius: accuracyRadius,
      color: "#2563eb",
      fillColor: "#2563eb",
      fillOpacity: 0.12,
      weight: 1,
      interactive: false,
      className: "user-location-accuracy"
    }).addTo(userLayer);

    L.marker(position, {
      icon: L.divIcon({
        className: "user-location-marker",
        html: '<span class="user-location-dot" aria-hidden="true"></span>',
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      }),
      interactive: false,
      keyboard: false,
      zIndexOffset: 1_000
    }).addTo(userLayer);
  }, [mapNodeRef, userLocation]);

  useEffect(() => {
    const map = mapNodeRef.current?.__leafletMap;
    if (!map || !userLocation || !userLocationFocusKey) return;

    map.flyTo([userLocation.lat, userLocation.lng], Math.max(map.getZoom(), 15), {
      duration: 0.75
    });
  }, [mapNodeRef, userLocation, userLocationFocusKey]);

  useEffect(() => {
    const map = mapNodeRef.current?.__leafletMap;
    const selectedEntry = selectedBranchId ? markerEntriesRef.current.get(selectedBranchId) : undefined;
    if (!map || !selectedEntry) return;

    const selectionKey = `${selectedEntry.branchId}:${selectedEntry.lat}:${selectedEntry.lng}`;
    if (lastSelectionFlyToRef.current === selectionKey) return;
    lastSelectionFlyToRef.current = selectionKey;

    map.flyTo([selectedEntry.lat, selectedEntry.lng], Math.max(map.getZoom(), 14), { duration: 0.75 });
  }, [mapNodeRef, selectedBranchId, selectedId]);
}

function getTooltipLabel(restaurant: Restaurant, branchName: string) {
  return branchName === restaurant.displayName ? restaurant.displayName : `${restaurant.displayName} · ${branchName}`;
}

type MarkerEntry = {
  branchId: string;
  lat: number;
  lng: number;
  marker: Marker;
  restaurantId: string;
};

function applyMarkerSelection(entries: Map<string, MarkerEntry>, selectedId: string | undefined, selectedBranchId: string | undefined) {
  entries.forEach((entry) => {
    entry.marker
      .getElement()
      ?.classList.toggle("marker-selected", entry.restaurantId === selectedId && entry.branchId === selectedBranchId);
  });
}

declare global {
  interface HTMLDivElement {
    __leafletMap?: LeafletMap;
    __leafletLayer?: LayerGroup;
    __leafletUserLayer?: LayerGroup;
  }
}
