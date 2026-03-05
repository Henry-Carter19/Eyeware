import React, { useState } from "react";
import "./ProductDescription.css";

interface Props {
  text: string;
}

const ProductDescription: React.FC<Props> = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 100;
  const isLongText = text.length > limit;

  const displayText = expanded || !isLongText ? text : text.substring(0, limit);

  return (
    <div className="description-wrapper">
      <p className="description-text">
        {displayText}
        {!expanded && isLongText && "... "}
        {isLongText && (
          <span className="toggle-btn" onClick={() => setExpanded(!expanded)}>
            {expanded ? "See less" : "See more"}
          </span>
        )}
      </p>
    </div>
  );
};

export default ProductDescription;
