import React, { useState } from "react";
import "./SelectionCard.css";

interface SelectionProps {
  data: {
    id?: string;
    title: string;
    type: "multi" | "single";
    options: {
      label: string;
      value: string;
    }[];
    applyButton?: boolean;
    clearAll?: boolean;
  };
}

const SelectionCard: React.FC<SelectionProps> = ({ data }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    if (data.type === "single") {
      setSelected([value]);
    } else {
      setSelected((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value],
      );
    }
  };

  const clearAllHandler = () => {
    setSelected([]);
  };

  const applyFilter = () => {
    console.log("Selected:", selected);
  };

  return (
    <div className="selection-card">
      <div className="selection-header">
        <h3>{data.title}</h3>

        {data.clearAll && (
          <button className="clear-btn" onClick={clearAllHandler}>
            Clear All
          </button>
        )}
      </div>

      <div className="selection-options">
        {data.options.map((option) => (
          <button
            key={option.value}
            className={`selection-chip ${
              selected.includes(option.value) ? "active" : ""
            }`}
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>

      {data.applyButton && (
        <div className="selection-footer">
          <button className="apply-btn" onClick={applyFilter}>
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectionCard;
