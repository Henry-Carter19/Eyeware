import React, { useEffect, useState } from "react";
import "./StoresCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useWhatsApp } from "../../../utils/whatsapp";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { StoreItem } from "../../../types/home.types";
import { getDirectionHref } from "../../ShopLocator/ShopLocator/mapLinks";

interface Props {
  stroreData: StoreItem[];
}

const StoresCarousel: React.FC<Props> = ({ stroreData }) => {
  const { sendMessage } = useWhatsApp();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAppointment = (shop: StoreItem) => {
    const phoneNumber = "917066602959";

    const message = `Hello Kubade OptiCare,
  
I would like to book an appointment.

Store: ${shop.name}
Address: ${shop.address}

Preferred Date:
Preferred Time:

Location:
${shop.directionUrl}

Please confirm availability.`;

    sendMessage(phoneNumber, message);
  };

  const showNavigation = stroreData.length > 4;

  return (
    <section className="storesCarousel-section common-section-padding">
      <h2 className="storesCarousel-title">Stores</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={4}
        spaceBetween={20}
        loop
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={
          showNavigation
            ? {
              nextEl: ".storesCarousel-next",
              prevEl: ".storesCarousel-prev",
            }
            : false
        }
        pagination={{
          el: ".storesCarousel-pagination",
          clickable: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 }, // ✅ NOW SHOWS 4
        }}
      >
        {stroreData?.map((shop) => (
          <SwiperSlide key={shop.id}>
            <div className="storesCarousel-outerCard">

              {/* PIN ICON */}
              <div className="storesCarousel-pin">
                <img
                  src="/images/StoreSection/geolocation.webp"
                  alt="location"
                  className="storesCarousel-pinIcon"
                />
              </div>

              {/* INNER CARD */}
              <div className="storesCarousel-card">
                <h3 className="storesCarousel-area">{shop.area}</h3>

                <div className="storesCarousel-street">{shop.street}</div>

                <p className="storesCarousel-address">{shop.address}</p>

                <div className="storesCarousel-buttonRow">
                  <a
                    href={getDirectionHref(
                      shop.directionUrl,
                      shop.lat,
                      shop.lng,
                      shop.name
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="storesCarousel-secondaryButton"
                  >
                    Get Direction
                  </a>

                  <button
                    className="storesCarousel-primaryButton"
                    onClick={() => handleAppointment(shop)}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showNavigation && (
        <>
          <div className="storesCarousel-prev">
            <ChevronLeft />
          </div>
          <div className="storesCarousel-next">
            <ChevronRight />
          </div>
        </>
      )}

      <div className="storesCarousel-pagination"></div>
    </section>
  );
};

export default StoresCarousel;