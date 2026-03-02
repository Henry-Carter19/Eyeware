import React, { useEffect, useState } from "react";
import { Product } from "../ProductCarousel/ProductCarousel";
import "./ProductCard.css";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const images =
    product.images && product.images.length > 0
      ? product.images
      : product.image
        ? [product.image]
        : [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  /* ============================= */
  /* DETAIL LAYOUT */
  /* ============================= */

  if (product.layoutType === "detail") {
    return (
      <div className="detail-card">
        <div className="detail-image-container">
          <button className="try-btn">📷 TRY ON</button>

          <div className="icon-group">
            <span className="icon">♡</span>
            <span className="icon">↗</span>
          </div>

          <img
            src={images[currentIndex]}
            alt={product.title}
            className="detail-main-image"
          />

          <button className="arrow left" onClick={prevImage}>
            ‹
          </button>
          <button className="arrow right" onClick={nextImage}>
            ›
          </button>
        </div>

        <div className="thumbnail-row">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`thumbnail ${
                index === currentIndex ? "active-thumb" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    );
  }

  /* ============================= */
  /* GRID LAYOUT */
  /* ============================= */

  return (
    <div className="product-card">
      <div className="image-wrapper">
        <span className="wishlist">♡</span>
        <img src={images[currentIndex]} alt={product.title} />
      </div>

      <div className="product-info">
        <p className="brand">{product.brand}</p>
        <p className="title">{product.title}</p>
        <p className="price">₹{product.price}</p>
        <p className="tax">Inclusive of all taxes</p>
      </div>
    </div>
  );
};

export default ProductCard;
