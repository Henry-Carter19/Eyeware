import React from "react";
import "./HypeSection.css";
import { HypeCard } from "../../../types/home.types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface Props {
  hypeData: HypeCard[];
}

const HypeSection: React.FC<Props> = ({ hypeData }) => {
  return (
    <section className="hype-section common-section-padding">
      <h2 className="hype-title">
        Join the <span>Hype</span>
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={25}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={800}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          480: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {hypeData.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="hype-card">
              {/* ✅ Inner wrapper handles border-radius + overflow clipping */}
              <div className="hype-card-inner">
                <img
                  src={card.backgroundImage}
                  alt={card.username}
                  className="hype-bg"
                />
                <div className="hype-overlay">
                  <div className="hype-logo-wrapper">
                    <img
                      src={card.brandLogo}
                      alt={card.username}
                      className="hype-logo"
                    />
                  </div>
                  <span className="hype-username">{card.username}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HypeSection;