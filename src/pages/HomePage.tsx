import React from "react";
import homeData from "../data/homePageData.json";
import { HomePageData } from "../types/home.types";

import HeroCarousel from "../components/ui/HeroCarousel";
import CategorySection from "../components/ui/CategorySection";
import OfferBannerSection from "../components/ui/OfferBannerSection";

const HomePage = () => {
  const data: HomePageData = homeData;

  return (
    <div>
      <HeroCarousel banners={data.heroBanners} />
      <CategorySection categories={data.categories} />
      <OfferBannerSection offers={data.offers} />
    </div>
  );
};

export default HomePage;