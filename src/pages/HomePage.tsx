import React from "react";
import homeData from "../data/homePageData.json";
import { HomePageData } from "../types/home.types";
import HeroCarousel from "../components/ui/HeroCarousel/HeroCarousel";
import BrandsCarousel from "../components/ui/BrandsCarousel/BrandsCarousel";
import FaqSection from "../components/ui/FaqSection/FaqSection";
import HypeSection from "../components/ui/HypeSection/HypeSection";
import NewCurations from "../components/ui/NewCurations/NewCurations";
import FindStoreSection from "../components/ui/FindStoreSection/FindStoreSection";
import BestsellersCarousel from "../components/ui/BestsellersCarousel/BestsellersCarousel";

const HomePage = () => {
  const data = homeData as HomePageData;


  return (
    <div>
      <HeroCarousel banners={data.heroBanners} />
      <BrandsCarousel brands={data.brands} />
      <NewCurations sectionConfig={data.newCurationsSection} />
      <FindStoreSection />
      <HypeSection hypeData={data.hypeCards} />
      <NewCurations sectionConfig={data.exclusiveDealsSection} />
      <BestsellersCarousel bestsellersSection={data.bestsellersSection} />
      <FaqSection faqData={data.faq} />
    </div>
  );
};

export default HomePage;  