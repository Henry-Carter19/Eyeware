import React from "react";
import "./ButtonComponent.css";

interface ButtonProps {
  label: string;
  variant?: "whatsapp" | "buy";
  icon?: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  label,
  variant = "buy",
  icon,
  fullWidth,
  onClick,
}) => {
  return (
    <button
      className={`custom-btn ${variant} ${fullWidth ? "full" : ""}`}
      onClick={onClick}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {label}
    </button>
  );
};

export default ButtonComponent;