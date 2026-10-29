export type Hamper = {
  name: string;
  description: string;
  includes: string;
  availability: string;
  image: string;
};

export const hampers: Hamper[] = [
  {
    name: "Celebration Hamper",
    description: "A thoughtful baked-goods gift for birthdays, milestones, and family gatherings.",
    includes: "Cake, cookies, and seasonal treats",
    availability: "Customise to order",
    image: "/hampers/hamper-placeholder.svg",
  },
  {
    name: "Festival Gifting Hamper",
    description: "A festive assortment designed for Diwali, Christmas, Pongal, and New Year gifting.",
    includes: "Festive bakes and gift-ready packing",
    availability: "Confirm seasonal availability",
    image: "/hampers/hamper-placeholder.svg",
  },
  {
    name: "Corporate Gifting Hamper",
    description: "A polished thank-you gift for teams, clients, and special business occasions.",
    includes: "Curated treats and custom quantities",
    availability: "Request a quotation",
    image: "/hampers/hamper-placeholder.svg",
  },
];
