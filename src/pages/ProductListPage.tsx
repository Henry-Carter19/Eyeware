import React from "react";
import productsData from "../data/products.json";
import { Product } from "../types/product.types";
import ProductCard from "../components/product/ProductCard";

const ProductListPage = () => {
  const products: Product[] = productsData;

  return (
    <div style={{ padding: 20 }}>
      <h2>All Products</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;