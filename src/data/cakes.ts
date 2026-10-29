import birthday from "@/assets/images/cat-birthday.jpg";
import wedding from "@/assets/images/cat-wedding.jpg";
import custom from "@/assets/images/cat-custom.jpg";
import cupcakes from "@/assets/images/cat-cupcakes.jpg";
import cake1 from "@/assets/images/cake-1.jpg";
import cake2 from "@/assets/images/cake-2.jpg";
import cake3 from "@/assets/images/cake-3.jpg";
import cake4 from "@/assets/images/cake-4.jpg";
import cake5 from "@/assets/images/cake-5.jpg";
import cake6 from "@/assets/images/cake-6.jpg";
import cake7 from "@/assets/images/cake-7.jpg";
import cake8 from "@/assets/images/cake-8.jpg";
import oreoCake from "@/assets/images/oreo_cake.png";
import rasmalaiCake from "@/assets/images/rasmalai_cake.png";
import gulabJamunCake from "@/assets/images/gulab_jamun_cake.png";
import belgianChocolateCake from "@/assets/images/belgian_chocolate_cake.png";

export type CategoryKey =
  | "all" | "cakes" | "fresh-cream" | "seasonal-fruit" | "chocolate" | "fusion" | "brownies"
  | "cupcakes" | "savory-muffins" | "sweet-muffins" | "tea-cakes" | "pound-cakes"
  | "bento-cakes" | "classic-cookies" | "healthy-cookies" | "artisan-specialties";

export type Cake = {
  id: string;
  name: string;
  category: Exclude<CategoryKey, "all" | "cakes">;
  price: number | null;
  unit: string;
  image: string;
  imageMatch?: "verified" | "needs-review";
};

export type FestivalCake = Cake & {
  festival: string;
  description: string;
  flavours: string[];
  availability: string;
};

const cakeImages = [
  "/cakes/birthday-cake-1.jpeg", "/cakes/birthday-cake-3.jpeg", "/cakes/birthday-cake-2.jpeg",
  "/cakes/birthday-cake-4.jpeg", "/cakes/birthday-cake-5.jpeg", "/cakes/birthday-cake-6.jpeg",
  "/cakes/birthday-cake-7.jpeg", "/cakes/birthday-cake-8.jpeg", "/cakes/custom-cake-1.jpeg",
  "/cakes/custom-cake-2.jpeg", "/cakes/custom-cake-3.jpeg", "/cakes/custom-cake-4.jpeg",
  cake1, cake2, cake3, cake4, cake5, cake6, cake7, cake8,
];
const cookieImages = [
  "/cakes/cookies-1.jpeg", "/cakes/cookies-2.jpeg", "/cakes/cookies-3.jpeg",
  "/cakes/cookies-4.jpeg", "/cakes/cookies-5.jpeg", "/cakes/cookies-6.jpeg",
];
const brownieImages = [cake2, cake7, cake3];
const muffinImages = [
  "/cakes/cookies-2.jpeg", "/cakes/cookies-3.jpeg", "/cakes/cookies-5.jpeg",
  "/cakes/cookies-6.jpeg",
];
const loafImages = [cake4, cake8, cake1, cake6];

let nextId = 1;
let nextCakeImage = 0;
const products = (
  category: Exclude<CategoryKey, "all" | "cakes">,
  items: Array<[string, number | null, string]>,
  images: string[] = cakeImages
): Cake[] => items.map(([name, price, unit], index) => {
  const image = images === cakeImages
    ? cakeImages[nextCakeImage++ % cakeImages.length]
    : images[index % images.length];

  return {
    id: `${category}-${nextId++}`,
    name,
    category,
    price,
    unit,
    image,
    imageMatch: name === "Classic Vanilla Cake" ? "verified" : "needs-review",
  };
});

