import React, { useState } from "react";
import "./DeliverySection.css";

const DeliverySection = () => {
  const [pin, setPin] = useState("");

  return (
    <div className="delivery-box">
      <input
        type="text"
        placeholder="Enter Pin Code"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      <button className="check-btn">Check</button>{" "}
    </div>
  );
};

export default DeliverySection;
