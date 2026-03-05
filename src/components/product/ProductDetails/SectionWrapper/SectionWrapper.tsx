import React from "react";
import "./SectionWrapper.css";

interface SectionWrapperProps {
  title?: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, children }) => {
  return (
    <div className="section-wrapper">
      {title && <h3 className="section-title">{title}</h3>}
      {children}
    </div>
  );
};

export default SectionWrapper;