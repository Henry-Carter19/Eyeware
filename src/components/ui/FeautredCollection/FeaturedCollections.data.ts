export type CardItem = {
  id: string;
  title: string;
  subtitle: string;
  image: string; // data URI
  bg?: string;
};

export type CardLayout = {
  left: number;
  top: number;
  rotate: number;
};

export const cards: CardItem[] = [
  {
    id: "c1",
    title: "Model 1",
    subtitle: "Beautiful Model",
    image: "/images/feature1.webp",
    bg: "#7c3aed",
  },
  {
    id: "c2",
    title: "Model 2",
    subtitle: "Beautiful Model",
    image: "/images/feature2.webp",
    bg: "#0ea5e9",
  },
  {
    id: "c3",
    title: "Model 3",
    subtitle: "Beautiful Model",
    image: "/images/feature3.webp",
    bg: "#22c55e",
  },
  {
    id: "c4",
    title: "Model 4",
    subtitle: "Beautiful Model",
    image: "/images/feature4.webp",
    bg: "#f97316",
  },
  {
    id: "c5",
    title: "Model 5",
    subtitle: "Beautiful Model",
    image: "/images/model5.png",
    bg: "#e11d48",
  },
  {
    id: "c6",
    title: "Model 6",
    subtitle: "Beautiful Model",
    image: "/images/feature5.webp",
    bg: "#14b8a6",
  },
  {
    id: "c7",
    title: "Model 7",
    subtitle: "Beautiful Model",
    image: "/images/model5.png",
    bg: "#6366f1",
  },
];

export const layouts: { desktop: CardLayout[]; mobile: CardLayout[] } = {
  desktop: [
    { left: -40, top: 70, rotate: -28 },
    { left: 360, top: 520, rotate: -12 },
    { left: 540, top: 80, rotate: 7 },
    { left: 1140, top: 520, rotate: -18 },
    { left: 1370, top: 100, rotate: 19 },
    { left: 860, top: 610, rotate: -6 },
    { left: 820, top: 210, rotate: 12 },
  ],
  mobile: [
    { left: -80, top: 40, rotate: -22 },
    { left: 210, top: 360, rotate: -10 },
    { left: 320, top: 60, rotate: 6 },
    { left: 700, top: 360, rotate: -16 },
    { left: 860, top: 80, rotate: 16 },
    { left: 520, top: 430, rotate: -5 },
    { left: 520, top: 170, rotate: 10 },
  ],
};
