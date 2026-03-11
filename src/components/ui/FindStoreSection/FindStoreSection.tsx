import React from "react";
import { useNavigate } from "react-router-dom";
import "./FindStoreSection.css";
import { Store, Eye, UserRound, Glasses } from "lucide-react";
import { url } from "inspector";

const FindStoreSection: React.FC = () => {
  const navigate = useNavigate();

  const handleExploreStore = () => {
    navigate("/stores");
  };

  return (
    <section
      className="store-section"
      style={{
        backgroundImage: "url('/images/StoreSection/storesectionbackground.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >

      <div className="store-top-overlay" />

      <div className="store-content">

        {/* <div className="store-count">
          <Store className="store-icon" size={18} />
          <span><b>3 Stores In India,</b></span>
        </div> */}

        <h2 className="store-title">
          Find a <span className="highlight">Kubade Opticare</span>
          <em> Near You</em>
        </h2>

        <div className="store-features">
          <div className="feature">
            <Eye className="feature-icon" size={18} />
            Free Eye Test
          </div>

          <div className="feature">
            <UserRound className="feature-icon" size={18} />
            Expert Consultations
          </div>

          <div className="feature">
            <Glasses className="feature-icon" size={18} />
            Over 5000+ Styles
          </div>
        </div>

        <div className="store-rating">

          <img
            src="https://api.titaneyeplus.com/media/wysiwyg/home-page/store/left-leaf.png"
            alt="laurel left"
            className="laurel left"
          />

          <div className="rating-content">
            <div className="rating-score">
              4.9 <span>/5</span>
            </div>

            <div className="stars">★★★★★</div>

            <div className="rating-text">
              10k + Ratings
            </div>
          </div>

          <img
            src="https://api.titaneyeplus.com/media/wysiwyg/home-page/store/right-leaf.png"
            alt="laurel right"
            className="laurel right"
          />

        </div>

      </div>

      <button className="find-store-btn" onClick={handleExploreStore}>
        Explore Store
      </button>

    </section>
  );
};

export default FindStoreSection;