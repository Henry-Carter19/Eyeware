import React, { useEffect, useState } from "react";
import "./ProductCarousel.css";
import ProductCard from "../ProductCard/ProductCard";

export interface Product {
  id: number;
  layoutType?: "grid" | "detail";
  brand: string;
  title: string;
  price: number;
  size: string;
  rating?: number;
  ratingCount?: number;
  images?: string[];
  image?: string;
  isNew?: boolean;
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  return (
    <div className="carousel-container">
      <div className="carousel">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
