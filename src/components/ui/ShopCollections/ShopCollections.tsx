import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"
import "swiper/css/autoplay"
import "./ShopCollections.css"

import data from "../../../data/collections.json"
import { CollectionItem } from "../../../types/home.types"
import { Link } from "react-router-dom"

const spotlight =
    "https://api.titaneyeplus.com/media/wysiwyg/home-page/shop-collection/spotlight_1.png"

const platform =
    "https://api.titaneyeplus.com/media/wysiwyg/home-page/shop-collection/bottom-table-1.png"

const exploreBtn =
    "https://api.titaneyeplus.com/media/wysiwyg/home-page/shop-collection/explore-button.png"

export default function ShopCollections() {

    const collections = data.collections as CollectionItem[]

    return (

        <section className="choosebycatagory sc-home-section">

            <Swiper
                modules={[EffectCoverflow, Navigation, Autoplay]}
                effect="coverflow"
                centeredSlides={true}
                slidesPerView="auto"
                initialSlide={2}
                navigation
                loop
                grabCursor
                spaceBetween={20}

                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}

                speed={1200}

                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false
                }}
            >

                {collections.map((item) => (

                    <SwiperSlide key={item.id} className="sc-slide">

                        <div className="sc-item">

                            <div className="sc-title">
                                Shop for <span>{item.title}</span>
                            </div>

                            <div className="sc-image-wrap">

                                <img
                                    src={spotlight}
                                    alt=""
                                    className="sc-spotlight"
                                />

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="sc-character"
                                />

                            </div>

                            <div className="sc-footer">

                                <img
                                    src={platform}
                                    className="sc-platform"
                                    alt=""
                                />

                            </div>

                            <Link className="sc-explore" to={item.url}>
                                <button className="sc-explore-btn">
                                    EXPLORE
                                </button>
                            </Link>

                        </div>

                    </SwiperSlide>

                ))}

            </Swiper>

        </section>
    )
}