import React, { useState } from "react";
import "./ProductInformation.css";

interface Props {
  info: Record<string, string>;
}

const ProductInformation: React.FC<Props> = ({ info }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="product-info-wrapper">
      {/* Header Row */}
      <div
        className="product-info-header"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="title">Product Information</span>

        {/* Visible Arrow */}
        <span className={`arrow ${expanded ? "rotate" : ""}`}>▾</span>
      </div>

      {/* Toggle Content */}
      {expanded && (
        <div className="info-table">
          {Object.entries(info).map(([key, value]) => (
            <div key={key} className="info-row">
              <span className="label">{key}</span>
              <span className="value">{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductInformation;
