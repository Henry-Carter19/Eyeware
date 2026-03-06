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
import FeaturedCollectionsOnlyFocus from "../components/ui/FeautredCollection/FeautredCollection";
import TrendingCarousel from "../components/ui/TrendingCarousel/TrendingCarousel";
import TestimonialsCarousel from "../components/ui/TestimonialsCarousel/TestimonialsCarousel";
import ProductCarousel from "../components/ui/ProductsCarousel/ProductCarousel";
import GoToTop from "../components/ui/GoToTop/GoToTop";


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
      <FeaturedCollectionsOnlyFocus />
      <BestsellersCarousel bestsellersSection={data.bestsellersSection} />
      <TrendingCarousel trendingSection={data.trendingSection} />
      <TestimonialsCarousel testimonialsSection={data.testimonialsSection} />
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