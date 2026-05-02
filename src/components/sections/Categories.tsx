import { categories } from "@/data/cakes";
import { CategoryCard } from "@/components/CategoryCard";

export const Categories = () => (
  <section id="categories" className="py-24 md:py-32 bg-soft">
    <div className="container">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Collections</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">
            Cakes for every <em className="text-gradient-gold">occasion</em>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm">
          From quiet birthdays to grand weddings — find the perfect centerpiece.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((c) => (
          <CategoryCard key={c.name} {...c} />
        ))}
      </div>
    </div>
  </section>
);
