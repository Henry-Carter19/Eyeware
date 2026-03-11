import React from "react";
import "./StoresCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useWhatsApp } from "../../../utils/whatsapp";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Store {
    id: number;
    name: string;
    address: string;
    lat?: number;
    lng?: number;
}

interface Props {
    stroreData: Store[];
}

const StoresCarousel: React.FC<Props> = ({ stroreData }) => {
    const { sendMessage } = useWhatsApp();

    const getDirectionHref = (lat?: number, lng?: number) => {
        if (lat && lng) {
            return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
        }
        return "#";
    };

    const handleAppointment = (shop: Store) => {
        const phoneNumber = "918381001406";

        const message = `Hello Kubade OptiCare,

I would like to book an appointment.

Store: ${shop.name}
Address: ${shop.address}

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
                slidesPerView={2}
                spaceBetween={30}
                loop
                speed={900}
                autoplay={{ delay: 2000 }}
                navigation={{
                    nextEl: ".storesCarousel-next",
                    prevEl: ".storesCarousel-prev",
                }}
                pagination={{
                    el: ".storesCarousel-pagination",
                    clickable: true,
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                }}
            >
                {stroreData?.map((shop) => (
                    <SwiperSlide key={shop.id}>
                        <div className="storesCarousel-card">
                            <h3 className="storesCarousel-storeTitle">{shop.name}</h3>

                            <div className="storesCarousel-storeSubtitle">
                                {shop.name}
                            </div>

                            <p className="storesCarousel-storeAddress">
                                {shop.address}
                            </p>

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
                                    Book an Appointment
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="storesCarousel-prev">
                <ChevronLeft />
            </div>

            <div className="storesCarousel-next">
                <ChevronRight />
            </div>

            <div className="storesCarousel-pagination"></div>
        </section>
    );
};

export default StoresCarousel;