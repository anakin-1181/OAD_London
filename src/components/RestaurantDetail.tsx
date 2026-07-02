import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Globe2,
  Heart,
  MapPin,
  Navigation,
  NotebookPen,
  Phone,
  ShieldCheck,
  Star,
  X
} from "lucide-react";
import { categoryMeta, statusLabels } from "../domain/restaurantConfig";
import {
  buildBranchMapSearchUrl,
  buildMapSearchUrl,
  buildRestaurantReasons,
  getBranchCountLabel,
  getArea,
  getBranchById,
  getHeroImage,
  getPrimaryCategory,
  getRestaurantBranches,
  hasCoordinate,
  needsReview
} from "../domain/restaurants";
import { VISIT_STATUSES, type Restaurant, type RestaurantBranch, type UserRecord, type VisitStatus } from "../domain/types";

type RestaurantDetailProps = {
  restaurant: Restaurant | undefined;
  selectedBranch: RestaurantBranch | undefined;
  selectedBranchId: string | undefined;
  userRecord: UserRecord;
  onClose: () => void;
  onSelectBranch: (branchId: string) => void;
  onUpdateRecord: (patch: UserRecord) => void;
  onToggleStatus: (status: VisitStatus) => void;
};

export function RestaurantDetail({
  restaurant,
  selectedBranch,
  selectedBranchId,
  userRecord,
  onClose,
  onSelectBranch,
  onUpdateRecord,
  onToggleStatus
}: RestaurantDetailProps) {
  if (!restaurant) {
    return (
      <aside className="detail-panel empty-detail" aria-label="Restaurant details">
        <button type="button" className="close-detail" onClick={onClose} aria-label="Close restaurant details">
          <X size={18} aria-hidden="true" />
        </button>
        <div>
          <MapPin size={24} aria-hidden="true" />
          <h2>Select a restaurant</h2>
          <p>Pick a result or map pin to see ranks, booking links, data quality, and your notes.</p>
        </div>
      </aside>
    );
  }

  const category = getPrimaryCategory(restaurant);
  const heroImage = getHeroImage(restaurant);
  const reasons = buildRestaurantReasons(restaurant);
  const branches = getRestaurantBranches(restaurant);
  const activeBranch = selectedBranch || getBranchById(restaurant, selectedBranchId);
  const qualityNeedsReview = needsReview(restaurant) || Boolean(activeBranch && activeBranch.confidence < 0.64);
  const branchLabel = getBranchCountLabel(restaurant);
  const branchPhone = activeBranch?.phone || restaurant.phone;
  const branchWebsite = activeBranch?.website || restaurant.website;
  const branchAddress = activeBranch?.address || restaurant.address;

  return (
    <aside className="detail-panel" aria-label={`${restaurant.displayName} details`}>
      <div className="detail-hero">
        {heroImage ? <img src={heroImage} alt={restaurant.displayName} /> : <div className="hero-fallback">{restaurant.displayName}</div>}
        <button type="button" className="close-detail" onClick={onClose} aria-label="Close restaurant details">
          <X size={18} aria-hidden="true" />
        </button>
        <div className="hero-scrim">
          <span style={{ backgroundColor: categoryMeta[category].color }}>{categoryMeta[category].shortLabel}</span>
          <strong>{restaurant.estimatedPrice}</strong>
        </div>
      </div>

      <div className="detail-body">
        <header className="detail-title">
          <span className="eyebrow">{restaurant.categories.join(" · ")}</span>
          <h2>{restaurant.displayName}</h2>
          <p>{[restaurant.cuisine || "Cuisine unavailable", branchLabel || `${getArea(restaurant)} London`].join(" · ")}</p>
        </header>

        {branches.length > 1 ? (
          <section className="branch-selector" aria-label={`${restaurant.displayName} London branches`}>
            <div className="branch-selector-header">
              <MapPin size={17} aria-hidden="true" />
              <span>{branches.length} London branches</span>
            </div>
            <div className="branch-options">
              {branches.map((branch) => (
                <button
                  key={branch.id}
                  type="button"
                  className={activeBranch?.id === branch.id ? "branch-option active" : "branch-option"}
                  aria-pressed={activeBranch?.id === branch.id}
                  onClick={() => onSelectBranch(branch.id)}
                >
                  <strong>{branch.displayName}</strong>
                  <span>{branch.address || "Address needs review"}</span>
                </button>
              ))}
            </div>
          </section>
        ) : null}

        <section className="status-grid" aria-label="Your visit status">
          {VISIT_STATUSES.map((status) => (
            <button
              key={status}
              type="button"
              className={userRecord.status === status ? "status-button active" : "status-button"}
              aria-pressed={userRecord.status === status}
              onClick={() => onToggleStatus(status)}
            >
              {status === "loved" ? <Heart size={15} aria-hidden="true" /> : <CheckCircle2 size={15} aria-hidden="true" />}
              {statusLabels[status]}
            </button>
          ))}
        </section>

        <section className="rank-grid" aria-label="OAD rankings">
          {restaurant.listEntries.map((entry) => (
            <a key={`${entry.categoryId}-${entry.rank}`} href={entry.sourceUrl} target="_blank" rel="noreferrer">
              <span>{categoryMeta[entry.categoryId].shortLabel}</span>
              <strong>#{entry.rank}</strong>
            </a>
          ))}
        </section>

        <section className="insight-panel">
          <h3>
            <Star size={17} aria-hidden="true" />
            Why It Might Fit
          </h3>
          <ul>
            {reasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </section>

        {qualityNeedsReview ? (
          <div className="warning-card">
            <AlertTriangle size={17} aria-hidden="true" />
            <span>
              {restaurant.verification?.issues[0] || restaurant.detailWarning || "Coordinate or branch data needs manual review before treating this pin as final."}
            </span>
          </div>
        ) : (
          <div className="quality-card">
            <ShieldCheck size={17} aria-hidden="true" />
            <span>{getBranchQualityLabel(restaurant, activeBranch)}</span>
          </div>
        )}

        <p className="description">
          {restaurant.description || "OAD list metadata is available, but this detail page did not provide a verified restaurant description."}
        </p>

        <section className="detail-section">
          <h3>
            <MapPin size={17} aria-hidden="true" />
            Details
          </h3>
          <dl>
            <div>
              <dt>Address</dt>
              <dd>{branchAddress || "Needs location review"}</dd>
            </div>
            <div>
              <dt>Location Quality</dt>
              <dd>{getLocationQualityLabel(restaurant, activeBranch)}</dd>
            </div>
            {restaurant.chef ? (
              <div>
                <dt>Chef</dt>
                <dd>{restaurant.chef}</dd>
              </div>
            ) : null}
            {branchPhone ? (
              <div>
                <dt>Phone</dt>
                <dd>{branchPhone}</dd>
              </div>
            ) : null}
          </dl>
        </section>

        {restaurant.hours.length ? (
          <section className="detail-section">
            <h3>
              <Clock3 size={17} aria-hidden="true" />
              Hours
            </h3>
            <div className="hours-list">
              {restaurant.hours.slice(0, 4).map((slot) => (
                <span key={`${slot.day}-${slot.value}`}>
                  <strong>{slot.day}</strong>
                  {slot.value}
                </span>
              ))}
            </div>
          </section>
        ) : null}

        <section className="detail-section">
          <h3>
            <NotebookPen size={17} aria-hidden="true" />
            Your Notes
          </h3>
          <textarea
            value={userRecord.note || ""}
            onChange={(event) => onUpdateRecord({ note: event.target.value })}
            placeholder="Dishes to try, booking notes, who to bring..."
            aria-label={`Notes for ${restaurant.displayName}`}
          />
        </section>

        <div className="action-row">
          <a href={activeBranch ? buildBranchMapSearchUrl(activeBranch, restaurant) : buildMapSearchUrl(restaurant)} target="_blank" rel="noreferrer">
            <Navigation size={15} aria-hidden="true" />
            Maps
          </a>
          {restaurant.oadUrl ? (
            <a href={restaurant.oadUrl} target="_blank" rel="noreferrer">
              <ExternalLink size={15} aria-hidden="true" />
              OAD
            </a>
          ) : null}
          {branchWebsite ? (
            <a href={branchWebsite} target="_blank" rel="noreferrer">
              <Globe2 size={15} aria-hidden="true" />
              Website
            </a>
          ) : null}
          {branchPhone ? (
            <a href={`tel:${branchPhone.replace(/[^+\d]/g, "")}`}>
              <Phone size={15} aria-hidden="true" />
              Call
            </a>
          ) : null}
        </div>
      </div>
    </aside>
  );
}

function getLocationQualityLabel(restaurant: Restaurant, branch: RestaurantBranch | undefined): string {
  if (branch) {
    if (branch.businessStatus === "CLOSED_PERMANENTLY") return "Closed in source data";
    if (branch.businessStatus === "CLOSED_TEMPORARILY") return "Temporarily closed in source data";
    if (branch.confidence >= 0.82) return "Verified branch";
    if (branch.confidence >= 0.64) return "Likely branch";
    return "Branch needs review";
  }

  if (!hasCoordinate(restaurant)) return "Unmapped";
  if (restaurant.coordinateQuality === "verified-address") return "Verified OAD address";
  if (restaurant.coordinateQuality === "name-match-review") return "Name-match pin, review branch";
  if (restaurant.coordinateQuality === "missing") return "Unmapped";
  return "London name match";
}

function getBranchQualityLabel(restaurant: Restaurant, branch: RestaurantBranch | undefined): string {
  if (restaurant.verification?.status === "verified" && restaurant.verification.checkedAt) {
    return `Verified against source data on ${new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric"
    }).format(new Date(restaurant.verification.checkedAt))}.`;
  }

  if (branch && branch.confidence >= 0.82) return "Mapped from a high-confidence verified London branch.";
  if (branch && branch.confidence >= 0.64) return "Mapped from a likely London branch with source agreement.";
  return "Mapped from a verified London address in the generated dataset.";
}
