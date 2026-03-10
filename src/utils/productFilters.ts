export type SelectedFilters = Record<string, string[]>;

export type FilterOptionColor = {
  label: string;
  color: string;
};

export type FilterOptionImage = {
  label: string;
  icon: string;
};

export type FilterDefinition = {
  title: string;
  key: string;
  type: "checkbox" | "color" | "image";
  productField: string;
  options: string[] | FilterOptionColor[] | FilterOptionImage[];
};

export type FiltersJson = {
  filters: FilterDefinition[];
};
