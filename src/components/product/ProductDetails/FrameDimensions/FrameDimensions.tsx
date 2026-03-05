import React from "react";
import "./FrameDimensions.css";

interface Props {
  dimensions: {
    lensWidth: number;
    bridgeWidth: number;
    templeLength: number;
    lensHeight: number;
    unit: string;
    images: string[];
  };
}

const FrameDimensions: React.FC<Props> = ({ dimensions }) => {
  const data = [
    {
      label: "Lens Width",
      value: dimensions.lensWidth,
      icon: dimensions.images[0],
    },
    {
      label: "Bridge Width",
      value: dimensions.bridgeWidth,
      icon: dimensions.images[1],
    },
    {
      label: "Temple Length",
      value: dimensions.templeLength,
      icon: dimensions.images[2],
    },
    {
      label: "Lens Height",
      value: dimensions.lensHeight,
      icon: dimensions.images[3],
    },
  ];

  return (
    <div className="dimension-wrapper">
      {data.map((item, index) => (
        <div key={index} className="dimension-item">
          <img src={item.icon} alt={item.label} />
          <div className="dimension-value">
            {item.value} {dimensions.unit}
          </div>
          <div className="dimension-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default FrameDimensions;
