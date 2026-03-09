import React from "react";
import "./TestimonialsCarousel.css";

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

      {/* Elfsight Google Reviews */}
      <div
        className="elfsight-app-09598fd0-7e75-47a6-ba94-b986d9913cf6"
        data-elfsight-app-lazy
      ></div>

    </section>
  );
};

export default TestimonialsCarousel;