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

export interface FaqItem {
  id: number;
  title: string;
  content: string;
}

export interface HypeCard {
  id: number;
  username: string;
  backgroundImage: string;
  brandLogo: string;
}


export interface HomePageData {
  heroBanners: HeroBanner[];
  brands: Brand[];
  hypeCards: HypeCard[];
  faq: FaqItem[];
}