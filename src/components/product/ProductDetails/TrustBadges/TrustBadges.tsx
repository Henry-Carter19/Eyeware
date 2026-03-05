import React from "react";
import "./TrustBadges.css";

interface Badge {
  id: number;
  title: string;
  icon: string;
  bgColor: string;
}

interface Props {
  badges: Badge[];
}

const TrustBadges: React.FC<Props> = ({ badges }) => {
  return (
    <div className="trust-wrapper">
      {badges.map((badge) => (
        <div key={badge.id} className="trust-item">
          <div
            className="trust-icon"
            style={{ backgroundColor: badge.bgColor }}
          >
            <img src={badge.icon} alt={badge.title} />
          </div>
          <div className="trust-text">{badge.title}</div>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
