import React from "react";
import "./BestsellersCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BestsellerSection } from "../../../types/home.types";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";

interface Props {
  bestsellersSection: BestsellerSection;
}

const BestsellersCarousel: React.FC<Props> = ({ bestsellersSection }) => {
  return (
    <section className="BestsellersCarousel-section common-section-padding">
      <h2 className="BestsellersCarousel-title">
        {bestsellersSection.title} <span>{bestsellersSection.highlight}</span>
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={4}
        spaceBetween={29}
        loop
        speed={900}
        autoplay={{ delay: 1500 }}
        navigation={{
          nextEl: ".best-next",
          prevEl: ".best-prev",
        }}
        pagination={{
          el: ".best-pagination",
          clickable: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {bestsellersSection?.cards?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="product-card">
              {item.badge && (
                <div
                  className={`badge ${item.badge === "New" ? "new" : "best"}`}
                >
                  {item.badge}
                </div>
              )}

              <div className="wishlist">
                <Heart size={20} />
              </div>

              <img src={item.image} alt="" className="product-img" />

              {item.rating && (
                <span className="rating">
                  <span className="rating-value">{item.rating}</span>
                  <Star className="star" />
                  <span className="divider"></span>
                  <span className="bestseller-rating-count">
                    {item.ratingCount}
                  </span>
                </span>
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

      <div className="best-prev">
        <ChevronLeft className="carousel-arrow-icon" />
      </div>

      <div className="best-next">
        <ChevronRight className="carousel-arrow-icon" />
      </div>

      <div className="best-pagination"></div>
    </section>
  );
};

export default BestsellersCarousel;
