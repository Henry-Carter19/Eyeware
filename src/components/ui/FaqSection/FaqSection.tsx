import React, { useState } from "react";
import "./FaqSection.css";
import { FaqItem } from "../../../types/home.types";


interface Props {
  faqData: FaqItem[];
}

const FaqSection: React.FC<Props> = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const faqs = faqData;

  return (
    <section className="faq-section">
      <h2 className="faq-title">
        Everything you,<span>Need</span>
      </h2>

      <div className="faq-container">
        {faqs.map((item, index) => (
          <div
            key={item.id}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-header" onClick={() => toggle(index)}>
              <h4>{item.title}</h4>
              <div className="faq-icon" />
            </div>

            <div className="faq-content">
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;