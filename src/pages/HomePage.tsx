import React from "react";
import Carousel from "../components/ui/Carousel";
import bannersData from "../data/banners.json";
import { Banner } from "../types/banner.types";

const HomePage = () => {
  const banners: Banner[] = bannersData;

  return (
    <div>
      <Carousel items={banners} />
    </div>
  );
};

export default HomePage;