export const featuredCakes: Cake[] = [
  ...products("fresh-cream", [["Butterscotch Cake", 1200, "per kg"], ["Black Forest Cake", 1200, "per kg"], ["Classic Vanilla Cake", 950, "per kg"], ["Pistachio Cake", 1600, "per kg"]]),
  ...products("seasonal-fruit", [["Pineapple Cake", 1300, "per kg"], ["Strawberry Cake", 1300, "per kg"], ["Mango Cake", 1200, "per kg"], ["Blueberry Cake", 1400, "per kg"], ["Lychee Fruit Cake", 1450, "per kg"], ["Tender Coconut Cake", 1200, "per kg"], ["Guava Cake", 1200, "per kg"], ["Mixed Fruit Cake", 1500, "per kg"]]),
  ...products("chocolate", [["Dutch Chocolate Truffle", 1500, "per kg"], ["Kit Kat Cake", 1400, "per kg"], ["Snickers Cake", 1450, "per kg"], ["Lotus Biscoff Cake", 1500, "per kg"], ["Raffaello Cake", 1500, "per kg"], ["Vancho Cake", 1600, "per kg"], ["Pistachio Cake", 1700, "per kg"], ["Chocolate Overload Cake", 1600, "per kg"], ["Oreo Cake", 1400, "per kg"], ["Belgian Chocolate Cake", 1700, "per kg"]]),
  ...products("fusion", [["Rasmalai Cake", 1550, "per kg"], ["Gulab Jamun Cake", 1550, "per kg"], ["Rosemilk Cake", 1850, "per kg"], ["Gulkand Cake", 1200, "per kg"], ["Motichoor Ladoo Cake", 1550, "per kg"], ["Kaju Cake", 1650, "per kg"]]),
  ...products("brownies", [["Classic Brownie", 75, "per piece"], ["Ragi Brownie", 80, "per piece"], ["Millet Brownie", 85, "per piece"], ["Walnut Brownie", 90, "per piece"], ["Biscoff Brownie", 90, "per piece"], ["Double Choco Brownie", 110, "per piece"], ["Cookie Brownie", 110, "per piece"], ["Hazelnut Nutella Brownie", 120, "per piece"], ["Brownie Gift Box (Assorted 6 pcs)", 600, "6 pieces"], ["Signature Brownie Platter (Fruit)", 600, "per platter"], ["Signature Brownie Platter (Assorted)", 750, "per platter"], ["Customized Brownie Birthday Cake (1/2 kg)", 800, "1/2 kg"], ["Customized Brownie Birthday Cake (1 kg)", 1650, "1 kg"]], brownieImages),
  ...products("cupcakes", [["Classic Vanilla", 300, "6 pieces"], ["Chocolate", 350, "6 pieces"], ["Strawberry", 350, "6 pieces"], ["Lemon Blueberry", 490, "6 pieces"], ["Pineapple", 330, "6 pieces"], ["Oreo Cupcake", 330, "6 pieces"], ["Nutella", 380, "6 pieces"], ["Biscoff", 400, "6 pieces"]], cookieImages),
  ...products("savory-muffins", [["Classic Cheese Muffins", 450, "6 pieces"], ["Spinach & Cheese Muffins", 550, "6 pieces"], ["Zucchini & Parmesan Muffins", 650, "6 pieces"], ["Mushroom & Thyme Muffins", 550, "6 pieces"], ["Bell Pepper & Cheese Muffins", 550, "6 pieces"], ["Mozzarella & Pesto Muffins", 700, "6 pieces"], ["Grilled Veggie Muffins", 600, "6 pieces"], ["Olive & Cheese Muffins", 550, "6 pieces"], ["School Snack Box (6 Mini Muffins)", 400, "6 pieces"]], muffinImages),
  ...products("sweet-muffins", [["Banana", 480, "6 pieces"], ["Chocolate Chip", 540, "6 pieces"], ["Blueberry", 600, "6 pieces"], ["Carrot & Dates", 540, "6 pieces"], ["Oatmeal", 510, "6 pieces"], ["Double Choco", 550, "6 pieces"], ["Peanut Butter Banana", 540, "6 pieces"]], muffinImages),
  ...products("tea-cakes", [["Walnut Banana Tea Cake", 650, "1/2 kg"], ["Pumpkin Tea Cake", 600, "1/2 kg"], ["Zucchini Tea Cake", 650, "1/2 kg"], ["Chocolate Tea Cake", 600, "1/2 kg"], ["Carrot & Dates Tea Cake", 650, "1/2 kg"], ["Orange Tea Cake", 600, "1/2 kg"]], loafImages),
  ...products("pound-cakes", [["Classic Pound Cake", 600, "1/2 kg"], ["Chocolate Pound Cake", 650, "1/2 kg"], ["Lemon Pound Cake", 580, "1/2 kg"], ["Almond Pound Cake", 700, "1/2 kg"], ["Marble Swirl Pound Cake", 650, "1/2 kg"]], loafImages),
  ...products("bento-cakes", [["Classic Vanilla Bento", 310, "250-300 g"], ["Strawberry Bento", 350, "250-300 g"], ["Blueberry Bento", 350, "250-300 g"], ["Nutella Bento", 350, "250-300 g"], ["Lotus Biscoff Bento", 420, "250-300 g"], ["Brownie Bento", 450, "250-300 g"]], ["/cakes/custom-cake-1.jpeg", "/cakes/custom-cake-2.jpeg", "/cakes/custom-cake-3.jpeg", "/cakes/custom-cake-4.jpeg", cake1, cake2]),
  ...products("classic-cookies", [["Classic Butter Cookies", 400, "300-350 g pack"], ["Classic Chocolate Cookies", 400, "300-350 g pack"], ["Peanut Butter Cookies", 400, "300-350 g pack"], ["French Coconut Cookies", 450, "300-350 g pack"], ["Oatmeal Cookies", 450, "300-350 g pack"], ["Fudge Brownie Cookies", 450, "300-350 g pack"], ["Double Chocolate Cookies", 450, "300-350 g pack"], ["Millet Cookies", 450, "300-350 g pack"], ["Pistachio White Chocolate Cookies", 500, "300-350 g pack"]], cookieImages),
  ...products("healthy-cookies", [["Banana Oats Cookies", 350, "300-350 g pack"], ["Beetroot Cookies", 400, "300-350 g pack"], ["Butter Cookies", 400, "300-350 g pack"], ["Murunga Cookies", 400, "300-350 g pack"], ["Curry Leaves Cookies", 400, "300-350 g pack"], ["Salt Cookies", 400, "300-350 g pack"], ["Masala Cookies", 400, "300-350 g pack"], ["Breakfast Cookies", 450, "300-350 g pack"], ["Ragi Chocos", 450, "300-350 g pack"], ["Multigrain Cookies", 500, "300-350 g pack"], ["Biotin Cookies", 650, "300-350 g pack"]], cookieImages),
  ...products("artisan-specialties", [["Whole Wheat Bread", null, "Contact for Price"], ["Pumpkin Bread", null, "Contact for Price"], ["Multi Grain Bread", null, "Contact for Price"], ["Sourdough Bread", null, "Contact for Price"], ["Turkish Bread", null, "Contact for Price"], ["Milk Buns", null, "Contact for Price"], ["Coconut Buns", null, "Contact for Price"], ["Stuffed Buns", null, "Contact for Price"], ["Pesto Babka Buns", null, "Contact for Price"], ["Garlic Buns", null, "Contact for Price"], ["Cream Buns", null, "Contact for Price"], ["Hot Dog Buns", null, "Contact for Price"], ["Waffles", null, "Contact for Price"], ["Donuts", null, "Contact for Price"], ["Bambolins", null, "Contact for Price"], ["Strawberry Tart", null, "Contact for Price"], ["Blueberry Tart", null, "Contact for Price"], ["Chocolate Tart", null, "Contact for Price"], ["Pizza Bases", null, "Contact for Price"], ["Tiramisu", null, "Contact for Price"], ["Kunafa Cake", null, "Contact for Price"], ["Chocolava", null, "Contact for Price"], ["Macarons", null, "Contact for Price"], ["Panna Cotta", null, "Contact for Price"]], [custom, cupcakes, birthday, wedding]),
];

