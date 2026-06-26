import { useEffect, useMemo, useRef, useState } from "react";
import L, { LayerGroup, Map as LeafletMap } from "leaflet";
import {
  AlertTriangle,
  CheckCircle2,
  DollarSign,
  ExternalLink,
  ListFilter,
  MapPin,
  Navigation,
  NotebookPen,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Star,
  Utensils,
  X
} from "lucide-react";
import oadData from "./data/oad-london-2026.json";

type CategoryId = "top" | "casual" | "classical" | "cheap-eats";
type VisitStatus = "want" | "booked" | "visited" | "loved";
type PriceTier = "£" | "££" | "£££" | "££££";

type ListEntry = {
  categoryId: CategoryId;
  category: string;
  rank: number;
  rankTypeCode: string;
  sourceUrl: string;
};

type Restaurant = {
  id: string;
  name: string;
  displayName: string;
  chef: string;
  cuisine: string;
  city: string;
  country: string;
  regionName: string;
  oadUrl: string | null;
  image: string | null;
  thumbnail: string | null;
  categories: string[];
  categoryIds: CategoryId[];
  listEntries: ListEntry[];
  estimatedPrice: string;
  priceBasis: string;
  address: string | null;
  addressSource?: "oad-detail" | "oad-title" | "manual-correction" | null;
  phone: string | null;
  website: string | null;
  description: string | null;
  photos: string[];
  photoCredits: string[];
  hours: { day: string; value: string }[];
  detailWarning: string | null;
  lat: number | null;
  lng: number | null;
  geocodeQuery?: string | null;
  geocodeDisplayName: string | null;
  coordinateQuality?: "verified-address" | "name-match" | "name-match-review" | "missing";
  locationQuality?: "verified" | "review" | "unmapped";
  needsManualReview?: boolean;
  dataCorrections?: string[];
  dataQuality: {
    oadList: boolean;
    oadDetail: boolean;
    geocoded: boolean;
    estimatedPrice: boolean;
    detailAddressStatus?: "verified" | "title-fallback" | "rejected" | "missing" | "corrected";
  };
};

type DataSet = {
  metadata: {
    restaurantCount: number;
    listEntryCount: number;
    excludedCount?: number;
    byCategory: Record<CategoryId, number>;
    byCoordinateQuality?: Record<string, number>;
    generatedAt: string;
    dataNotes: string[];
  };
  restaurants: Restaurant[];
};

type UserRecord = {
  status?: VisitStatus;
  note?: string;
};

type SortMode = "rank" | "name" | "category" | "price";

const data = oadData as DataSet;
const restaurants = data.restaurants;

const categoryMeta: Record<CategoryId, { label: string; color: string; soft: string }> = {
  top: { label: "Top", color: "#e24c3f", soft: "#ffe9e6" },
  casual: { label: "Casual", color: "#2e78d6", soft: "#e8f1ff" },
  classical: { label: "Classical", color: "#9a6a00", soft: "#fff1c9" },
  "cheap-eats": { label: "Cheap Eats", color: "#1f8b5c", soft: "#ddf5e8" }
};

const statusLabels: Record<VisitStatus, string> = {
  want: "Want",
  booked: "Booked",
  visited: "Visited",
  loved: "Loved"
};

const STORAGE_KEY = "oad-london-2026-user-records";
const priceTiers: PriceTier[] = ["£", "££", "£££", "££££"];

function getBestRank(restaurant: Restaurant) {
  return Math.min(...restaurant.listEntries.map((entry) => entry.rank || 9999));
}

function getPrimaryCategory(restaurant: Restaurant): CategoryId {
  if (restaurant.categoryIds.includes("top")) return "top";
  if (restaurant.categoryIds.includes("classical")) return "classical";
  if (restaurant.categoryIds.includes("casual")) return "casual";
  return restaurant.categoryIds[0] || "cheap-eats";
}

function priceValue(price: string) {
  return price.length;
}

function hasCoordinate(restaurant: Restaurant) {
  return typeof restaurant.lat === "number" && typeof restaurant.lng === "number";
}

function needsReview(restaurant: Restaurant) {
  return restaurant.needsManualReview || !hasCoordinate(restaurant) || Boolean(restaurant.detailWarning);
}

function cuisineMatches(restaurant: Restaurant, cuisine: string) {
  if (cuisine === "all") return true;
  const current = restaurant.cuisine.toLowerCase();
  const selected = cuisine.toLowerCase();
  return current === selected || current.includes(selected);
}

function loadUserRecords(): Record<string, UserRecord> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") as Record<string, UserRecord>;
  } catch {
    return {};
  }
}

