import React, { useState } from "react";
import { Brand } from "../../../types/home.types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./BrandsCarousel.css";

interface Props {
  brands: Brand[];
}

const BrandsCarousel: React.FC<Props> = ({ brands }) => {
  const [activeTab, setActiveTab] =
    useState<"All" | "Premium" | "Essentials">("All");

  const tabs = ["All", "Premium", "Essentials"] as const;

  const filtered =
    activeTab === "All"
      ? brands
      : brands.filter((b) => b.category === activeTab);

  return (
    <section className="brands-section">
      <h2 className="brands-title">
        Shop by <span className="italic">Brands</span>
      </h2>

      <p className="sub-text">
        Explore 25+ <span className="italic">Brands</span>
      </p>

      {/* Tabs */}
      <div className="tabs-wrapper">
        <div className="tabs">
          <div
            className="active-indicator"
            style={{
              transform: `translateX(${tabs.indexOf(activeTab) * 100}%)`,
            }}
          />
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Swiper */}
      <div className="swiper-wrapper-custom">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={4}
          spaceBetween={40}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: ".brand-next",
            prevEl: ".brand-prev",
          }}
          pagination={{
            el: ".brand-pagination",
            type: "fraction",
          }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {filtered.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className="brand-frame">
                <div className="brand-card">
                  <img
                    src={brand.modelImage}
                    alt={brand.name}
                    className="brand-bg"
                  />

                  <div className="gradient-overlay" />

                  <div className="brand-content">
                    <img
                      src={brand.brandLogo}
                      alt={brand.name}
                      className="brand-logo"
                    />
                    <p>{brand.tagline}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="brand-arrow brand-prev">
          &#10094;
        </button>
        <button className="brand-arrow brand-next">
          &#10095;
        </button>

        <div className="brand-pagination" />
      </div>
    </section>
  );
};

export default BrandsCarousel;