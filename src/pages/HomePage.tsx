import React, { useEffect, useState } from "react";
import homeData from "../data/homePageData.json";
import { HomePageData } from "../types/home.types";
import HeroCarousel from "../components/ui/HeroCarousel/HeroCarousel";
import BrandsCarousel from "../components/ui/BrandsCarousel/BrandsCarousel";
import FaqSection from "../components/ui/FaqSection/FaqSection";
import HypeSection from "../components/ui/HypeSection/HypeSection";
import NewCurations from "../components/ui/NewCurations/NewCurations";
import FindStoreSection from "../components/ui/FindStoreSection/FindStoreSection";
import BestsellersCarousel from "../components/ui/BestsellersCarousel/BestsellersCarousel";
import FeaturedCollectionsOnlyFocus from "../components/ui/FeautredCollection/FeautredCollection";
import TrendingCarousel from "../components/ui/TrendingCarousel/TrendingCarousel";
import TestimonialsCarousel from "../components/ui/TestimonialsCarousel/TestimonialsCarousel";
import BlogCarousel from "../components/ui/BlogCarousel/BlogCarousel";
import ProductCarousel from "../components/ui/ProductsCarousel/ProductCarousel";
import GoToTop from "../components/ui/GoToTop/GoToTop";

import ShopCollections from "../components/ui/ShopCollections/ShopCollections";

const HomePage = () => {

   const [data, setData] = useState<HomePageData | null>(null);

  useEffect(() => {
    const base = process.env.PUBLIC_URL || "";

    fetch(`${base}/data/homePageData.json`)
      .then((res) => res.json())
      .then((json) => setData(json as HomePageData))
      .catch((err) => console.error("Failed to load home page data:", err));
  }, []);

  if (!data) return null;

  return (
    <div>
      <HeroCarousel banners={data.heroBanners} />
      <BrandsCarousel brands={data.brands} />
      <NewCurations sectionConfig={data.newCurationsSection} />
      <FindStoreSection />
      <HypeSection hypeData={data.hypeCards} />
      <NewCurations sectionConfig={data.exclusiveDealsSection} />
      <FeaturedCollectionsOnlyFocus />
      <BestsellersCarousel bestsellersSection={data.bestsellersSection} />
      <TrendingCarousel trendingSection={data.trendingSection} />
      <TestimonialsCarousel testimonialsSection={data.testimonialsSection} />
      <BlogCarousel blogSection={data.blogSection} />
      <ShopCollections shopCollection={data.collections} />
      <FaqSection faqData={data.faq} />
      <GoToTop />
      {/* <ProductCarousel
        title={data.bestsellersSection.title}
        highlight={data.bestsellersSection.highlight}
        cards={data.bestsellersSection.cards}
      />
      <ProductCarousel
        subtitle="Trending Searches"
        title="Most"
        highlight="Loved"
        filters={data.trendingSection.filters}
        filteredCards={data.trendingSection.cards}
      /> */}
    </div>
  );
};

export default HomePage; 