function App() {
  const mapNodeRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const layerRef = useRef<LayerGroup | null>(null);
  const [query, setQuery] = useState("");
  const [activeCategories, setActiveCategories] = useState<CategoryId[]>(["top", "casual", "classical", "cheap-eats"]);
  const [activePrices, setActivePrices] = useState<PriceTier[]>(priceTiers);
  const [cuisineFilter, setCuisineFilter] = useState("all");
  const [sortMode, setSortMode] = useState<SortMode>("rank");
  const [selectedId, setSelectedId] = useState(restaurants.find(hasCoordinate)?.id || restaurants[0]?.id);
  const [userRecords, setUserRecords] = useState<Record<string, UserRecord>>(() => loadUserRecords());
  const [showNeedsReview, setShowNeedsReview] = useState(false);

  const selected = restaurants.find((restaurant) => restaurant.id === selectedId) || restaurants[0];
  const selectedRecord = userRecords[selected?.id || ""] || {};

  const cuisineOptions = useMemo(() => {
    const counts = restaurants.reduce<Record<string, number>>((summary, restaurant) => {
      if (!restaurant.cuisine) return summary;
      summary[restaurant.cuisine] = (summary[restaurant.cuisine] || 0) + 1;
      return summary;
    }, {});

    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([label, count]) => ({ label, count }));
  }, []);

  const filteredRestaurants = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return restaurants
      .filter((restaurant) => restaurant.categoryIds.some((categoryId) => activeCategories.includes(categoryId)))
      .filter((restaurant) => activePrices.includes(restaurant.estimatedPrice as PriceTier))
      .filter((restaurant) => cuisineMatches(restaurant, cuisineFilter))
      .filter((restaurant) => (showNeedsReview ? needsReview(restaurant) : true))
      .filter((restaurant) => {
        if (!normalizedQuery) return true;
        return [
          restaurant.displayName,
          restaurant.name,
          restaurant.chef,
          restaurant.cuisine,
          restaurant.address,
          restaurant.categories.join(" ")
        ]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(normalizedQuery));
      })
      .sort((a, b) => {
        if (sortMode === "name") return a.displayName.localeCompare(b.displayName);
        if (sortMode === "category") return getPrimaryCategory(a).localeCompare(getPrimaryCategory(b));
        if (sortMode === "price") return priceValue(a.estimatedPrice) - priceValue(b.estimatedPrice) || getBestRank(a) - getBestRank(b);
        return getBestRank(a) - getBestRank(b) || a.displayName.localeCompare(b.displayName);
      });
  }, [activeCategories, activePrices, cuisineFilter, query, showNeedsReview, sortMode]);

  const mappedRestaurants = useMemo(() => filteredRestaurants.filter(hasCoordinate), [filteredRestaurants]);
  const missingCoordinates = data.restaurants.filter((restaurant) => !hasCoordinate(restaurant)).length;
  const reviewCount = data.restaurants.filter(needsReview).length;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userRecords));
  }, [userRecords]);

  useEffect(() => {
    if (!mapNodeRef.current || mapRef.current) return;

    const map = L.map(mapNodeRef.current, {
      zoomControl: false,
      attributionControl: false
    }).setView([51.513, -0.125], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19
    }).addTo(map);
    L.control.zoom({ position: "bottomright" }).addTo(map);
    L.control.attribution({ position: "bottomleft", prefix: false }).addAttribution("OpenStreetMap").addTo(map);

    mapRef.current = map;
    layerRef.current = L.layerGroup().addTo(map);

    return () => {
      map.remove();
      mapRef.current = null;
      layerRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!layerRef.current) return;

    layerRef.current.clearLayers();
    mappedRestaurants.forEach((restaurant) => {
      const category = getPrimaryCategory(restaurant);
      const color = categoryMeta[category].color;
      const selectedClass = restaurant.id === selectedId ? " marker-selected" : "";
      const icon = L.divIcon({
        className: `restaurant-marker${selectedClass}`,
        html: `<span style="--marker-color:${color}">${getBestRank(restaurant) < 9999 ? getBestRank(restaurant) : ""}</span>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17]
      });

      L.marker([restaurant.lat as number, restaurant.lng as number], { icon })
        .on("click", () => setSelectedId(restaurant.id))
        .bindTooltip(restaurant.displayName, { direction: "top", offset: [0, -14] })
        .addTo(layerRef.current as LayerGroup);
    });
  }, [mappedRestaurants, selectedId]);

  useEffect(() => {
    if (!selected || !mapRef.current || !hasCoordinate(selected)) return;
    mapRef.current.flyTo([selected.lat as number, selected.lng as number], Math.max(mapRef.current.getZoom(), 14), {
      duration: 0.8
    });
  }, [selected]);

  function toggleCategory(categoryId: CategoryId) {
    setActiveCategories((current) => {
      if (current.includes(categoryId) && current.length === 1) return current;
      return current.includes(categoryId)
        ? current.filter((item) => item !== categoryId)
        : [...current, categoryId];
    });
  }

  function togglePrice(price: PriceTier) {
    setActivePrices((current) => {
      const next = current.includes(price)
        ? current.filter((item) => item !== price)
        : [...current, price];
      return next.length ? next : priceTiers;
    });
  }

  function updateUserRecord(patch: UserRecord) {
    if (!selected) return;
    setUserRecords((current) => {
      const nextRecord: UserRecord = {
        ...current[selected.id],
        ...patch
      };

      if (patch.status === undefined) delete nextRecord.status;
      if (patch.note !== undefined && !patch.note.trim()) delete nextRecord.note;

      const next = { ...current };
      if (!nextRecord.status && !nextRecord.note) delete next[selected.id];
      else next[selected.id] = nextRecord;
      return next;
    });
  }

  function toggleStatus(status: VisitStatus) {
    updateUserRecord({ status: selectedRecord.status === status ? undefined : status });
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <header className="brand-block">
          <div>
            <span className="eyebrow">OAD Europe 2026</span>
            <h1>London Restaurants</h1>
          </div>
          <div className="source-badge">{data.metadata.restaurantCount}</div>
        </header>

        <section className="summary-strip" aria-label="Dataset summary">
          <div>
            <strong>{mappedRestaurants.length}</strong>
            <span>mapped</span>
          </div>
          <div>
            <strong>{missingCoordinates}</strong>
            <span>unmapped</span>
          </div>
          <div>
            <strong>{reviewCount}</strong>
            <span>review</span>
          </div>
        </section>

        <label className="search-box">
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search restaurant, chef, cuisine"
          />
        </label>

        <section className="filter-block">
          <div className="section-label">
            <ListFilter size={16} />
            Lists
          </div>
          <div className="category-grid">
            {(Object.keys(categoryMeta) as CategoryId[]).map((categoryId) => (
              <button
                key={categoryId}
                className={activeCategories.includes(categoryId) ? "category-chip active" : "category-chip"}
                style={{
                  "--chip-color": categoryMeta[categoryId].color,
                  "--chip-soft": categoryMeta[categoryId].soft
                } as React.CSSProperties}
                onClick={() => toggleCategory(categoryId)}
              >
                <span />
                {categoryMeta[categoryId].label}
                <em>{data.metadata.byCategory[categoryId]}</em>
              </button>
            ))}
          </div>
        </section>

        <section className="filter-block">
          <div className="section-label">
            <DollarSign size={16} />
            Price
          </div>
          <div className="price-grid">
            {priceTiers.map((price) => (
              <button
                key={price}
                className={activePrices.includes(price) ? "price-chip active" : "price-chip"}
                onClick={() => togglePrice(price)}
              >
                {price}
              </button>
            ))}
          </div>
        </section>

        <section className="controls-row">
          <label className="select-control">
            <Utensils size={16} />
            <select value={cuisineFilter} onChange={(event) => setCuisineFilter(event.target.value)}>
              <option value="all">All cuisines</option>
              {cuisineOptions.map((cuisine) => (
                <option key={cuisine.label} value={cuisine.label}>
                  {cuisine.label} ({cuisine.count})
                </option>
              ))}
            </select>
          </label>
          <label className="select-control">
            <SlidersHorizontal size={16} />
            <select value={sortMode} onChange={(event) => setSortMode(event.target.value as SortMode)}>
              <option value="rank">Rank</option>
              <option value="name">Name</option>
              <option value="category">List</option>
              <option value="price">Price</option>
            </select>
          </label>
          <button
            className={showNeedsReview ? "review-toggle active" : "review-toggle"}
            onClick={() => setShowNeedsReview((value) => !value)}
            title="Needs review"
          >
            <AlertTriangle size={16} />
          </button>
        </section>

        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant) => {
            const category = getPrimaryCategory(restaurant);
            const userRecord = userRecords[restaurant.id];

            return (
              <button
                key={restaurant.id}
                className={restaurant.id === selectedId ? "restaurant-row selected" : "restaurant-row"}
                onClick={() => setSelectedId(restaurant.id)}
              >
                <span className="rank-pill" style={{ background: categoryMeta[category].soft, color: categoryMeta[category].color }}>
                  {getBestRank(restaurant) < 9999 ? getBestRank(restaurant) : "R"}
                </span>
                <span className="row-main">
                  <strong>{restaurant.displayName}</strong>
                  <small>{restaurant.cuisine || "Cuisine unavailable"} · {restaurant.estimatedPrice}</small>
                </span>
                <span className="row-flags">
                  {userRecord?.status ? <CheckCircle2 size={15} /> : null}
                  {needsReview(restaurant) ? <AlertTriangle size={15} /> : null}
                </span>
              </button>
            );
          })}
          {!filteredRestaurants.length ? (
            <div className="empty-state">No restaurants match the current filters.</div>
          ) : null}
        </div>
      </aside>

      <section className="map-stage">
        <div ref={mapNodeRef} className="map-canvas" />
        <div className="map-topbar">
          <div>
            <MapPin size={17} />
            <span>{mappedRestaurants.length}/{filteredRestaurants.length} mapped</span>
          </div>
          <div>
            <Navigation size={17} />
            <span>London</span>
          </div>
        </div>
      </section>

      {selected ? (
        <aside className="detail-panel">
          <div className="detail-hero">
            {selected.photos?.[0] || selected.image ? (
              <img src={selected.photos?.[0] || selected.image || ""} alt={selected.displayName} />
            ) : null}
            <button className="close-detail" onClick={() => setSelectedId("")} aria-label="Close details">
              <X size={18} />
            </button>
          </div>

          <div className="detail-body">
            <div className="title-row">
              <div>
                <span className="eyebrow">{selected.categories.join(" · ")}</span>
                <h2>{selected.displayName}</h2>
              </div>
              <span className="price-pill" title={selected.priceBasis}>{selected.estimatedPrice}</span>
            </div>

            <div className="meta-line">
              <span>{selected.cuisine || "Cuisine unavailable"}</span>
              {selected.chef ? <span>{selected.chef}</span> : null}
              <span className={needsReview(selected) ? "quality-chip review" : "quality-chip verified"}>
                {needsReview(selected) ? <AlertTriangle size={14} /> : <ShieldCheck size={14} />}
                {needsReview(selected) ? "Review" : "Verified"}
              </span>
            </div>

            <div className="rank-grid">
              {selected.listEntries.map((entry) => (
                <a key={`${entry.categoryId}-${entry.rank}`} href={entry.sourceUrl} target="_blank" rel="noreferrer">
                  <span>{categoryMeta[entry.categoryId].label}</span>
                  <strong>#{entry.rank}</strong>
                </a>
              ))}
            </div>

            {selected.detailWarning ? (
              <div className="warning-card">
                <AlertTriangle size={17} />
                <span>{selected.detailWarning}</span>
              </div>
            ) : null}

            {!hasCoordinate(selected) ? (
              <div className="warning-card">
                <AlertTriangle size={17} />
                <span>Coordinate needs manual review before this can appear on the map.</span>
              </div>
            ) : null}

            {selected.coordinateQuality === "name-match-review" ? (
              <div className="warning-card">
                <AlertTriangle size={17} />
                <span>Pin was found by London name match because the OAD detail address points to another branch.</span>
              </div>
            ) : null}

            <p className="description">
              {selected.description || "OAD list metadata is available, but the London detail page did not provide a verified description."}
            </p>

            <section className="detail-section">
              <h3>Details</h3>
              <dl>
                <div>
                  <dt>Address</dt>
                  <dd>{selected.address || "Needs location review"}</dd>
                </div>
                <div>
                  <dt>Location Quality</dt>
                  <dd>{selected.coordinateQuality === "verified-address" ? "Verified OAD address" : selected.coordinateQuality === "name-match-review" ? "Name-match pin, review branch" : selected.coordinateQuality === "missing" ? "Unmapped" : "London name match"}</dd>
                </div>
                {selected.phone ? (
                  <div>
                    <dt>Phone</dt>
                    <dd>{selected.phone}</dd>
                  </div>
                ) : null}
              </dl>
            </section>

            <section className="detail-section">
              <h3>
                <NotebookPen size={17} />
                Your Notes
              </h3>
              <div className="status-grid">
                {(Object.keys(statusLabels) as VisitStatus[]).map((status) => (
                  <button
                    key={status}
                    className={selectedRecord.status === status ? "status-button active" : "status-button"}
                    onClick={() => toggleStatus(status)}
                  >
                    {status === "loved" ? <Star size={15} /> : <CheckCircle2 size={15} />}
                    {statusLabels[status]}
                  </button>
                ))}
              </div>
              <textarea
                value={selectedRecord.note || ""}
                onChange={(event) => updateUserRecord({ note: event.target.value })}
                placeholder="Drop your thoughts, dishes to try, booking notes..."
              />
            </section>

            <div className="action-row">
              {selected.oadUrl ? (
                <a href={selected.oadUrl} target="_blank" rel="noreferrer">
                  OAD
                  <ExternalLink size={15} />
                </a>
              ) : null}
              {selected.website ? (
                <a href={selected.website} target="_blank" rel="noreferrer">
                  Website
                  <ExternalLink size={15} />
                </a>
              ) : null}
            </div>
          </div>
        </aside>
      ) : null}
    </main>
  );
}

export default App;
