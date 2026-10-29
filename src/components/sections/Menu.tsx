import menuPageOne from "@/assets/images/WhatsApp Image 2026-10-17 at 9.29.01 AM (1).jpeg";
import menuPageTwo from "@/assets/images/WhatsApp Image 2026-10-17 at 9.29.01 AM (2).jpeg";
import menuPageThree from "@/assets/images/WhatsApp Image 2026-10-17 at 9.29.01 AM.jpeg";
import menuPageFour from "@/assets/images/WhatsApp Image 2026-10-17 at 9.29.02 AM (1).jpeg";
import menuPageFive from "@/assets/images/WhatsApp Image 2026-10-17 at 9.29.02 AM.jpeg";
import { ImageViewer } from "@/components/ImageViewer";

const menuPages = [
  { image: menuPageOne, title: "Tea Cakes, Pound Cakes and Bento Cakes" },
  { image: menuPageTwo, title: "Brownies, Cupcakes and Muffins" },
  { image: menuPageThree, title: "Cookies and Signature Treats" },
  { image: menuPageFour, title: "Breads, Buns and Bakery Favourites" },
  { image: menuPageFive, title: "Fresh Cream, Fruit, Chocolate and Fusion Cakes" },
];

export const Menu = () => (
  <section id="menu" className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="max-w-2xl mx-auto mb-12 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Butter Mellow menu</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-3">
          Explore our <em className="text-gradient-gold">menu</em>
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Browse our complete menu pages for cakes, bakes, savouries, cookies, breads, and celebration treats.
          Click any page to view the details more closely.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {menuPages.map((page, index) => (
          <article key={page.title} className={`overflow-hidden rounded-2xl bg-card shadow-card hover-lift ${index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
            <div className="aspect-[3/4] overflow-hidden bg-secondary">
              <ImageViewer src={page.image} alt={`Menu page ${index + 1}: ${page.title}`} />
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-widest text-primary">Menu page {index + 1}</p>
              <h3 className="font-serif text-2xl leading-tight mt-2">{page.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
