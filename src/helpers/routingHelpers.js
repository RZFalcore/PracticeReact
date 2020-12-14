import qs from "query-string";

export const getCategoryWithValue = (categories, value) =>
  categories.find((c) => c.value === value);

export const getCategoryFromLocation = (location) =>
  qs.parse(location.search).category;

export const getCategoryFromLocationState = (location) =>
  qs.parse(location.state.from.search).category;
