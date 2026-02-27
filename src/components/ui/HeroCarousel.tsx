import React, { useState } from "react";
import { HeroBanner } from "../../types/home.types";

interface Props {
  banners: HeroBanner[];
}

const HeroCarousel: React.FC<Props> = ({ banners }) => {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % banners.length);

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );

  return (
    <div style={{ position: "relative" }}>
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          style={{
            display: index === current ? "block" : "none",
            position: "relative"
          }}
        >
          <img
            src={banner.image}
            alt={banner.title}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover"
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "10%",
              color: "white"
            }}
          >
            <h2>{banner.title}</h2>
            <p>{banner.subtitle}</p>
          </div>
        </div>
      ))}

      <button onClick={prev} style={{ position: "absolute", left: 20, top: "50%" }}>
        Prev
      </button>

      <button onClick={next} style={{ position: "absolute", right: 20, top: "50%" }}>
        Next
      </button>
    </div>
  );
};

export default HeroCarousel;