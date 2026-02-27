import React from "react";
import { Product } from "../../types/product.types";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: 16 }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", height: 200, objectFit: "cover" }}
      />
      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>
    </div>
  );
};

export default ProductCard;