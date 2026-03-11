import React, { useRef } from "react";
import "./StoresCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useWhatsApp } from "../../../utils/whatsapp";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { StoreItem } from "../../../types/home.types";

interface Props {
    stroreData: StoreItem[];
}

const StoresCarousel: React.FC<Props> = ({ stroreData }) => {
    const { sendMessage } = useWhatsApp();

    const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);

    const getDirectionHref = (lat?: number, lng?: number) => {
        if (lat && lng) {
            return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
        }
        return "#";
    };

    const handleAppointment = (shop: StoreItem) => {
        const phoneNumber = "918381001406";

        const message = `Hello Kubade OptiCare,

I would like to book an appointment.

Store: ${shop.name}
Address: ${shop.area}, ${shop.street}, ${shop.address}

Preferred Date:
Preferred Time:

Location:
${getDirectionHref(shop.lat, shop.lng)}

Please confirm availability.`;

        sendMessage(phoneNumber, message);
    };

    return (
        <section className="storesCarousel-section common-section-padding">
            <h2 className="storesCarousel-title">Stores</h2>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={3}
                spaceBetween={30}
                loop
                speed={1000}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: ".storesCarousel-next",
                    prevEl: ".storesCarousel-prev",
                }}
                // onSwiper={(swiper: any) => {
                //     setTimeout(() => {
                //         swiper.navigation.init();
                //         swiper.navigation.update();
                //     });
                // }}
                pagination={{
                    el: ".storesCarousel-pagination",
                    clickable: true,
                }}
                breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 16 },
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
            >
                {stroreData?.map((shop) => (
                    <SwiperSlide key={shop.id}>
                        <div className="storesCarousel-card">
                            <h3 className="storesCarousel-area">{shop.area}</h3>

                            <div className="storesCarousel-street">{shop.street}</div>

                            <p className="storesCarousel-address">{shop.address}</p>

                            <div className="storesCarousel-buttonRow">
                                <a
                                    href={getDirectionHref(shop.lat, shop.lng)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="storesCarousel-secondaryButton"
                                >
                                    Get Direction
                                </a>

                                <button
                                    type="button"
                                    className="storesCarousel-primaryButton"
                                    onClick={() => handleAppointment(shop)}
                                >
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div ref={prevRef} className="storesCarousel-prev">
                <ChevronLeft />
            </div>

            <div ref={nextRef} className="storesCarousel-next">
                <ChevronRight />
            </div>

            <div className="storesCarousel-pagination"></div>
        </section>
    );
};

export default StoresCarousel;