import { categories, type CategoryKey } from "@/data/cakes";
import { CategoryCard } from "@/components/CategoryCard";

type Props = {
  selected: CategoryKey;
  onSelect: (key: CategoryKey) => void;
};

export const Categories = ({ selected, onSelect }: Props) => (
  <section id="categories" className="py-24 md:py-32 bg-soft">
    <div className="container">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Collections</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">
            Cakes for every <em className="text-gradient-gold">occasion</em>
          </h2>
        </div>
        <div className="flex flex-col items-start md:items-end gap-3 max-w-sm">
          <p className="text-muted-foreground">
            From quiet birthdays to grand weddings — find the perfect centerpiece.
          </p>
          {selected !== "all" && (
            <button
              onClick={() => onSelect("all")}
              className="text-xs uppercase tracking-[0.2em] text-primary hover:underline"
            >
              Clear filter — show all
            </button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((c) => (
          <CategoryCard
            key={c.key}
            name={c.name}
            desc={c.desc}
            image={c.image}
            active={selected === c.key}
            onClick={() => {
              onSelect(selected === c.key ? "all" : c.key);
              setTimeout(() => {
                document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
          />
        ))}
      </div>
    </div>
  </section>
);
