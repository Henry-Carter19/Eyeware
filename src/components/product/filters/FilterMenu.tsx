import React, { useState } from "react";
import "./FilterMenu.css";

import filtersData from "../../../data/filters.json";
import {
  SelectedFilters,
  FiltersJson,
  FilterDefinition,
  FilterOptionColor,
  FilterOptionImage,
} from "../../../utils/productFilters";

type FilterMenuProps = {
  selectedFilters: SelectedFilters;
  onToggleFilter: (filterKey: string, value: string) => void;
  onReset: () => void;
};

const typedFiltersData = filtersData as FiltersJson;

const FilterMenu = ({
  selectedFilters,
  onToggleFilter,
  onReset,
}: FilterMenuProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const renderCheckboxOptions = (filter: FilterDefinition) => {
    const options = filter.options as string[];

    return options.map((option, i) => (
      <label key={i} className="checkbox-option">
        <span>{option}</span>
        <input
          type="checkbox"
          checked={selectedFilters[filter.key]?.includes(option) || false}
          onChange={() => onToggleFilter(filter.key, option)}
        />
      </label>
    ));
  };

  const renderColorOptions = (filter: FilterDefinition) => {
    const options = filter.options as FilterOptionColor[];

    return options.map((option, i) => (
      <label key={i} className="color-option">
        <div className="color-option-left">
          <div
            className="color-circle"
            style={{ backgroundColor: option.color }}
          />
          <span>{option.label}</span>
        </div>

        <input
          type="checkbox"
          checked={selectedFilters[filter.key]?.includes(option.label) || false}
          onChange={() => onToggleFilter(filter.key, option.label)}
        />
      </label>
    ));
  };

  const renderImageOptions = (filter: FilterDefinition) => {
    const options = filter.options as FilterOptionImage[];

    return (
      <div className="shape-grid">
        {options.map((option, i) => (
          <div
            key={i}
            className={`shape-card ${
              selectedFilters[filter.key]?.includes(option.label)
                ? "selected"
                : ""
            }`}
            onClick={() => onToggleFilter(filter.key, option.label)}
          >
            <div className="shape-icon">{option.icon}</div>
            <span>{option.label}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="filter-menu">
      <div className="filter-header">
        <h3>Filters</h3>
        <span className="reset" onClick={onReset}>
          Reset
        </span>
      </div>

      {Object.keys(selectedFilters).length > 0 && (
        <div className="applied-filters">
          <p>Applied Filters :</p>

          <div className="applied-tags">
            {typedFiltersData.filters.map((filter) =>
              (selectedFilters[filter.key] || []).map((value, index) => (
                <div
                  key={`${filter.key}-${value}-${index}`}
                  className="filter-tag"
                >
                  {value}
                  <span
                    className="remove-tag"
                    onClick={() => onToggleFilter(filter.key, value)}
                  >
                    ×
                  </span>
                </div>
              )),
            )}
          </div>
        </div>
      )}

      {typedFiltersData.filters.map((filter, index) => (
        <div key={filter.key} className="filter-section">
          <div className="filter-title" onClick={() => toggleSection(index)}>
            <span>
              {filter.title}
              {selectedFilters[filter.key]?.length > 0 && (
                <span className="filter-count">
                  {selectedFilters[filter.key].length}
                </span>
              )}
            </span>

            <span>{openIndex === index ? "▲" : "▼"}</span>
          </div>

          {openIndex === index && (
            <div className="filter-options">
              {filter.type === "checkbox" && renderCheckboxOptions(filter)}
              {filter.type === "color" && renderColorOptions(filter)}
              {filter.type === "image" && renderImageOptions(filter)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterMenu;
