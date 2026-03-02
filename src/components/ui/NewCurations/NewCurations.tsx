import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./NewCurations.css";
import { CurationCard } from "../../../types/home.types";

interface Props {
    curations: CurationCard[];
}

const NewCurations: React.FC<Props> = ({ curations }) => {
    const navigate = useNavigate();

    return (
        <section className="curation-section">
            <h2 className="curation-title">
                New <span>Curations</span>
            </h2>

            <div className="curation-swiper-wrapper">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    slidesPerView={2.1}
                    spaceBetween={40}
                    loop={true}
                    centeredSlides={true}
                    speed={1000} // smooth transition (1 second animation)
                    autoplay={{
                        delay: 2500, // switch every 2.5 seconds
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false
                    }}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev"
                    }}
                >
                    {curations.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="curation-card">
                                <img src={item.image} alt="img" className="curation-image" />
                                <button
                                    className="curation-btn"
                                    onClick={() => navigate(item.route)}
                                >
                                    {item.buttonText}
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* EDGE GRADIENTS */}
                <div className="edge-left" />
                <div className="edge-right" />

                {/* CUSTOM ARROWS */}
                <div className="custom-prev">&#10094;</div>
                <div className="custom-next">&#10095;</div>
            </div>
        </section>
    );
};

export default NewCurations;