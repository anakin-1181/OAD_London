import { useEffect, useState } from "react";
import { emptyDataset, loadRestaurantDataset } from "../data/restaurants";
import type { DataSet } from "../domain/types";

type DatasetState = {
  dataset: DataSet;
  isLoading: boolean;
  error: string | null;
};

export function useRestaurantDataset(): DatasetState {
  const [state, setState] = useState<DatasetState>({
    dataset: emptyDataset,
    isLoading: true,
    error: null
  });

  useEffect(() => {
    const controller = new AbortController();

    loadRestaurantDataset(controller.signal)
      .then((dataset) => {
        setState({ dataset, isLoading: false, error: null });
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;

        setState({
          dataset: emptyDataset,
          isLoading: false,
          error: error instanceof Error ? error.message : "Unable to load restaurant data"
        });
      });

    return () => controller.abort();
  }, []);

  return state;
}
