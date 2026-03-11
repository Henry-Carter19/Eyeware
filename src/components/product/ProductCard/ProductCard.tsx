import React, { useState, useEffect } from "react";
import "./ProductCard.css";
import { Product } from "../ProductCarousel/ProductCarousel";

interface Props {
  product: Product;
  onClick?: () => void;
}

const ProductCard: React.FC<Props> = ({ product, onClick }) => {
  const images = product.images || [];
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!hover || images.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1200);

    return () => clearInterval(interval);
  }, [hover, images.length]);

  return (
    <div
      className="product-card"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {product.isNew && <div className="badge">New</div>}

      <div className="wishlist">♡</div>

      <div className="product-image">
        <img src={images[index]} alt={product.title} />
      </div>

      <div className="slider-dots">
        {images.map((_, i) => (
          <span key={i} className={i === index ? "active" : ""} />
        ))}
      </div>

      {/* ⭐ Rating */}
      {product.rating && (
        <div className="rating">
          {product.rating} ⭐ {product.ratingCount}
        </div>
      )}

      <div className="product-info">
        <div className="brand">{product.brand}</div>
        <div className="title">{product.title}</div>

        {/* 📏 Size */}
        {product.size && <div className="size">Size: {product.size}</div>}

        <div className="price">₹{product.price}</div>
        <div className="tax">Inclusive of all taxes</div>
      </div>
    </div>
  );
};

export default ProductCard;
