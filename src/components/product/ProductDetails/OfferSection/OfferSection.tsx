import React from "react";
import "./OfferSection.css";

interface Offer {
  id: number;
  title: string;
  description: string;
  code: string;
}

interface OfferSectionProps {
  offers: Offer[];
}

const OfferSection: React.FC<OfferSectionProps> = ({ offers }) => {
  return (
    <div>
      {offers.map((offer) => (
        <div key={offer.id} className="offer-card">
          <div className="offer-left">
            <h4>{offer.title}</h4>
            <p>{offer.description}</p>
            <span className="code">{offer.code}</span>
          </div>

          <div className="offer-right">
            <button className="copyBtn">Copy Code</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfferSection;
