import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BlogCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlogSection } from "../../../types/home.types";

import "swiper/css";
import "swiper/css/navigation";

interface Props {
  blogSection: BlogSection;
}

const BlogCarousel: React.FC<Props> = ({ blogSection }) => {
  const [activeFilter, setActiveFilter] = useState(blogSection.filters[0].key);
  const navigate = useNavigate();

  const cards = blogSection.cards[activeFilter] || [];

  return (
    <section className="blog-section">
      <h2 className="blog-title">
        {blogSection.title} <span>{blogSection.highlight}</span>
      </h2>

      {/* Filters */}

      <div className="blog-filters">
        {blogSection.filters.map((filter) => (
          <button
            key={filter.key}
            className={`blog-filter-btn ${
              activeFilter === filter.key ? "active" : ""
            }`}
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Slider */}

      <div className="blog-slider">
        <Swiper
          modules={[Navigation]}
          slidesPerView={6}
          spaceBetween={18}
          centeredSlides={false}
          navigation={{
            nextEl: ".blog-next",
            prevEl: ".blog-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              centeredSlides: false,
            },
            480: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
            1440: {
              slidesPerView: 6,
            },
          }}
        >
          {cards.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="blog-card" onClick={() => navigate('/products')}>
                <img src={blog.image} alt={blog.title} />

                <div className="blog-overlay">
                  <p className="blog-category">{blog.category}</p>

                  <h3>{blog.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows */}

        <div className="blog-prev">
          <ChevronLeft />
        </div>

        <div className="blog-next">
          <ChevronRight />
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
