import React from "react";
import homeData from "../data/homePageData.json";
import { HomePageData } from "../types/home.types";

import HeroCarousel from "../components/ui/HeroCarousel/HeroCarousel";
import CategorySection from "../components/ui/CategorySection";
import OfferBannerSection from "../components/ui/OfferBannerSection";
import BrandsCarousel from "../components/ui/BrandsCarousel/BrandsCarousel";
import FaqSection from "../components/ui/FaqSection/FaqSection";

const HomePage = () => {
  const data: HomePageData = homeData as HomePageData;

  return (
    <div>
      <HeroCarousel banners={data.heroBanners} />
      <BrandsCarousel brands={data.brands} />
      <CategorySection categories={data.categories} />
      <OfferBannerSection offers={data.offers} />
      <FaqSection faqData={data.faq} />
    </div>
  );
};

export default HomePage;