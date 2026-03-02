import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productData from "../data/prodcutsDetailData.json";
import "../styles/ProductDetailPage.css";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = productData.productsDetail.find((p) => p.id === Number(id));

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!product) return <div>Product Not Found</div>;

  const images = product.images ?? [];

  return (
    <div className="detail-page">
      {/* BREADCRUMB */}
      <div className="breadcrumb">
        Home &gt; Sunglasses &gt; Men &gt; {product.brand}
      </div>

      <div className="detail-container">
        {/* LEFT SECTION */}
        <div className="detail-left">
          <div className="image-card">
            <button className="try-btn">📷 TRY ON</button>

            <div className="icon-group">
              <span>♡</span>
              <span>↗</span>
            </div>

            <img
              src={images[currentIndex]}
              alt={product.title}
              className="main-image"
            />

            <div className="thumb-wrapper">
              <button
                className="thumb-arrow"
                onClick={() =>
                  setCurrentIndex(
                    currentIndex === 0 ? images.length - 1 : currentIndex - 1,
                  )
                }
              >
                ‹
              </button>

              <div className="thumbnail-row">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`thumb-box ${
                      index === currentIndex ? "active" : ""
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <img src={img} alt="" />
                  </div>
                ))}
              </div>

              <button
                className="thumb-arrow"
                onClick={() =>
                  setCurrentIndex(
                    currentIndex === images.length - 1 ? 0 : currentIndex + 1,
                  )
                }
              >
                ›
              </button>
            </div>
          </div>

          
        </div>

        {/* RIGHT SECTION */}
        <div className="detail-right">
          {/* PRODUCT INFO CARD */}
          <div className="info-card">
            <h4 className="brand">{product.brand}</h4>
            <h1 className="title">{product.title}</h1>

            <h2 className="price">MRP ₹{product.price}</h2>
            <p className="tax-text">Inclusive of all taxes</p>

            <div className="buyers">1,661 People already bought this</div>
          </div>

          {/* OFFER CARD */}
          <div className="offer-card-main">
            <h3>Offers & Coupons</h3>

            <div className="offer-inner">
              <strong>Flat 65% Off on Selected Sunglasses</strong>
              <p>Offer applicable on selected products only</p>

              <div className="offer-footer">
                <span className="coupon-code">FLAT65</span>
                <span className="copy-code">Copy Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
