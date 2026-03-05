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
import {
  FaSearch,
  FaHeadphones,
  FaEye,
  FaUser,
  FaTruck,
  FaMapMarkerAlt,
} from "react-icons/fa";
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
      <h1>Hello</h1>
    </>
  );
};

export default Header;
