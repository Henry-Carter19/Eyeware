
export type Shop = {
  id: number;
  name: string;
  shortAddress?: string;
  address: string;
  timing: string;
  status: "Open" | "Closed";
  rating: number;
  reviews: number;
  services: string[];
  imageUrl: string;
  lat: number;
  lng: number;
  phone?: string;
  email?: string;
  description?: string;
  timings?: string;

  directionUrl?: string;
};
