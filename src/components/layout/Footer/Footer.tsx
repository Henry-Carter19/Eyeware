import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

interface FooterLink {
  label: string;
  path: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerData: FooterSection[] = [
  {
    title: "ACCOUNT",
    links: [
      { label: "Our Policies", path: "/policies" },
      { label: "My Account", path: "/account" },
      { label: "Create an Account", path: "/register" },
      { label: "Tata Neu Pass", path: "/tata-neu" },
      { label: "Titan Encircle", path: "/encircle" },
    ],
  },
  {
    title: "ABOUT TITAN EYE+",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Blog", path: "/blog" },
      { label: "Contact Us", path: "/contact" },
      { label: "Privacy Notice", path: "/privacy" },
      { label: "Terms & Conditions", path: "/terms" },
      { label: "Cyber Security Policy", path: "/cyber-security" },
    ],
  },
  {
    title: "USEFUL LINKS",
    links: [
      { label: "Store Locations", path: "/stores" },
      { label: "Bulk Enquiry", path: "/bulk-enquiry" },
      { label: "Hearing Aids", path: "/hearing-aids" },
      { label: "Glossary", path: "/glossary" },
      { label: "AI Glasses Manual", path: "/ai-manual" },
    ],
  },
  {
    title: "EYEGLASSES",
    links: [
      { label: "Men", path: "/eyeglasses/men" },
      { label: "Women", path: "/eyeglasses/women" },
      { label: "Kids", path: "/eyeglasses/kids" },
      { label: "Fastrack", path: "/eyeglasses/fastrack" },
      { label: "Titan", path: "/eyeglasses/titan" },
    ],
  },
];

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-grid">
        {footerData.map((section) => (
          <div key={section.title} className="footer-column">
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link) => (
                <li
                  key={link.label}
                  className="footer-link"
                  onClick={() => navigate(link.path)}
                >
                  <span className="hover-dot" />
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ===== Added Bottom Section ===== */}

      <div className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <h2 className="footer-logo">
            EYEWARE <span>EYE+</span>
          </h2>
          <div className="footer-contact">
            <span>help@eyewareplus.com</span>
            <span>1800-180-0123</span>
          </div>
          <p className="footer-copy">
            © 2026 Eyeware Company Limited. All Rights Reserved.
          </p>
        </div>

        <div className="footer-bottom-right">
          <div className="app-section">
            <p>Download the Eyeware Eye+ App</p>
            <div className="app-buttons">
              <button className="store-btn">Google Play</button>
              <button className="store-btn">App Store</button>
            </div>
          </div>

          <div className="social-section">
            <p>Follow us on:</p>
            <div className="social-icons">
              <div className="social-icon">IG</div>
              <div className="social-icon">FB</div>
              <div className="social-icon">X</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;