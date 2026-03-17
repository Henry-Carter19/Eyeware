import React, { useState } from "react";
import "./TrendingCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, MoveUpRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { TrendingSection } from "../../../types/home.types";

interface Props {
  trendingSection: TrendingSection;
}

const TrendingCarousel: React.FC<Props> = ({ trendingSection }) => {
  const [activeFilter, setActiveFilter] = useState(
    trendingSection.filters[0].key,
  );
  const navigate = useNavigate();

  const cards = trendingSection.cards[activeFilter] || [];

  return (
    <section className="TrendingCarousel-section common-section-padding">
      <div className="TrendingCarousel-header">
        <div className="subtitle">{trendingSection.subtitle}</div>

        <h2 className="title">
          {trendingSection.title}
          <span>{trendingSection.highlight} </span>
          &#10084;
        </h2>

        <div className="filters">
          {trendingSection?.filters?.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? "active" : ""
                }`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label} <MoveUpRight size={16} />
            </button>
          ))}
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={4}
        spaceBetween={29}
        loop
        speed={900}
        autoplay={{ delay: 1500 }}
        navigation={{
          nextEl: ".trend-next",
          prevEl: ".trend-prev",
        }}
        pagination={{
          el: ".trend-pagination",
          clickable: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {cards.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="trend-card" onClick={() => navigate('/products')}>
              <img src={item.image} className="trend-img" />

              {item.rating && (
                <div className="trend-rating">
                  {item.rating}
                  <Star className="star" />
                  <span className="divider"></span>
                  {item.ratingCount}
                </div>
              )}

              <div className="trend-info">
                <div className="brand">{item.brand}</div>

                <div className="name">{item.name}</div>

                {item.size && <div className="size">Size: {item.size}</div>}

                <div className="price">₹{item.price}</div>

                <div className="tax">Inclusive of all taxes</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="trend-prev">
        <ChevronLeft />
      </div>

      <div className="trend-next">
        <ChevronRight />
      </div>

      <div className="trend-pagination"></div>
    </section>
  );
};

export default TrendingCarousel;
