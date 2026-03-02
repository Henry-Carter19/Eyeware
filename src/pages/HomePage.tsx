import React from "react";
import homeData from "../data/homePageData.json";
import { HomePageData } from "../types/home.types";
import HeroCarousel from "../components/ui/HeroCarousel/HeroCarousel";
import BrandsCarousel from "../components/ui/BrandsCarousel/BrandsCarousel";
import FaqSection from "../components/ui/FaqSection/FaqSection";
import HypeSection from "../components/ui/HypeSection/HypeSection";
import NewCurations from "../components/ui/NewCurations/NewCurations";

const HomePage = () => {
  const data = homeData as HomePageData;

const viewAllObj = {
    "label": "View All",
    "route": "/curations"
  }

  return (
    <div>
      <HeroCarousel banners={data.heroBanners} />
      <BrandsCarousel brands={data.brands} />
      <NewCurations curations={data.curations} />
      <NewCurations curations={data.curationsDeals} viewAll={viewAllObj} />
      <HypeSection hypeData={data.hypeCards} />
      <FaqSection faqData={data.faq} />
    </div>
  );
};

export default HomePage;  