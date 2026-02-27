import React from "react";
import { Offer } from "../../types/home.types";

interface Props {
  offers: Offer[];
}

const OfferBannerSection: React.FC<Props> = ({ offers }) => {
  return (
    <section style={{ background: "#f5f5f5", padding: 40 }}>
      <h2>Why Choose Us</h2>

      <div style={{ display: "flex", gap: 30, marginTop: 20 }}>
        {offers.map((offer) => (
          <div key={offer.id}>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferBannerSection;