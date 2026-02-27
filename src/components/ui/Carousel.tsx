import React, { useState } from "react";
import { Banner } from "../../types/banner.types";

interface CarouselProps {
  items: Banner[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      {items.map((item, index) => (
        <div
          key={item.id}
          style={{
            display: index === current ? "block" : "none",
            position: "relative"
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "10%",
              transform: "translateY(-50%)",
              color: "white"
            }}
          >
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        style={{ position: "absolute", left: 20, top: "50%" }}
      >
        Prev
      </button>

      <button
        onClick={nextSlide}
        style={{ position: "absolute", right: 20, top: "50%" }}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;