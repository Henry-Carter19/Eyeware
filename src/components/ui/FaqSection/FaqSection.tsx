import React, { useState } from "react";
import "./FaqSection.css";
import { FaqItem } from "../../../types/home.types";
import { ChevronDown } from "lucide-react";

interface Props {
  faqData: FaqItem[];
}

const FaqSection: React.FC<Props> = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">
        Everything you,<span>Need</span>
      </h2>

      <div className="faq-container">
        {faqData?.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={item.id}
              className={`faq-item ${isActive ? "active" : ""}`}
            >
              <div
                className="faq-header"
                onClick={() => toggle(index)}
                aria-expanded={isActive}
              >
                <h4>{item.title}</h4>

                <div className="faq-icon-box">
                  <ChevronDown size={16} />
                </div>
              </div>

              <div className="faq-content">
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;