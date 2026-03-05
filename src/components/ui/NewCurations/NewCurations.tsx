import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./NewCurations.css";
import { CurationSection } from "../../../types/home.types";

interface Props {
  sectionConfig: CurationSection;
}

const NewCurations: React.FC<Props> = ({ sectionConfig }) => {
  const navigate = useNavigate();

  return (
    <section
      className={`curation-section ${
        sectionConfig.background === "gold" ? "gold-bg" : ""
      }`}
    >
      <div className="curation-header">
        <h2 className="curation-title">
          {sectionConfig.title} <span>{sectionConfig.highlight}</span>
        </h2>

        {sectionConfig.viewAll && (
          <button
            className="view-all-btn"
            onClick={() => navigate(sectionConfig.viewAll!.route)}
          >
            {sectionConfig.viewAll.label} &#8250;
          </button>
        )}
      </div>

      <div className="curation-swiper-wrapper">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={2.1}
          spaceBetween={40}
          loop
          centeredSlides
          speed={1000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev"
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true
          }}
        >
          {sectionConfig.cards.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="curation-card">
                <img
                  src={item.image}
                  alt="img"
                  className="curation-image"
                />

                {sectionConfig.showArrowButton ? (
                  <button
                    className="arrow-btn"
                    onClick={() => navigate(item.route)}
                  >
                    &#8250;
                  </button>
                ) : (
                  <button
                    className="curation-btn"
                    onClick={() => navigate(item.route)}
                  >
                    {item.buttonText}
                  </button>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="edge-left" />
        <div className="edge-right" />
        <div className="custom-prev">&#10094;</div>
        <div className="custom-next">&#10095;</div>
        <div className="custom-pagination"></div>
      </div>
    </section>
  );
};

export default NewCurations;