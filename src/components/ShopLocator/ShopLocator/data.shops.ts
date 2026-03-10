import type { Shop } from "./types.shop";

export const shops: Shop[] = [
  {
    id: 1,
    name: "Titan Eye+ Sector 61 SAS Nagar",
    shortAddress: "Titan Eye+, Scf-44, Phase 7",
    address:
      "Titan Eye+, Scf-44, Phase 7, Near Tanshiq, Mohali - 160059, Chandigarh, Chandigarh - 160059",
    timing: "10:30 am - 1:30 pm",
    status: "Closed",
    rating: 5,
    reviews: 616,
    services: ["repairs", "free eye test", "consultation", "sales"],
    imageUrl:
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1200&q=80",
    lat: 30.7046,
    lng: 76.7179,
    phone: "+91 98765 43210",
    directionUrl: "https://maps.google.com/?q=30.7046,76.7179"
  },

  {
    id: 2,
    name: "Titan Eye+ Sec 15D",
    shortAddress: "Shop No 51, Sector 15 D",
    address:
      "Titan Eye+, Shop No 51, Sector 15 D, Chandigarh - 160015, Chandigarh, Chandigarh - 160015",
    timing: "10:30 am - 9:00 pm",
    status: "Closed",
    rating: 4.8,
    reviews: 421,
    services: ["repairs", "free eye test", "consultation", "sales"],
    imageUrl:
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80",
    lat: 30.7343,
    lng: 76.7852,
    phone: "+91 98765 43211",
    directionUrl: "https://maps.google.com/?q=30.7343,76.7852"
  },

  {
    id: 3,
    name: "Titan Eye+ Elante",
    shortAddress: "Industrial Area Phase 1",
    address:
      "Titan Eye+, Industrial Area Phase 1, Chandigarh - 160002, Chandigarh, Chandigarh - 160002",
    timing: "11:00 am - 9:00 pm",
    status: "Closed",
    rating: 4.7,
    reviews: 295,
    services: ["eyewear", "consultation", "frames", "sales"],
    imageUrl:
      "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=1200&q=80",
    lat: 30.7041,
    lng: 76.8012,
    phone: "+91 98765 43212",
    directionUrl: "https://maps.google.com/?q=30.7041,76.8012"
  },

  {
    id: 4,
    name: "Titan Eye+ Panchkula",
    shortAddress: "Sector 11",
    address:
      "Titan Eye+, Sector 11, Panchkula - 134109, Haryana",
    timing: "10:30 am - 8:30 pm",
    status: "Closed",
    rating: 4.9,
    reviews: 501,
    services: ["repairs", "consultation", "sales", "lenses"],
    imageUrl:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    lat: 30.6942,
    lng: 76.8606,
    phone: "+91 98765 43213",
    directionUrl: "https://maps.google.com/?q=30.6942,76.8606"
  }
];