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

  const message = encodeURIComponent(`Hello Sir/Madam,

I would like to know more about your products and services at Kubade OptiCare.
Please assist me with the details.

Thank you.`);

  return (
    <footer className="ko-footer">
      <div className="ko-footer-grid">
        {footerData.map((section) => (
          <div key={section.title} className="ko-footer-column">
            <h4>{section.title}</h4>

            <ul>
              {section.links.map((link) => (
                <li
                  key={link.label}
                  className="ko-footer-link"
                  onClick={() => navigate(link.path)}
                >
                  <span className="ko-footer-hover-dot" />
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="ko-footer-divider" />

      <div className="ko-footer-bottom">
        <div className="ko-footer-bottom-left">

          <img
            src="/images/logo.png"
            alt="Kubade OptiCare"
            className="ko-footer-logo-img"
          />

          <div className="ko-footer-contact">

            <span className="ko-footer-contact-item">
              <MapPin className="ko-footer-icon" size={18} />
              Sudampuri Opp-Career Campus, Nandanwan Road, Bhande Plot Square, Nagpur - 440009
            </span>

            <span className="ko-footer-contact-item">
              <MapPin className="ko-footer-icon" size={18} />
              Swami Vivekananda Netralay, Beside Parth Medical Store, Shrikrishna Nagar, Nagpur - 440024
            </span>

            <span className="ko-footer-contact-item">
              <MapPin className="ko-footer-icon" size={18} />
              Matruseva Sangh Hospital, Kothi Road, Mahal, Nagpur - 440032
            </span>

            <span className="ko-footer-contact-item">
              <MapPin className="ko-footer-icon" size={18} />
              Vayusena Nagar Dabha, Shop No.02 Arya Avani Complex, Airforce Civilian Society, Vayusena Nagar Dabha, Nagpur - 440023
            </span>

            <span className="ko-footer-contact-item">
              <Phone className="ko-footer-icon" size={18} />
              +91 70666 02959
            </span>

          </div>

          <p className="ko-footer-copy">
            © 2026 Kubade OptiCare. All Rights Reserved.
          </p>

        </div>

        <div className="ko-footer-bottom-right">

          <div className="ko-store-hours">
            <p><strong>Store Hours</strong></p>
            <p>Monday - Saturday: 9:30 AM – 9:30 PM</p>
            <p>Sunday: Closed</p>
          </div>

          <div className="ko-social-section">

            <p>Follow us on:</p>

            <div className="ko-social-icons">

              <a
                target="_blank"
                href="https://www.instagram.com/kubadeopticare1/"
                className="ko-social-icon"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>

              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61556689014525"
                className="ko-social-icon"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>

              <a
                target="_blank"
                href={`https://wa.me/917066602959?text=${message}`}
                className="ko-social-icon"
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