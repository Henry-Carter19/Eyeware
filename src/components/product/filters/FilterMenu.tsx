import React, { useEffect, useState } from "react";
import "./FilterMenu.css";

type ColorOption = { label: string; color: string };
type ImageOption = { label: string; icon: string };

type FilterItem =
  | { title: string; type: "checkbox"; options: string[] }
  | { title: string; type: "color"; options: ColorOption[] }
  | { title: string; type: "image"; options: ImageOption[] };

type FiltersData = { filters: FilterItem[] };

type SelectedFilters = Record<string, string[]>;

const FilterMenu = () => {
  const [filtersData, setFiltersData] = useState<FiltersData>({ filters: [] });
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});

  useEffect(() => {
    const base = process.env.PUBLIC_URL || "";

    fetch(`${base}/data/filters.json`)
      .then((res) => res.json())
      .then((json) => setFiltersData(json))
      .catch((err) => console.error("Failed to load filters:", err));
  }, []);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Handle checkbox / color selection
  const handleCheckboxChange = (title: string, value: string) => {
    setSelectedFilters((prev) => {
      const existing = prev[title] || [];

      if (existing.includes(value)) {
        return {
          ...prev,
          [title]: existing.filter((item) => item !== value),
        };
      } else {
        return {
          ...prev,
          [title]: [...existing, value],
        };
      }
    });
  };

  // Reset all filters
  const handleReset = () => {
    setSelectedFilters({});
  };

  return (
    <div className="filter-menu">
      <div className="filter-header">
        <h3>Filters</h3>
        <span className="reset" onClick={handleReset}>
          Reset
        </span>
      </div>

      {/* Applied Filters */}
      {Object.keys(selectedFilters).length > 0 && (
        <div className="applied-filters">
          <p>Applied Filters :</p>
          <div className="applied-tags">
            {Object.entries(selectedFilters).map(([title, values]) =>
              values.map((value, index) => (
                <div key={index} className="filter-tag">
                  {value}
                  <span
                    className="remove-tag"
                    onClick={() => handleCheckboxChange(title, value)}
                  >
                    ×
                  </span>
                </div>
              )),
            )}
          </div>
        </div>
      )}

      {filtersData.filters.map((filter, index) => (
        <div key={index} className="filter-section">
          <div className="filter-title" onClick={() => toggleSection(index)}>
            <span>
              {filter.title}
              {selectedFilters[filter.title]?.length > 0 && (
                <span className="filter-count">
                  {selectedFilters[filter.title].length}
                </span>
              )}
            </span>
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </div>

          {openIndex === index && (
            <div className="filter-options">
              {/* Checkbox */}
              {filter.type === "checkbox" &&
                filter.options.map((option, i) => (
                  <label key={i} className="checkbox-option">
                    <span>{option}</span>
                    <input
                      type="checkbox"
                      checked={
                        selectedFilters[filter.title]?.includes(option) || false
                      }
                      onChange={() =>
                        handleCheckboxChange(filter.title, option)
                      }
                    />
                  </label>
                ))}

              {/* Color */}
              {filter.type === "color" &&
                filter.options.map((option, i) => (
                  <label key={i} className="color-option">
                    <div className="color-option-left">
                      <div
                        className="color-circle"
                        style={{ backgroundColor: option.color }}
                      ></div>
                      <span>{option.label}</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={
                        selectedFilters[filter.title]?.includes(option.label) ||
                        false
                      }
                      onChange={() =>
                        handleCheckboxChange(filter.title, option.label)
                      }
                    />
                  </label>
                ))}

              {/* Image / Shape */}
              {filter.type === "image" && (
                <div className="shape-grid">
                  {filter.options.map((option, i) => (
                    <div
                      key={i}
                      className={`shape-card ${
                        selectedFilters[filter.title]?.includes(option.label)
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        handleCheckboxChange(filter.title, option.label)
                      }
                    >
                      <div className="shape-icon">{option.icon}</div>
                      <span>{option.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterMenu;
