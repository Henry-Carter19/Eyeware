import { useEffect, useState } from "react";
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
import GoToTop from "../components/ui/GoToTop/GoToTop";
import ShopCollections from "../components/ui/ShopCollections/ShopCollections";
import StoresCarousel from "../components/ui/StoresCarousel/StoresCarousel";

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
      <StoresCarousel stroreData={data.storeData} />
      <FindStoreSection />
      <NewCurations sectionConfig={data.exclusiveDealsSection} />
      <NewCurations sectionConfig={data.newCurationsSection} />
      <BrandsCarousel brands={data.brands} />
      <HypeSection hypeData={data.hypeCards} />
      <FeaturedCollectionsOnlyFocus />
      <BestsellersCarousel bestsellersSection={data.bestsellersSection} />
      <TrendingCarousel trendingSection={data.trendingSection} />
      {/* <TestimonialsCarousel testimonialsSection={data.testimonialsSection} /> */}
      <BlogCarousel blogSection={data.blogSection} />
      <ShopCollections shopCollection={data.collections} />
      <FaqSection faqData={data.faq} />
      <GoToTop />
    </div>
  );
};

export default HomePage; 
