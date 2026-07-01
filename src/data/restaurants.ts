import type { DataSet } from "../domain/types";

export const DATASET_URL = "/data/oad-london-2026.json";

export const emptyDataset: DataSet = {
  metadata: {
    title: "OAD Europe 2026 London Restaurants",
    restaurantCount: 0,
    listEntryCount: 0,
    byCategory: {
      top: 0,
      casual: 0,
      classical: 0,
      "cheap-eats": 0
    },
    generatedAt: "",
    dataNotes: []
  },
  restaurants: []
};

export async function loadRestaurantDataset(signal?: AbortSignal): Promise<DataSet> {
  const response = await fetch(DATASET_URL, signal ? { signal } : undefined);
  if (!response.ok) {
    throw new Error(`Unable to load restaurant data (${response.status})`);
  }

  return (await response.json()) as DataSet;
}
