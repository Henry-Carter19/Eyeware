import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  MapPin,
  Headphones,
  Menu,
  ChevronDown,
} from "lucide-react";
import "./Header.css";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* MOBILE HEADER */}
      <div className="mobile-header d-lg-none">
        <div className="mobile-header-inner">
          {/* MENU ICON */}
          <button
            className="menu-btn"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
          >
            <Menu />
          </button>

          {/* LOGO */}
          <div className="mobile-logo">
            <a href="/">
              {" "}
              <img className="navbar-logo" src="/images/logo.png" alt="logo" />
            </a>
          </div>

          {/* RIGHT ICONS */}
          <div className="mobile-icons">
            {/* <Search size={20} />
            <ShoppingCart size={20} /> */}
          </div>
        </div>
      </div>

      <div className="offcanvas offcanvas-start" id="mobileMenu">
        <div className="offcanvas-header">
          <h5>Menu</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">

          {/* Your existing accordion menu here */}

          {/* STORE BUTTON */}
          <div className="mobile-store-section">
            <a href="/stores" className="store-btn">
              Stores
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mobile-social-icons">
            <a href="https://instagram.com" target="_blank">
              <i className="bi bi-instagram"></i>
            </a>

            <a href="https://facebook.com" target="_blank">
              <i className="bi bi-facebook"></i>
            </a>

            <a href="https://wa.me/918381001406" target="_blank">
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>

          {/* PHONE NUMBER */}
            <div className="mobile-phone"> <a href="tel:+918381001406" className="mobile-phone">
              +91 83810 01406
            </a>
            </div>
       
          


        </div>
      </div>

      {/* TOP NAVBAR */}
      <div className="top-bar bg-dark text-white py-1">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center">
            {/* LEFT */}
            <div className="d-flex align-items-center gap-2">
              <Headphones size={14} />
              <span className="help-text">
                Need Help?{" "}
                <span className="text-info fw-bold">070666 02959</span>
              </span>
            </div>

            {/* SEARCH (Hidden on small screens) */}
            {/* <div className="search-box d-none d-md-flex align-items-center bg-white rounded px-2">
              <Search size={14} className="text-muted me-2" />
              <input
                type="text"
                className="form-control border-0 shadow-none"
                placeholder="Search for Eyeglasses, Sunglasses"
              />
            </div> */}

            {/* RIGHT MENU */}
            <div className="d-flex align-items-center gap-3">
              {/* Desktop Menu */}
              <div className="top-links d-none d-md-flex align-items-center gap-3">
                <div className="dropdown hover-dropdown">
                  <span className="d-flex align-items-center gap-1">
                    <Eye size={14} /> Eye Testing <ChevronDown />
                  </span>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Digital Eye Strain Test
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Online Eye Screening
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Instore Free Eye Test
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Book Appointment
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <span>Hearing Test</span>

                <span className="d-flex align-items-center gap-1">
                  <User size={14}/> Sign In
                </span>

                <span className="d-flex align-items-center gap-1">
                  <Truck size={14}/> Track Order
                </span> */}

                <span
                  className="d-flex align-items-center gap-1"
                  onClick={() => navigate("/stores")}
                  style={{ cursor: "pointer" }}
                >
                  <MapPin size={14} /> Find Store
                </span>
              </div>

              {/* MOBILE MENU */}
              <div className="dropdown d-md-none">
                <button
                  className="btn btn-sm text-white"
                  data-bs-toggle="dropdown"
                >
                  Menu
                </button>

                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item">Eye Testing</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Hearing Test</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Sign In</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Track Order</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Find Store</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom d-none d-lg-flex">
        <div className="container-fluid">

          {/* LOGO */}
          <a href="/">
            <img className="navbar-logo" src="/images/logo.png" alt="logo" />
          </a>
             <ul className="navbar-nav mx-auto gap-4">
                <li className="nav-item dropdown hover-dropdown">
                <span className="nav-link">COLLECTION ▾</span>

                <div className="dropdown-menu mega-menu mega-menu-full p-4">

                  <div className="row">

                    <div className="col-12 col-md-3 col-sm-6">
                      <h6>GENDER</h6>
                      <a href="#">All</a>
                      <a href="#">Men</a>
                      <a href="#">Women</a>
                      <a href="#">Kids</a>
                    </div>

                    <div className="col-12 col-md-3 col-sm-6">
                      <h6>COLLECTION</h6>
                      <a href="#">Smart Sunglasses</a>
                      <a href="#">Donald</a>
                      <a href="#">Glow Up</a>
                      <a href="#">Whiplash</a>
                      <a href="#">Vivid Geometry</a>
                    </div>
                     <div className="col-12 col-md-3"></div>
                    <div className="col-12 col-md-3">
                      <img
                        src="https://images.unsplash.com/photo-1511499767150-a48a237f0083"
                        className="img-fluid rounded"
                        alt="Sunglasses"
                      />
                    </div>

                  </div>


                </div>
              </li>
             </ul>

          {/* RIGHT SIDE SOCIAL + PHONE */}
          <div className="ms-auto d-flex align-items-center gap-4">

            {/* STORES BUTTON */}
            <a href="/stores" className="store-btn">
              Stores
            </a>
            {/* Social Icons */}
            <a href="https://instagram.com" target="_blank">
              <i className="bi bi-instagram fs-3"></i>
            </a>

            <a href="https://facebook.com" target="_blank">
              <i className="bi bi-facebook fs-3"></i>
            </a>

            <a href="https://wa.me/918381001406" target="_blank">
              <i className="bi bi-whatsapp fs-3 text-success"></i>
            </a>

            {/* Phone Number (Clickable) */}
            <a href="tel:+918381001406" className="phone-call">
              +91 83810 01406
            </a>

          </div>

        </div>
      </nav>
    </>
  );
};

export default Header;