import React from "react";
import "./ProductHeader.css";

interface ProductHeaderProps {
  brand: string;
  title: string;
  price: number;
  peopleBought: number;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({
  brand,
  title,
  price,
  peopleBought,
}) => {
  return (
    <div className="product-header">
      <p className="brand">{brand}</p>
      <h2 className="title">{title}</h2>
      <h3 className="price">MRP ₹{price}</h3>
      <p className="tax">Inclusive of all taxes</p>
      <div className="bought">{peopleBought} People already bought this</div>
    </div>
  );
};

export default ProductHeader;
