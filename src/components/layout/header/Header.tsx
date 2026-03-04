// import React, { useState } from "react";
// import "./Header.css";

// const Header: React.FC = () => {
//   const [showMegaMenu, setShowMegaMenu] = useState(false);

//   return (
//     <div className="navbar-wrapper">
//       {/* Main Navbar */}
//       <div className="main-navbar">
//         <div className="logo">
//           TITAN <span>EYE+</span>
//         </div>

//         <ul className="menu">
//           <li>Eyeglasses</li>

//           {/* Sunglasses with Mega Menu */}
//           <li
//             className="mega-parent"
//             onMouseEnter={() => setShowMegaMenu(true)}
//             onMouseLeave={() => setShowMegaMenu(false)}
//           >
//             Sunglasses ▾

//             {showMegaMenu && (
//               <div className="mega-menu">
//                 <div className="mega-content">

//                   {/* Column 1 */}
//                   <div className="mega-column">
//                     <h4>GENDER</h4>
//                     <p>All</p>
//                     <p>Men</p>
//                     <p>Women</p>
//                     <p>Kids</p>

//                     <h4>STYLE</h4>
//                     <p>Mirrored</p>
//                     <p>Tinted</p>
//                     <p>UV Protection</p>
//                     <p>Polarized</p>

//                     <h4>USAGE</h4>
//                     <p>Regular</p>
//                     <p>Power</p>
//                   </div>

//                   {/* Column 2 */}
//                   <div className="mega-column">
//                     <h4>COLLECTION</h4>
//                     <p>Smart Sunglasses</p>
//                     <p>Donald</p>
//                     <p>Glow Up</p>
//                     <p>Whiplash</p>
//                     <p>Vivid Geometry</p>

//                     <h4>SHAPE</h4>
//                     <p>Aviator</p>
//                     <p>Wayfarer</p>
//                     <p>Wraparound</p>
//                     <p>Rectangle</p>
//                     <p>Round</p>
//                   </div>

//                   {/* Column 3 */}
//                   <div className="mega-column">
//                     <h4>BRANDS</h4>
//                     <p>Titan</p>
//                     <p>Fastrack</p>
//                     <p>Rayban</p>
//                     <p>Oakley</p>
//                     <p>Burberry</p>
//                   </div>

//                   {/* Right Image */}
//                   <div className="mega-image">
//                     <img
//                       src="https://images.unsplash.com/photo-1511499767150-a48a237f0083"
//                       alt="Sunglasses"
//                     />
//                     <span className="image-text">Sunglasses</span>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </li>

//           <li>Power Sunglasses</li>
//           <li>Computer Glasses</li>
//           <li>Contact Lenses</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { FaSearch, FaHeadphones, FaEye, FaUser, FaTruck, FaMapMarkerAlt } from "react-icons/fa";
import "./Header.css";

