import { lazy, Suspense, useState } from "react";
import { MapPinned, PanelLeftClose, PanelLeftOpen, PanelRightClose, PanelRightOpen } from "lucide-react";
import { ExplorerPanel } from "./components/ExplorerPanel";
import { RestaurantDetail } from "./components/RestaurantDetail";
import { useRestaurantExplorer } from "./hooks/useRestaurantExplorer";

const MapView = lazy(() => import("./components/MapView").then((module) => ({ default: module.MapView })));

function isCompactViewport() {
  return typeof window !== "undefined" && window.matchMedia("(max-width: 820px)").matches;
}

function App() {
  const explorer = useRestaurantExplorer();
  const [isExplorerOpen, setIsExplorerOpen] = useState(() => !isCompactViewport());
  const [isDetailOpen, setIsDetailOpen] = useState(() => !isCompactViewport());
  const [isSavedListOpen, setIsSavedListOpen] = useState(false);
  const [isSavedHighlightActive, setIsSavedHighlightActive] = useState(false);
  const shellClassName = [
    "app-shell",
    isExplorerOpen ? "" : "explorer-collapsed",
    isDetailOpen ? "" : "detail-collapsed"
  ]
    .filter(Boolean)
    .join(" ");
  const explorerWithSelection = {
    ...explorer,
    selectRestaurant: handleSelectRestaurant
  };

  function handleSelectRestaurant(restaurantId: string) {
    explorer.selectRestaurant(restaurantId);
    setIsSavedListOpen(false);
    setIsDetailOpen(true);
  }

  return (
    <main className={shellClassName}>
      {isExplorerOpen ? <ExplorerPanel explorer={explorerWithSelection} /> : null}
      <Suspense fallback={<section className="map-stage map-skeleton" aria-label="Loading map" />}>
        <MapView
          restaurants={explorer.mappedRestaurants}
          filteredCount={explorer.filteredRestaurants.length}
          selectedRestaurant={explorer.selectedRestaurant}
          selectedId={explorer.selectedId}
          reviewCount={explorer.stats.reviewCount}
          savedRestaurants={explorer.savedRestaurants}
          savedListOpen={isSavedListOpen}
          savedHighlightActive={isSavedHighlightActive}
          onSelect={handleSelectRestaurant}
          onToggleSavedList={() => setIsSavedListOpen((isOpen) => !isOpen)}
          onCloseSavedList={() => setIsSavedListOpen(false)}
          onToggleSavedHighlight={() => {
            setIsSavedListOpen(false);
            setIsSavedHighlightActive((isActive) => !isActive);
          }}
        />
      </Suspense>
      <header className="mobile-site-banner" aria-label="OAD London Food Map">
        <div className="mobile-site-mark" aria-hidden="true">
          <MapPinned size={19} />
        </div>
        <div className="mobile-site-copy">
          <span>OAD Europe 2026</span>
          <h1>London Food Map</h1>
        </div>
        <div className="mobile-site-stat" aria-label={`${explorer.stats.total} restaurants in the guide`}>
          <strong>{explorer.isLoading ? "..." : explorer.stats.total}</strong>
          <span>places</span>
        </div>
      </header>
      <div className="panel-toggle-cluster" aria-label="Panel visibility controls">
        <button
          type="button"
          className="panel-toggle left"
          onClick={() => {
            setIsSavedListOpen(false);
            setIsExplorerOpen((isOpen) => !isOpen);
          }}
          aria-label={isExplorerOpen ? "Hide search and filters panel" : "Show search and filters panel"}
          aria-pressed={isExplorerOpen}
          title={isExplorerOpen ? "Hide filters" : "Show filters"}
        >
          {isExplorerOpen ? <PanelLeftClose size={18} aria-hidden="true" /> : <PanelLeftOpen size={18} aria-hidden="true" />}
          <span className="panel-toggle-label">Explore</span>
        </button>
        <button
          type="button"
          className="panel-toggle right"
          onClick={() => {
            setIsSavedListOpen(false);
            setIsDetailOpen((isOpen) => !isOpen);
          }}
          aria-label={isDetailOpen ? "Hide restaurant details panel" : "Show restaurant details panel"}
          aria-pressed={isDetailOpen}
          title={isDetailOpen ? "Hide details" : "Show details"}
        >
          {isDetailOpen ? <PanelRightClose size={18} aria-hidden="true" /> : <PanelRightOpen size={18} aria-hidden="true" />}
          <span className="panel-toggle-label">Details</span>
        </button>
      </div>
      {isDetailOpen ? (
        <RestaurantDetail
          restaurant={explorer.selectedRestaurant}
          userRecord={explorer.selectedRecord}
          onClose={() => setIsDetailOpen(false)}
          onUpdateRecord={explorer.updateSelectedRecord}
          onToggleStatus={explorer.toggleSelectedStatus}
        />
      ) : null}
    </main>
  );
}

export default App;
