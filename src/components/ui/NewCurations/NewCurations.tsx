import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./NewCurations.css";
import { CurationCard } from "../../../types/home.types";

interface Props {
  curations: CurationCard[];
  viewAll?: {
    label: string;
    route: string;
  };
}

const NewCurations: React.FC<Props> = ({ curations, viewAll }) => {
  const navigate = useNavigate();

  return (
    <section className="curation-section">

      {/* Title + Conditional View All */}
      <div className="curation-header">
        <h2 className="curation-title">
          New <span>Curations</span>
        </h2>

        {viewAll && (
          <button
            className="view-all-btn"
            onClick={() => navigate(viewAll.route)}
          >
            {viewAll.label} &#8250;
          </button>
        )}
      </div>

      <div className="curation-swiper-wrapper">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={2.1}
          spaceBetween={40}
          loop={true}
          centeredSlides={true}
          speed={1000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev"
          }}
        >
          {curations.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="curation-card">
                <img src={item.image} alt="img" className="curation-image" />
                <button
                  className="curation-btn"
                  onClick={() => navigate(item.route)}
                >
                  {item.buttonText}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="edge-left" />
        <div className="edge-right" />

        <div className="custom-prev">&#10094;</div>
        <div className="custom-next">&#10095;</div>

        {/* Pagination Dots */}
        <div className="custom-pagination"></div>
      </div>
    </section>
  );
};

export default NewCurations;