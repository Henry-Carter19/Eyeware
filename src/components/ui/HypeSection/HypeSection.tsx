import React from "react";
import "./HypeSection.css";
import { HypeCard } from "../../../types/home.types";

interface Props {
  hypeData: HypeCard[];
}

const HypeSection: React.FC<Props> = ({ hypeData }) => {
    
  return (
    <section className="hype-section">
      <h2 className="hype-title">
        Join the <span>Hype</span>
      </h2>

      <div className="hype-grid">
        {hypeData.map((card) => (
          <div key={card.id} className="hype-card">
            <img
              src={card.backgroundImage}
              alt={card.username}
              className="hype-bg"
            />

            <div className="hype-overlay">
              <div className="hype-logo-wrapper">
                <img
                  src={card.brandLogo}
                  alt={card.username}
                  className="hype-logo"
                />
              </div>
              <span className="hype-username">
                {card.username}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HypeSection;