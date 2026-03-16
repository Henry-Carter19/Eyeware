import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Phone,
  MapPin,
  MessageCircle
} from "lucide-react";

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
    title: "CUSTOMER SERVICE",
    links: [
      { label: "Our Policies", path: "/policies" },
      { label: "Return & Exchange", path: "/returns" },
      { label: "Order Tracking", path: "/track-order" },
      { label: "FAQ", path: "/faq" },
      { label: "Contact Us", path: "/contact" }
    ]
  },
  {
    title: "ABOUT KUBADE OPTICARE",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Our Store", path: "/store" },
      { label: "Eye Care Tips", path: "/blog" },
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms & Conditions", path: "/terms" }
    ]
  },
  {
    title: "OUR PRODUCTS",
    links: [
      { label: "Eyeglasses", path: "/eyeglasses" },
      { label: "Sunglasses", path: "/sunglasses" },
      { label: "Contact Lenses", path: "/contact-lenses" },
      { label: "Computer Glasses", path: "/computer-glasses" },
      { label: "Accessories", path: "/accessories" }
    ]
  },
  {
    title: "STORE INFORMATION",
    links: [
      { label: "Store Location", path: "/location" },
      { label: "Book Eye Checkup", path: "/eye-checkup" },
      { label: "Customer Reviews", path: "/reviews" },
      { label: "Store Hours", path: "/hours" }
    ]
  }
];

const Footer: React.FC = () => {
  const navigate = useNavigate();
const message = encodeURIComponent(
`Hello Sir/Madam,

I would like to know more about your products and services at Kubade OptiCare. 
Please assist me with the details.

Thank you.`
);
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

      <div className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-bottom-left">

          {/* Logo */}
          <img
            src="/images/logo.png"
            alt="Kubade OptiCare"
            className="footer-logo-img"
          />

          {/* Contact */}
          <div className="footer-contact">

            <span className="footer-contact-item">
              <MapPin className="footer-icon" size={18} />
              Sudampuri Opp-Career Campus, Nandanwan Road, Bhande Plot Square, Nagpur - 440009
            </span>

            <span className="footer-contact-item">
              <MapPin className="footer-icon" size={18} />
              Swami Vivekananda Netralay, Beside Parth Medical Store, Shrikrishna Nagar, Nagpur - 440024
            </span>

            <span className="footer-contact-item">
              <MapPin className="footer-icon" size={18} />
              Matruseva Sangh Hospital, Kothi Road, Mahal, Nagpur - 440032
            </span>

            <span className="footer-contact-item">
              <Phone className="footer-icon" size={18} />
              +91 70666 02959
            </span>

          </div>

          <p className="footer-copy">
            © 2026 Kubade OptiCare. All Rights Reserved.
          </p>
        </div>

        <div className="footer-bottom-right">
          <div className="store-hours">
            <p><strong>Store Hours</strong></p>
            <p>Monday - Saturday: 9:30 AM – 9:30 PM</p>
            <p>Sunday: Closed</p>
          </div>

          <div className="social-section">
            <p>Follow us on:</p>

            <div className="social-icons">
              <a target="_blank" href="https://www.instagram.com/kubadeopticare1/" className="social-icon">
                <Instagram size={20} />
              </a>

              <a target="_blank" href="https://www.facebook.com/profile.php?id=61556689014525" className="social-icon">
                <Facebook size={20} />
              </a>

              <a  target="_blank"
                  href={`https://wa.me/917066602959?text=${message}`}
                  className="social-icon"
                  rel="noopener noreferrer" 
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;