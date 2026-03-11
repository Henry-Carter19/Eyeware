import { SelectedFilters, FilterDefinition } from "./productFilters";

export const parseFiltersFromSearch = (
  searchParams: URLSearchParams,
  validKeys?: string[],
): SelectedFilters => {
  const filters: SelectedFilters = {};

  searchParams.forEach((value, key) => {
    if (validKeys && !validKeys.includes(key)) return;

    const values = value
      .split(",")
      .map((x) => decodeURIComponent(x.trim()))
      .filter(Boolean);

    if (values.length > 0) {
      filters[key] = values;
    }
  });

  return filters;
};

export const buildSearchParamsFromFilters = (
  filters: SelectedFilters,
): URLSearchParams => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, values]) => {
    const cleaned = values.map((x) => x.trim()).filter(Boolean);

    if (cleaned.length > 0) {
      params.set(key, cleaned.map(encodeURIComponent).join(","));
    }
  });

  return params;
};

export const toggleFilterValue = (
  current: SelectedFilters,
  filterKey: string,
  value: string,
): SelectedFilters => {
  const existing = current[filterKey] || [];
  const exists = existing.includes(value);

  if (exists) {
    const nextValues = existing.filter((item) => item !== value);

    if (nextValues.length === 0) {
      const { [filterKey]: _, ...rest } = current;
      return rest;
    }

    return {
      ...current,
      [filterKey]: nextValues,
    };
  }

  return {
    ...current,
    [filterKey]: [...existing, value],
  };
};

export const clearAllFilters = (): SelectedFilters => ({});

export const getValidFilterKeys = (definitions: FilterDefinition[]) =>
  definitions.map((f) => f.key);

export const productMatchesFilters = <TProduct extends Record<string, any>>(
  product: TProduct,
  selectedFilters: SelectedFilters,
  filterDefinitions: FilterDefinition[],
): boolean => {
  return filterDefinitions.every((filterDef) => {
    const selectedValues = selectedFilters[filterDef.key] || [];

    if (selectedValues.length === 0) return true;

    const productValue = product[filterDef.productField];

    if (productValue === undefined || productValue === null) {
      return false;
    }

    if (Array.isArray(productValue)) {
      return selectedValues.some((value) => productValue.includes(value));
    }

    return selectedValues.includes(String(productValue));
  });
};
