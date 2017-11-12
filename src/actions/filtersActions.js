import {UPDATE_FILTERS} from "./actionTypes";

export function updateFilters(newFilters) {
  return (dispach, getState) => {
    dispach(
      {
        type: UPDATE_FILTERS,
        filters: Object.assign(
          {},
          getState().filters,
          newFilters
        )
      }
    );
  };
}