const productImageOverrides: Record<string, string> = {
  "Oreo Cake": oreoCake,
  "Belgian Chocolate Cake": belgianChocolateCake,
  "Rasmalai Cake": rasmalaiCake,
  "Gulab Jamun Cake": gulabJamunCake,
};

featuredCakes.forEach((cake) => {
  const image = productImageOverrides[cake.name];
  if (image) cake.image = image;
});

const festivalEntry = (name: string, festival: string, description: string, flavours: string[]): FestivalCake => {
  const cake = featuredCakes.find((item) => item.name === name);
  if (!cake) throw new Error(`Festival cake is missing from the catalog: ${name}`);
  return { ...cake, festival, description, flavours, availability: "Confirm availability for your date" };
};

export const festivalCakes: FestivalCake[] = [
  festivalEntry("Gulab Jamun Cake", "Diwali Special Cakes", "A festive Indian-inspired cake for sharing with family and friends.", ["Gulab jamun", "Vanilla", "Chocolate"]),
  festivalEntry("Rasmalai Cake", "Diwali Special Cakes", "Soft cake layers with the celebratory spirit of rasmalai.", ["Rasmalai", "Vanilla", "Pistachio"]),
  festivalEntry("Classic Pound Cake", "Christmas Cakes", "A buttery, comforting bake for a warm Christmas table.", ["Vanilla", "Fruit", "Chocolate"]),
  festivalEntry("Chocolate Pound Cake", "Christmas Cakes", "Rich cocoa flavour made for festive slices and gifting.", ["Chocolate", "Mocha", "Hazelnut"]),
  festivalEntry("Dutch Chocolate Truffle", "New Year Cakes", "A polished chocolate centrepiece for the first celebration of the year.", ["Dark chocolate", "Milk chocolate", "Mocha"]),
  festivalEntry("Pistachio Cake", "Pongal Special Cakes", "A delicate, nutty cake to complement a bright harvest celebration.", ["Pistachio", "Vanilla", "Rose"]),
  festivalEntry("Strawberry Cake", "Valentine's Day Cakes", "A soft strawberry-led celebration cake for a thoughtful surprise.", ["Strawberry", "Vanilla", "Chocolate"]),
  festivalEntry("Black Forest Cake", "Mother's Day and Father's Day Cakes", "A celebration-ready classic for the people who make every day special.", ["Chocolate", "Cherry", "Fresh cream"]),
  festivalEntry("Classic Vanilla Cake", "Birthday and Celebration Cakes", "A timeless centrepiece for birthdays and everyday milestones.", ["Vanilla", "Fresh cream", "Fruit"]),
];