const Header: React.FC = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showEyeglasses, setShowEyeglasses] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAccessories, setShowAccessories] = useState(false);
  const [showBrands, setShowBrads] = useState(false);
  const [eyeTest, setEyeTest] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="top-left">
          🎧 Need Help? <span className="phone">Call 1800-266-0123</span>
        </div>

        {/* Center Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for Eyeglasses, Sunglasses"
            className="search-input"
          />
          <FaSearch className="search-icon" />
        </div>

        <div className="top-right">
          {/* <span><FaEye /> Eye Testing</span> */}
          {/* <span><FaEye /> Eye Testing</span> */}
          <span>
               <li
            className="nav-item-top"
            onMouseEnter={() => setEyeTest(true)}
            onMouseLeave={() => setEyeTest(false)}
          >
           <FaEye /> Eye Testing ▾
            {eyeTest && (
              <div className="dropdown-top">
                <ul>
                <li>Digital Eye Strain Test</li>
                <li>Online Eye Screening</li>
                <li>Instore Free Eye Test</li>
                <li>Book Appointment</li>
                </ul>
              </div>
            )}
          </li>
          </span>
          
          <span>Hearing Test</span>
          <span><FaUser /> Sign In</span>
          <span><FaTruck /> Track Order</span>
          <span><FaMapMarkerAlt /> Find A Store</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-navbar">
        <div className="logo">
          TITAN <span>EYE+</span>
        </div>

        <ul className="menu">
          <li
            onMouseEnter={() => setShowEyeglasses(true)}
            onMouseLeave={() => setShowEyeglasses(false)}
          >Eyeglasses ▾

            {showEyeglasses && (
              <div className="mega-menu">
                <div className="mega-content">

                  {/* Column 1 */}
                  <div className="mega-column">
                    <h4>GENDER</h4>
                    <p>All</p>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Kids</p>

                    <h4>COLLECTION</h4>
                    <p>EyeX</p>
                    <p>Tees</p>
                    <p>Signature</p>
                    <p>Spiderman</p>
                    <p>Hipster</p>
                    <p>Emily in Paris</p>
                  </div>

                  {/* Column 2 */}
                  <div className="mega-column">
                    <h4>SHAPE</h4>
                    <p>Rectangle</p>
                    <p>Round</p>
                    <p>Cat Eye</p>
                    <p>Geometric</p>
                    <p>Wayfarer</p>

                    <h4>STYLE</h4>
                    <p>Rimmed</p>
                    <p>Semi-Rimmed</p>
                    <p>Rimless</p>
                  </div>

                  {/* Column 3 */}
                  <div className="mega-column">
                    <h4>TOP BRANDS</h4>
                    <p>Zefr</p>
                    <p>Titan</p>
                    <p>Fastrack</p>
                    <p>Rayban</p>
                    <p>Dash For Kids</p>
                    <p>Aristo</p>
                    <p>Vogue Eyewear</p>
                    <p>Tommy Hilfiger</p>
                    <p>Emporio Armani</p>
                    <p>ZEISS</p>
                  </div>

                  {/* Column 4 */}
                  <div className="mega-column">
                    <h4>FEATURED BRANDS</h4>
                    <p>Oakley</p>
                    <p>Carrera</p>
                    <p>Stepper</p>
                    <p>Burberry</p>
                    <p>Tom Ford</p>
                    <p>Ted Baker</p>
                    <p>Silhouette</p>
                    <p>Swarovski</p>
                    <p>Mont Blanc</p>
                    <p>Calvin Klein</p>
                  </div>

                  {/* Right Image */}
                  <div className="mega-image">
                    <img
                      src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371"
                      alt="Eyeglasses"
                    />
                    <span className="image-text">Eyeglasses</span>
                  </div>

                </div>
              </div>
            )}
          </li>
          <li
            className="mega-parent"
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            Sunglasses ▾

            {showMegaMenu && (
              <div className="mega-menu">
                <div className="mega-content">

                  {/* Column 1 */}
                  <div className="mega-column">
                    <h4>GENDER</h4>
                    <p>All</p>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Kids</p>

                    <h4>STYLE</h4>
                    <p>Mirrored</p>
                    <p>Tinted</p>
                    <p>UV Protection</p>
                    <p>Polarized</p>

                    <h4>USAGE</h4>
                    <p>Regular</p>
                    <p>Power</p>
                  </div>

                  {/* Column 2 */}
                  <div className="mega-column">
                    <h4>COLLECTION</h4>
                    <p>Smart Sunglasses</p>
                    <p>Donald</p>
                    <p>Glow Up</p>
                    <p>Whiplash</p>
                    <p>Vivid Geometry</p>

                    <h4>SHAPE</h4>
                    <p>Aviator</p>
                    <p>Wayfarer</p>
                    <p>Wraparound</p>
                    <p>Rectangle</p>
                    <p>Round</p>
                  </div>

                  {/* Column 3 */}
                  <div className="mega-column">
                    <h4>BRANDS</h4>
                    <p>Titan</p>
                    <p>Fastrack</p>
                    <p>Rayban</p>
                    <p>Oakley</p>
                    <p>Burberry</p>
                  </div>

                  {/* Right Image */}
                  <div className="mega-image">
                    <img
                      src="https://images.unsplash.com/photo-1511499767150-a48a237f0083"
                      alt="Sunglasses"
                    />
                    <span className="image-text">Sunglasses</span>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li>Power Sunglasses</li>
          <li>Computer Glasses</li>
          <li>Hearing Aids</li>
          {/* <li>Contact Lenses</li> */}
          <li
            className="nav-item"
            onMouseEnter={() => setShowContact(true)}
            onMouseLeave={() => setShowContact(false)}
          >
            Contact Lenses ▾

            {showContact && (
              <div className="dropdown">
                <ul>
                  <li>EK TARA TEST</li>
                  <li>BAUSCH & LOMB</li>
                  <li>JOHNSON & JOHNSON</li>
                  <li>COOPER VISION</li>
                </ul>
              </div>
            )}
          </li>
          {/* <li>Accessories</li> */}
          <li
            className="nav-item"
            onMouseEnter={() => setShowAccessories(true)}
            onMouseLeave={() => setShowAccessories(false)}
          >
            Accessories ▾

            {showAccessories && (
              <div className="dropdown">
                <ul>
                  <li>EK TARA TEST</li>
                  <li>SWIMMING GOGGLES</li>
                  <li>CONTACT LENS SOLUTION</li>
                  <li>WIPES</li>
                  <li>FACE MASKS</li>
                  <li>BINOCULARS</li>
                  <li>PACKAGING CASE</li>
                  <li>CHAINS</li>
                </ul>
              </div>
            )}
          </li>
          {/* <li>Brands</li> */}
          <li
            className="nav-item"
            onMouseEnter={() => setShowBrads(true)}
            onMouseLeave={() => setShowBrads(false)}
          >
            Brands ▾

            {showBrands && (
              <div className="dropdown">
                <ul>
                  <li>TITAN</li>
                  <li>FASTRACK</li>
                  <li>ZEFR</li>
                  <li>VOGUE EYEWEAR</li>
                  <li>RAY BAN</li>
                  <li>MAUI JIM</li>
                  <li>TED-BAKER</li>
                  <li>EMPORIO ARMANI</li>
                  <li>TEES BY FASTRACK</li>
                  <li>ACUVUE BY J&J</li>
                  <li>BAUSCH AND LOMB</li>
                  <li>ZEISS</li>
                  <li>ARISTO</li>
                </ul>
           
              </div>
            )}
          </li>
        </ul>

        <div className="cart">
          🛒
        </div>
      </div>
    </>
  );
};

export default Header;