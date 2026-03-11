import React from "react";
import "./ProductCarousel.css";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

export interface Product {
  id: string;
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
  const navigate = useNavigate();

  const handleClick = (productId: string) => {
    navigate(`/products/details/${productId}`);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleClick(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
