import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FilterDefinition, SelectedFilters } from "../utils/productFilters";
import {
  buildSearchParamsFromFilters,
  clearAllFilters,
  getValidFilterKeys,
  parseFiltersFromSearch,
  productMatchesFilters,
  toggleFilterValue,
} from "../utils/productFilterHelpers";

type UseProductFiltersArgs<TProduct extends Record<string, any>> = {
  products: TProduct[];
  filterDefinitions: FilterDefinition[];
};

export const useProductFilters = <TProduct extends Record<string, any>>({
  products,
  filterDefinitions,
}: UseProductFiltersArgs<TProduct>) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const validKeys = useMemo(
    () => getValidFilterKeys(filterDefinitions),
    [filterDefinitions],
  );

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(() =>
    parseFiltersFromSearch(searchParams, validKeys),
  );

  useEffect(() => {
    setSelectedFilters(parseFiltersFromSearch(searchParams, validKeys));
  }, [searchParams, validKeys]);

  const updateFilters = (nextFilters: SelectedFilters) => {
    setSelectedFilters(nextFilters);
    setSearchParams(buildSearchParamsFromFilters(nextFilters));
  };

  const toggleValue = (filterKey: string, value: string) => {
    const next = toggleFilterValue(selectedFilters, filterKey, value);
    updateFilters(next);
  };

  const resetFilters = () => {
    const empty = clearAllFilters();
    setSelectedFilters(empty);
    setSearchParams(new URLSearchParams());
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      productMatchesFilters(product, selectedFilters, filterDefinitions),
    );
  }, [products, selectedFilters, filterDefinitions]);

  return {
    selectedFilters,
    filteredProducts,
    updateFilters,
    toggleValue,
    resetFilters,
  };
};
