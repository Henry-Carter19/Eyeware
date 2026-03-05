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

export interface CurationCard {
  id: number;
  image: string;
  buttonText?: string; // optional because exclusive deals may use arrow
  route: string;
}

export interface ViewAllConfig {
  label: string;
  route: string;
}

export interface CurationSection {
  title: string;
  highlight: string;
  background: "dark" | "gold";
  showArrowButton: boolean;
  viewAll?: ViewAllConfig | null;
  cards: CurationCard[];
}


export interface BestsellerCard {
  id: number;
  badge?: "New" | "Bestseller";
  image: string;
  brand: string;
  name: string;
  size?: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  rating?: number | null;
  ratingCount?: number;
}

export interface BestsellerSection {
  title: string;
  highlight: string;
  cards: BestsellerCard[];
}

export interface TrendingCard {
  id: number;
  image: string;
  brand: string;
  name: string;
  size?: string;
  price: number;
  rating?: number;
  ratingCount?: number;
}

export interface TrendingFilter {
  label: string;
  key: string;
}

export interface TrendingSection {
  subtitle: string;
  title: string;
  highlight: string;
  filters: TrendingFilter[];
  cards: Record<string, TrendingCard[]>;
}

export interface TestimonialCard {
  id: number;
  name: string;
  date: string;
  rating: number;
  review: string;
}

export interface TestimonialsSection {
  title: string;
  highlight: string;
  cards: TestimonialCard[];
}

export interface HomePageData {
  heroBanners: HeroBanner[];
  brands: Brand[];
  newCurationsSection: CurationSection;
  exclusiveDealsSection: CurationSection;
  hypeCards: HypeCard[];
  bestsellersSection: BestsellerSection;
  trendingSection: TrendingSection;
  testimonialsSection: TestimonialsSection;
  faq: FaqItem[];
}