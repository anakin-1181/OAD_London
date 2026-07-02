import { describe, expect, it } from "vitest";
import {
  buildVerifiedBranches,
  createFallbackBranch,
  scoreCandidate
} from "../../scripts/lib/verification.mjs";

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
          id: "place-euston",
          displayName: "Roti King",
          formattedAddress: "40 Doric Way, London NW1 1LH, UK",
          phone: "+44 20 7387 2518",
          websiteUri: "https://www.rotiking.co.uk/",
          googleMapsUri: "https://maps.google.com/?cid=euston",
          lat: 51.52881,
          lng: -0.13272,
          businessStatus: "OPERATIONAL"
        },
        {
          id: "place-battersea",
          displayName: "Roti King Battersea",
          formattedAddress: "Battersea Power Station, London SW11 8BJ, UK",
          websiteUri: "https://www.rotiking.co.uk/",
          googleMapsUri: "https://maps.google.com/?cid=battersea",
          lat: 51.4821,
          lng: -0.1449,
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
          id: "closed-place",
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
});
