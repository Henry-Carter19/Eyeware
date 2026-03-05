import React, { useState } from "react";
import "./ProductCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Card {
  id: number;
  image: string;
  brand: string;
  name: string;
  size?: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  badge?: "New" | "Bestseller";
  rating?: number | null;
  ratingCount?: number;
}

interface Filter {
  label: string;
  key: string;
}

interface Props {
  title: string;
  highlight: string;
  subtitle?: string;
  cards?: Card[];
  filters?: Filter[];
  filteredCards?: Record<string, Card[]>;
}

const ProductCarousel: React.FC<Props> = ({
  title,
  highlight,
  subtitle,
  cards,
  filters,
  filteredCards
}) => {

  const [activeFilter, setActiveFilter] = useState(
    filters ? filters[0].key : ""
  );

  const data = filters
    ? filteredCards?.[activeFilter] || []
    : cards || [];

  return (
    <section className="ProductCarousel-section">

      <div className="ProductCarousel-header">

        {subtitle && <div className="subtitle">{subtitle}</div>}

        <h2 className="title">
          {title} <span>{highlight}</span>
        </h2>

        {filters && (
          <div className="filters">
            {filters.map((f) => (
              <button
                key={f.key}
                className={`filter-btn ${
                  activeFilter === f.key ? "active" : ""
                }`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label} ↗
              </button>
            ))}
          </div>
        )}

      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={4}
        spaceBetween={28}
        loop
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        navigation={{
          nextEl: ".carousel-next",
          prevEl: ".carousel-prev"
        }}
        pagination={{
          el: ".carousel-pagination",
          clickable: true
        }}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }
        }}
      >

        {data.map((item) => (
          <SwiperSlide key={item.id}>

            <div className="product-card">

              {item.badge && (
                <div className={`badge ${item.badge === "New" ? "new" : "best"}`}>
                  {item.badge}
                </div>
              )}

              <img src={item.image} className="product-img" />

              {item.rating && (
                <div className="rating">
                  {item.rating}
                  <Star className="star" />
                  <span className="divider"></span>
                  {item.ratingCount}
                </div>
              )}

              <div className="product-info">

                <div className="brand">{item.brand}</div>

                <div className="name">{item.name}</div>

                {item.size && <div className="size">Size: {item.size}</div>}

                <div className="price">₹{item.price}</div>

                <div className="tax">Inclusive of all taxes</div>

                {item.oldPrice && (
                  <div className="discount">
                    <span className="old">₹{item.oldPrice}</span>
                    <span className="off">{item.discount}</span>
                  </div>
                )}

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

      <div className="carousel-prev">
        <ChevronLeft />
      </div>

      <div className="carousel-next">
        <ChevronRight />
      </div>

      <div className="carousel-pagination"></div>

    </section>
  );
};

export default ProductCarousel;