import React from "react";
import { HeroBanner } from "../../../types/home.types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./HeroCarousel.css";

interface Props {
  banners: HeroBanner[];
}

const HeroCarousel: React.FC<Props> = ({ banners }) => {
  return (
    <div className="hero-carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="hero-swiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="carousel-slide">
              <img src={banner.image} alt="hero-banner" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows */}
      <button className="arrow custom-prev">&#10094;</button>
      <button className="arrow custom-next">&#10095;</button>
    </div>
  );
};

export default HeroCarousel;