import React from "react";
import homeData from "../data/homePageData.json";
import { HomePageData } from "../types/home.types";
import HeroCarousel from "../components/ui/HeroCarousel/HeroCarousel";
import BrandsCarousel from "../components/ui/BrandsCarousel/BrandsCarousel";
import FaqSection from "../components/ui/FaqSection/FaqSection";
import HypeSection from "../components/ui/HypeSection/HypeSection";

const HomePage = () => {
  const data = homeData as HomePageData;

  return (
    <div>
      <HeroCarousel banners={data.heroBanners} />
      <BrandsCarousel brands={data.brands} />
      <HypeSection hypeData={data.hypeCards} />
      <FaqSection faqData={data.faq} />
    </div>
  );
};

export default HomePage;