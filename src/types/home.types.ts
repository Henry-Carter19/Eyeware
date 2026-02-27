export interface HeroBanner {
  id: number;
  image: string;
}

export interface Brand {
  id: number;
  name: string;
  tagline: string;
  modelImage: string;  
  brandLogo: string;   
  category: "Premium" | "Essentials";
}

export interface Category {
  id: number;
  title: string;
  image: string;
}

export interface Offer {
  id: number;
  title: string;
  description: string;
}

export interface HomePageData {
  heroBanners: HeroBanner[];
  brands: Brand[]
  categories: Category[];
  offers: Offer[];
}