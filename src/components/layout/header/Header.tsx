import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import {
  Search,
  Eye,
  User,
  Truck,
  MapPin,
  ShoppingCart,
  Headphones
} from "lucide-react";
import "./Header.css";


const Header: React.FC = () => {
  return (
    <>
     {/* TOP NAVBAR */}
      <div className="top-bar bg-dark text-white py-1">
        <div className="container-fluid">

          <div className="d-flex justify-content-between align-items-center">

            {/* LEFT */}
            <div className="d-flex align-items-center gap-2">
              <Headphones size={14} />
              <span className="help-text">
                Need Help? <span className="text-info fw-bold">1800-266-0123</span>
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
                    <Eye size={14}/> Eye Testing ▾
                  </span>

                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Digital Eye Strain Test</a></li>
                    <li><a className="dropdown-item" href="#">Online Eye Screening</a></li>
                    <li><a className="dropdown-item" href="#">Instore Free Eye Test</a></li>
                    <li><a className="dropdown-item" href="#">Book Appointment</a></li>
                  </ul>
                </div>

                {/* <span>Hearing Test</span>

                <span className="d-flex align-items-center gap-1">
                  <User size={14}/> Sign In
                </span>

                <span className="d-flex align-items-center gap-1">
                  <Truck size={14}/> Track Order
                </span> */}

                <span className="d-flex align-items-center gap-1">
                  <MapPin size={14}/> Find Store
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

                  <li><a className="dropdown-item">Eye Testing</a></li>
                  <li><a className="dropdown-item">Hearing Test</a></li>
                  <li><a className="dropdown-item">Sign In</a></li>
                  <li><a className="dropdown-item">Track Order</a></li>
                  <li><a className="dropdown-item">Find Store</a></li>

                </ul>

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container-fluid">

          <a className="navbar-brand fw-bold">
            TITAN <span className="text-info">EYE+</span>
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMenu">

            <ul className="navbar-nav mx-auto gap-4">

              {/* Eyeglasses Mega Menu */}
              <li className="nav-item dropdown hover-dropdown">

                <span className="nav-link">Eyeglasses ▾</span>

               <div className="dropdown-menu mega-menu p-4">

                <div className="row">

                  <div className="col-12 col-md-3 col-sm-6">
                    <h6>GENDER</h6>
                    <a href="#">All</a>
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">Kids</a>
                  </div>

                  <div className="col-12 col-md-3 col-sm-6">
                    <h6>SHAPE</h6>
                    <a href="#">Rectangle</a>
                    <a href="#">Round</a>
                    <a href="#">Cat Eye</a>
                    <a href="#">Wayfarer</a>
                  </div>

                  <div className="col-12 col-md-3 col-sm-6">
                    <h6>TOP BRANDS</h6>
                    <a href="#">Titan</a>
                    <a href="#">Rayban</a>
                    <a href="#">Fastrack</a>
                    <a href="#">Vogue</a>
                  </div>

                  <div className="col-12 col-md-3 col-sm-6">
                    <img
                      src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371"
                      className="img-fluid rounded"
                      alt="Eyeglasses"
                    />
                  </div>

                </div>

              </div>
              </li>

            <li className="nav-item dropdown hover-dropdown">
  <span className="nav-link">Sunglasses ▾</span>

  <div className="dropdown-menu mega-menu mega-menu-full p-4">

      <div className="row">

        <div className="col-12 col-md-3 col-sm-6">
          <h6>GENDER</h6>
          <a href="#">All</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>

          <h6 className="mt-3">STYLE</h6>
          <a href="#">Mirrored</a>
          <a href="#">Tinted</a>
          <a href="#">UV Protection</a>
          <a href="#">Polarized</a>

          <h6 className="mt-3">USAGE</h6>
          <a href="#">Regular</a>
          <a href="#">Power</a>
        </div>

        <div className="col-12 col-md-3 col-sm-6">
          <h6>COLLECTION</h6>
          <a href="#">Smart Sunglasses</a>
          <a href="#">Donald</a>
          <a href="#">Glow Up</a>
          <a href="#">Whiplash</a>
          <a href="#">Vivid Geometry</a>

          <h6 className="mt-3">SHAPE</h6>
          <a href="#">Aviator</a>
          <a href="#">Wayfarer</a>
          <a href="#">Wraparound</a>
          <a href="#">Rectangle</a>
          <a href="#">Round</a>
        </div>

        <div className="col-12 col-md-3 col-sm-6">
          <h6>BRANDS</h6>
          <a href="#">Titan</a>
          <a href="#">Fastrack</a>
          <a href="#">Rayban</a>
          <a href="#">Oakley</a>
          <a href="#">Burberry</a>
        </div>

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

              {/* <li className="nav-item">
                <span className="nav-link">Power Sunglasses</span>
              </li>

              <li className="nav-item">
                <span className="nav-link">Computer Glasses</span>
              </li>

              <li className="nav-item">
                <span className="nav-link">Hearing Aids</span>
              </li> */}

              {/* Contact Lenses */}
              <li className="nav-item dropdown hover-dropdown">

                <span className="nav-link">Contact Lenses ▾</span>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Bausch & Lomb</a></li>
                  <li><a className="dropdown-item" href="#">Johnson & Johnson</a></li>
                  <li><a className="dropdown-item" href="#">Cooper Vision</a></li>
                </ul>

              </li>

              {/* Accessories */}
              <li className="nav-item dropdown hover-dropdown">

                <span className="nav-link">Accessories ▾</span>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Cleaning Cloth</a></li>
                  <li><a className="dropdown-item" href="#">Lens Spray</a></li>
                  <li><a className="dropdown-item" href="#">Cases</a></li>
                </ul>

              </li>

            </ul>

            <div>
              <ShoppingCart size={22} />
            </div>

          </div>
        </div>
      </nav>

    </>
  );
};

export default Header;