import type { CategoryId, SortMode, VisitStatus } from "./types";

export const STORAGE_KEY = "oad-london-2026-user-records";

export const categoryMeta: Record<
  CategoryId,
  { label: string; shortLabel: string; color: string; soft: string; ink: string }
> = {
  top: {
    label: "Top Restaurants",
    shortLabel: "Top",
    color: "#e24a2f",
    soft: "#fff0e8",
    ink: "#8f2415"
  },
  casual: {
    label: "Casual",
    shortLabel: "Casual",
    color: "#2563eb",
    soft: "#eaf1ff",
    ink: "#173f98"
  },
  classical: {
    label: "Classical",
    shortLabel: "Classical",
    color: "#9a6412",
    soft: "#fff4d7",
    ink: "#70470b"
  },
  "cheap-eats": {
    label: "Cheap Eats",
    shortLabel: "Value",
    color: "#168256",
    soft: "#e4f7ed",
    ink: "#0f5c3d"
  }
};

export const statusLabels: Record<VisitStatus, string> = {
  want: "Want",
  booked: "Booked",
  visited: "Visited",
  loved: "Loved"
};

export const sortLabels: Record<SortMode, string> = {
  rank: "Best OAD rank",
  name: "Name",
  category: "Guide list",
  price: "Price"
};

export const londonCenter = {
  lat: 51.513,
  lng: -0.125,
  zoom: 12
};
