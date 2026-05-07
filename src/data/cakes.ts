import birthday from "@/assets/images/cat-birthday.jpg";
import wedding from "@/assets/images/cat-wedding.jpg";
import custom from "@/assets/images/cat-custom.jpg";
import cupcakes from "@/assets/images/cat-cupcakes.jpg";

export type CategoryKey = "all" | "birthday" | "wedding" | "custom" | "cupcake";

export type Cake = {
  id: string;
  name: string;
  category: Exclude<CategoryKey, "all">;
  price: number;
  image: string;
  tag?: string;
};

export const featuredCakes: Cake[] = [
  { id: "1", name: "Classic Vanilla Cake", category: "birthday", price: 38, image: "/cakes/birthday-cake-1.jpeg" },
  { id: "2", name: "Vanilla Cake", category: "birthday", price: 40, image: "/cakes/birthday-cake-2.jpeg" },
  { id: "3", name: "Chocolate Truffle Cake", category: "birthday", price: 42, image: "/cakes/birthday-cake-3.jpeg" },
  { id: "4", name: "Chocolate Truffle Cake", category: "birthday", price: 44, image: "/cakes/birthday-cake-4.jpeg" },
  { id: "5", name: "Milky Mist White Forest Cake", category: "birthday", price: 46, image: "/cakes/birthday-cake-5.jpeg" },
  { id: "6", name: "Soft Creamy Cake", category: "birthday", price: 46, image: "/cakes/birthday-cake-6.jpeg" },
  { id: "7", name: "Soft Creamy Cake", category: "birthday", price: 48, image: "/cakes/birthday-cake-7.jpeg" },
  { id: "8", name: "Soft Creamy Cake", category: "birthday", price: 50, image: "/cakes/birthday-cake-8.jpeg" },
  { id: "9", name: "Cookies 1", category: "cupcake", price: 24, image: "/cakes/cookies-1.jpeg" },
  { id: "10", name: "Cookies 2", category: "cupcake", price: 24, image: "/cakes/cookies-2.jpeg" },
  { id: "11", name: "Cookies 3", category: "cupcake", price: 24, image: "/cakes/cookies-3.jpeg" },
  { id: "12", name: "Cookies 4", category: "cupcake", price: 24, image: "/cakes/cookies-4.jpeg" },
  { id: "13", name: "Cookies 5", category: "cupcake", price: 24, image: "/cakes/cookies-5.jpeg" },
  { id: "14", name: "Cookies 6", category: "cupcake", price: 24, image: "/cakes/cookies-6.jpeg" },
  { id: "15", name: "Custom Cake", category: "custom", price: 55, image: "/cakes/custom-cake-1.jpeg" },
  { id: "16", name: "Custom Cake", category: "custom", price: 55, image: "/cakes/custom-cake-2.jpeg" },
  { id: "17", name: "Custom Cake", category: "custom", price: 55, image: "/cakes/custom-cake-3.jpeg" },
  { id: "18", name: "Custom Cake", category: "custom", price: 55, image: "/cakes/custom-cake-4.jpeg" },
];

export const categories: { key: Exclude<CategoryKey, "all">; name: string; desc: string; image: string }[] = [
  { key: "birthday", name: "Birthday Cakes", desc: "Sweet centerpieces for every celebration", image: birthday },
  { key: "wedding", name: "Wedding Cakes", desc: "Timeless tiers crafted with love", image: wedding },
  { key: "custom", name: "Custom Cakes", desc: "Designed uniquely for your moment", image: custom },
  { key: "cupcake", name: "Cupcakes & Desserts", desc: "Bite-sized indulgence, baked daily", image: cupcakes },
];

export const galleryImages = [
  "/cakes/birthday-cake-1.jpeg",
  "/cakes/birthday-cake-3.jpeg",
  birthday,
  "/cakes/cookies-1.jpeg",
  custom,
  cupcakes,
  "/cakes/custom-cake-1.jpeg",
  wedding,
];
