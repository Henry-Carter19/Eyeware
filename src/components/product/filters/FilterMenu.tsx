import React, { useState } from "react";
import "./FilterMenu.css";
import filtersData from "../../../data/filters.json";

const FilterMenu = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedFilters, setSelectedFilters] = useState<any>({});

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Handle checkbox / color selection
  const handleCheckboxChange = (title: string, value: string) => {
    setSelectedFilters((prev: any) => {
      const existing = prev[title] || [];

      if (existing.includes(value)) {
        return {
          ...prev,
          [title]: existing.filter((item: string) => item !== value),
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
            {Object.entries(selectedFilters).map(([title, values]: any) =>
              values.map((value: string, index: number) => (
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
                filter.options.map((option: any, i: number) => (
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
                filter.options.map((option: any, i: number) => (
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
                  {filter.options.map((option: any, i: number) => (
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
