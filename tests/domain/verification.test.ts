import { describe, expect, it } from "vitest";
import {
  buildVerifiedBranches,
  createFallbackBranch,
  scoreCandidate
} from "../../scripts/lib/verification.mjs";
import {
  buildIssueBreakdown,
  buildReportJson
} from "../../scripts/verify-data.mjs";

const baseRestaurant = {
  id: "roti-king",
  name: "Roti King",
  displayName: "Roti King",
  address: "40 Doric Way, London NW1 1LH, United Kingdom",
  phone: "+44 20 7387 2518",
  website: "https://www.rotiking.co.uk/",
  lat: 51.5288,
  lng: -0.1327,
  oadUrl: "https://www.oadguides.com/restaurant/roti-king",
  geocodeDisplayName: "Doric Way, London",
  locationQuality: "verified"
};

describe("restaurant verification matching", () => {
  it("scores a candidate highly when name, postcode, phone, domain, and distance agree", () => {
    const result = scoreCandidate(baseRestaurant, {
      displayName: "Roti King",
      formattedAddress: "40 Doric Way, London NW1 1LH, UK",
      phone: "+44 20 7387 2518",
      websiteUri: "https://www.rotiking.co.uk/locations/euston",
      lat: 51.52881,
      lng: -0.13272,
      businessStatus: "OPERATIONAL"
    });

    expect(result.confidence).toBeGreaterThan(0.9);
    expect(result.signals).toMatchObject({
      name: true,
      postcode: true,
      phone: true,
      website: true,
      distance: true,
      london: true,
      operational: true
    });
  });

  it("builds multiple branch records under one parent restaurant", () => {
    const { branches, verification } = buildVerifiedBranches(
      baseRestaurant,
      [
        {
          id: "website-euston",
          displayName: "Roti King",
          formattedAddress: "40 Doric Way, London NW1 1LH, UK",
          phone: "+44 20 7387 2518",
          websiteUri: "https://www.rotiking.co.uk/",
          mapUri: "https://www.openstreetmap.org/?mlat=51.52881&mlon=-0.13272#map=17/51.52881/-0.13272",
          lat: 51.52881,
          lng: -0.13272,
          sourceType: "website",
          sourceLabel: "Official website structured data",
          businessStatus: "OPERATIONAL"
        },
        {
          id: "website-battersea",
          displayName: "Roti King Battersea",
          formattedAddress: "Battersea Power Station, London SW11 8BJ, UK",
          websiteUri: "https://www.rotiking.co.uk/",
          mapUri: "https://www.openstreetmap.org/?mlat=51.4821&mlon=-0.1449#map=17/51.4821/-0.1449",
          lat: 51.4821,
          lng: -0.1449,
          sourceType: "website",
          sourceLabel: "Official website structured data",
          businessStatus: "OPERATIONAL"
        }
      ],
      "2026-07-02T00:00:00.000Z"
    );

    expect(branches).toHaveLength(2);
    expect(branches.every((branch) => branch.restaurantId === "roti-king")).toBe(true);
    expect(branches.some((branch) => branch.isPrimary)).toBe(true);
    expect(verification.sourceAgreement.branchCount).toBe(2);
  });

  it("flags closed or weak candidates for review instead of silently trusting them", () => {
    const { verification } = buildVerifiedBranches(
      baseRestaurant,
      [
        {
          id: "closed-website-branch",
          displayName: "Roti King",
          formattedAddress: "40 Doric Way, London NW1 1LH, UK",
          websiteUri: "https://www.rotiking.co.uk/",
          lat: 51.52881,
          lng: -0.13272,
          businessStatus: "CLOSED_PERMANENTLY"
        }
      ],
      "2026-07-02T00:00:00.000Z"
    );

    expect(verification.status).toBe("needs-review");
    expect(verification.issues.join(" ")).toContain("closed");
  });

  it("creates a fallback branch when external verification is unavailable", () => {
    const branch = createFallbackBranch(baseRestaurant, "2026-07-02T00:00:00.000Z");

    expect(branch).toMatchObject({
      id: "roti-king:primary",
      restaurantId: "roti-king",
      displayName: "Roti King",
      isPrimary: true
    });
    expect(branch.sources.map((source) => source.type)).toContain("oad");
  });

  it("summarises verification issues for reports and workflow artifacts", () => {
    const summaries = [
      { id: "verified", name: "Verified", branchCount: 1, status: "verified", confidence: 0.92, issues: [] },
      { id: "closed", name: "Closed", branchCount: 1, status: "needs-review", confidence: 0.8, issues: ["One or more branch candidates are marked closed."] },
      { id: "weak", name: "Weak", branchCount: 2, status: "needs-review", confidence: 0.51, issues: [] },
      { id: "closed-two", name: "Closed Two", branchCount: 1, status: "needs-review", confidence: 0.7, issues: ["One or more branch candidates are marked closed."] }
    ];

    expect(buildIssueBreakdown(summaries)).toEqual([
      { issue: "One or more branch candidates are marked closed.", count: 2 },
      { issue: "Low confidence branch match.", count: 1 }
    ]);

    expect(buildReportJson(summaries).summary).toMatchObject({
      restaurantsChecked: 4,
      branchPinsGenerated: 5,
      verified: 1,
      needsReview: 3,
      multiBranchRestaurants: 1
    });
  });
});
