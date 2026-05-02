import cake1 from "@/assets/images/cake-1.jpg";
import cake2 from "@/assets/images/cake-2.jpg";
import cake3 from "@/assets/images/cake-3.jpg";
import cake4 from "@/assets/images/cake-4.jpg";
import cake5 from "@/assets/images/cake-5.jpg";
import cake6 from "@/assets/images/cake-6.jpg";
import cake7 from "@/assets/images/cake-7.jpg";
import cake8 from "@/assets/images/cake-8.jpg";
import birthday from "@/assets/images/cat-birthday.jpg";
import wedding from "@/assets/images/cat-wedding.jpg";
import custom from "@/assets/images/cat-custom.jpg";
import cupcakes from "@/assets/images/cat-cupcakes.jpg";

export type Cake = { id: string; name: string; price: number; image: string; tag?: string };

export const featuredCakes: Cake[] = [
  { id: "1", name: "Strawberry Shortcake", price: 38, image: cake1, tag: "Bestseller" },
  { id: "2", name: "Chocolate Ganache", price: 42, image: cake2 },
  { id: "3", name: "Vanilla Bloom", price: 36, image: cake3, tag: "New" },
  { id: "4", name: "Lemon Drizzle", price: 32, image: cake4 },
  { id: "5", name: "Red Velvet Classic", price: 40, image: cake5 },
  { id: "6", name: "Pistachio Rose", price: 46, image: cake6, tag: "Signature" },
  { id: "7", name: "Tiramisu Layer", price: 44, image: cake7 },
  { id: "8", name: "Honey Almond", price: 38, image: cake8 },
];

export const categories = [
  { name: "Birthday Cakes", desc: "Sweet centerpieces for every celebration", image: birthday },
  { name: "Wedding Cakes", desc: "Timeless tiers crafted with love", image: wedding },
  { name: "Custom Cakes", desc: "Designed uniquely for your moment", image: custom },
  { name: "Cupcakes & Desserts", desc: "Bite-sized indulgence, baked daily", image: cupcakes },
];

export const galleryImages = [cake1, cake3, birthday, cake6, custom, cupcakes, cake5, wedding];
