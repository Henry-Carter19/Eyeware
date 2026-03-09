import React, { useEffect, useState } from "react";
import "./GoToTop.css";
import { ChevronUp } from "lucide-react";

const GoToTop: React.FC = () => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const toggleVisibility = () => {

      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }

    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };

  if (!visible) return null;

  return (
    <button className="goTop-btn" onClick={scrollToTop}>
      <ChevronUp className="goTop-icon" />
    </button>
  );
};

export default GoToTop;