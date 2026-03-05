import React from "react";
import "./FindStoreSection.css";

const FindStoreSection: React.FC = () => {
  return (
    <section className="store-section">

      <div className="store-top-overlay" />

      <div className="store-content">

        <div className="store-count">
          <span className="store-icon">🏬</span>
          850+ <span>Stores across India,</span>
        </div>

        <h2 className="store-title">
          Find a <span className="highlight">Titan Eye+</span>
          <em> Near You</em>
        </h2>

        <div className="store-features">
          <div className="feature">
            <span className="feature-icon">👁</span>
            Free Eye Test
          </div>

          <div className="feature">
            <span className="feature-icon">👨‍⚕️</span>
            Expert Consultations
          </div>

          <div className="feature">
            <span className="feature-icon">👓</span>
            Over 5000+ Styles
          </div>
        </div>

        <div className="store-rating">
          <div className="laurel left">❮</div>
          <div className="rating-content">
            <div className="rating-score">4.9 <span>/5</span></div>
            <div className="stars">★★★★★</div>
            <div className="rating-text">8Lakh + Ratings</div>
          </div>
          <div className="laurel right">❯</div>
        </div>

      </div>

      <button className="find-store-btn">Explore Store</button>

    </section>
  );
};

export default FindStoreSection;