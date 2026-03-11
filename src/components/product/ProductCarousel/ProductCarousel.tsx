import React from "react";
import "./ProductCarousel.css";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

export type Product = {
  id: string;
  brand?: string;
  title: string;
  images: string[];
  layoutType: "grid" | "detail";

  price: number;
  priceRange?: string;

  rating?: number;
  ratingCount?: number;
  size?: string;
  taxIncluded?: boolean;
  peopleBought?: number;
  isNew?: boolean;
  gender?: string;
  shape?: string;
  color?: string;
  style?: string;
};

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
