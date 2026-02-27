import React, { useEffect, useState } from "react";
import "./ProductCarousel.css";
import productData from "../../../data/productsData.json";

const ProductCarousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel">
        {productData.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }: any) => {
  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev: number) =>
        prev === images.length - 1 ? 0 : prev + 1,
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="product-card">
      {/* Image Section */}
      <div className="image-wrapper">
        {product.isNew && <span className="new-badge">+ New</span>}
        <span className="wishlist">♡</span>

        <img src={images[currentIndex]} alt={product.title} />

        {/* Image Indicator */}
        {images.length > 1 && (
          <div className="image-indicator">
            {images.map((_: any, index: number) => (
              <div
                key={index}
                className={`indicator-bar ${
                  currentIndex === index ? "active" : ""
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Rating + Try On */}
      <div className="rating-section">
        {product.rating && (
          <div className="rating-badge">
            {product.rating} ⭐
            {product.ratingCount && (
              <span className="rating-count">{product.ratingCount}</span>
            )}
          </div>
        )}

        <div className="try-on">
          👓 <span>Try on</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <p className="brand">{product.brand}</p>
        <p className="title">{product.title}</p>
        <p className="size">Size: {product.size}</p>
        <p className="price">₹{product.price}</p>
        <p className="tax">Inclusive of all taxes</p>
      </div>
    </div>
  );
};

export default ProductCarousel;
