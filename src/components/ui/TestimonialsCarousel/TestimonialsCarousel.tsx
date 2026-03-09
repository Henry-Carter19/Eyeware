import React from "react";
import "./TestimonialsCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { TestimonialsSection } from "../../../types/home.types";

interface Props {
  testimonialsSection: TestimonialsSection;
}

const TestimonialsCarousel: React.FC<Props> = ({ testimonialsSection }) => {
  return (
    <section className="TestimonialsCarousel-section">
      <h2 className="TestimonialsCarousel-title">
        {testimonialsSection.title} <span>{testimonialsSection.highlight}</span>
      </h2>

      <div className="testimonials-wrapper">
        {/* Prev Arrow */}
        <div className="test-prev">
          <ChevronLeft />
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={false}
          loop={true}
          navigation={{
            nextEl: ".test-next",
            prevEl: ".test-prev",
          }}
          pagination={{
            el: ".test-pagination",
            clickable: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1200: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {testimonialsSection.cards.map((item) => (
            <SwiperSlide key={item.id} className="testimonial-slide">
              <div className="testimonial-card">
                <div className="testimonial-inner">
                  {/* Header: Avatar + Stars */}
                  <div className="testimonial-header">
                    <div className="avatar">
                      <img src="/images/men.svg" alt="user" />
                    </div>
                    <div className="stars">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="star" />
                      ))}
                    </div>
                  </div>

                  {/* Review */}
                  <p className="review">{item.review}</p>

                  {/* Name + Date */}
                  <div className="user-info">
                    <div className="name">{item.name}</div>
                    <div className="date">{item.date}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next Arrow */}
        <div className="test-next">
          <ChevronRight />
        </div>
      </div>

      {/* Pagination */}
      <div className="test-pagination"></div>
    </section>
  );
};

export default TestimonialsCarousel;
