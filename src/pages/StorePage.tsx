import React, { useEffect } from "react";
import "../styles/StorePage.css";
import ShopLocator from "../components/ShopLocator/ShopLocator/ShopLocator";

interface Store {
  id: number;
  name: string;
  img: string;
  address: string;
  rating?: string | null;
}

interface StorePageProps {
  data: Store[];
}

const StorePage: React.FC<StorePageProps> = ({ data }) => {
 

  return (
    <>
      <ShopLocator />
    </>
    // <div className="store-layout">
    //   {/* LEFT SIDE */}
    //   <div className="store-left">
    //     <div className="store-search">
    //       <input type="text" placeholder="Enter a city/pincode/locality" />
    //     </div>

    //     <h3 className="store-title">
    //       {data.length} Stores <span>in Mumbai</span>
    //     </h3>

    //     <div className="store-grid">
    //       {data.map((store) => (
    //         <div className="store-card" key={store.id}>
    //           <div className="store-img">
    //             <img src={store.img} alt={store.name} />
    //             <span className="store-open">● Open 10:30 am - 9:30 pm</span>
    //           </div>

    //           <div className="store-body">
    //             <span className="store-tags">
    //               repairs, free eye test, consultation, sales
    //             </span>

    //             <div className="store-head">
    //               <h4>{store.name}</h4>

    //               {store.rating && (
    //                 <span className="store-rating">⭐ {store.rating}</span>
    //               )}
    //             </div>

    //             <p className="store-address">{store.address}</p>

    //             <div className="store-actions">
    //               <button className="btn-direction">Get Direction</button>
    //               <button className="btn-appointment">
    //                 Book an Appointment
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* RIGHT SIDE MAP */}
    //   <div className="store-map">
    //     <iframe
    //       title="map"
    //       src="https://www.google.com/maps?q=mumbai&output=embed"
    //     ></iframe>
    //   </div>
    // </div>
  );
};

export default StorePage;