export const categories: { key: Exclude<CategoryKey, "all" | "cakes">; name: string; desc: string; image: string }[] = [
  { key: "fresh-cream", name: "Fresh Cream Cakes", desc: "Light, tender cakes finished with fresh cream", image: birthday },
  { key: "seasonal-fruit", name: "Seasonal Fruit Cakes", desc: "Bright fruit-forward bakes for every season", image: "/cakes/birthday-cake-5.jpeg" },
  { key: "chocolate", name: "Chocolate Cakes", desc: "Deep cocoa, truffle and chocolate classics", image: "/cakes/birthday-cake-3.jpeg" },
  { key: "fusion", name: "Fusion Cakes", desc: "Indian flavours reimagined as celebration cakes", image: custom },
  { key: "brownies", name: "Brownies", desc: "Rich cocoa squares and signature platters", image: "/cakes/cookies-2.jpeg" },
  { key: "cupcakes", name: "Cupcakes", desc: "Six-piece boxes of little celebrations", image: cupcakes },
  { key: "savory-muffins", name: "Savory Muffins", desc: "Cheesy, herby bakes for the savoury table", image: custom },
  { key: "sweet-muffins", name: "Sweet Muffins", desc: "Soft, generous muffins for slow mornings", image: cupcakes },
  { key: "tea-cakes", name: "Tea Cakes", desc: "Half-kilo loaves made for afternoon tea", image: birthday },
  { key: "pound-cakes", name: "Pound Cakes", desc: "Classic buttery slices with a fine crumb", image: wedding },
  { key: "bento-cakes", name: "Bento Cakes", desc: "Small cakes made for personal milestones", image: "/cakes/custom-cake-1.jpeg" },
  { key: "classic-cookies", name: "Classic Cookies", desc: "Generous cookie packs for sharing", image: "/cakes/cookies-1.jpeg" },
  { key: "healthy-cookies", name: "Signature & Healthy Cookies", desc: "Wholesome flavours with a Butter Mellow finish", image: "/cakes/cookies-4.jpeg" },
  { key: "artisan-specialties", name: "Artisan Breads, Buns & Specialties", desc: "Breads, buns and treats made in small batches", image: "/cakes/custom-cake-2.jpeg" },
];

export const galleryImages = [
  "/cakes/birthday-cake-1.jpeg", "/cakes/birthday-cake-3.jpeg", birthday,
  "/cakes/cookies-1.jpeg", custom, cupcakes, "/cakes/custom-cake-1.jpeg", wedding,
];