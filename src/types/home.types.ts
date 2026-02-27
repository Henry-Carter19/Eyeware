export interface HeroBanner {
  id: number;
  image: string;
  title: string;
  subtitle: string;
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
  categories: Category[];
  offers: Offer[];
}