import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { featuredCakes, categories, type Cake, type CategoryKey } from "@/data/cakes";
import { ProductCard } from "@/components/ProductCard";
import { cn } from "@/lib/utils";

type Props = {
  onAdd: (cake: Cake) => void;
  selectedCategory: CategoryKey;
  onSelectCategory: (key: CategoryKey) => void;
};

const filterChips: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "All" },
  ...categories.map((c) => ({ key: c.key as CategoryKey, label: c.name })),
];

export const Featured = ({ onAdd, selectedCategory, onSelectCategory }: Props) => {
  const [q, setQ] = useState("");

  const list = useMemo(
    () =>
      featuredCakes.filter((c) => {
        const matchesCategory = selectedCategory === "all" || c.category === selectedCategory;
        const matchesQuery = c.name.toLowerCase().includes(q.toLowerCase());
        return matchesCategory && matchesQuery;
      }),
    [q, selectedCategory]
  );

  const activeLabel = filterChips.find((f) => f.key === selectedCategory)?.label ?? "All";

  return (
    <section id="featured" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Featured</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">
              {selectedCategory === "all" ? (
                <>This week's <em className="text-gradient-gold">favorites</em></>
              ) : (
                <><em className="text-gradient-gold">{activeLabel}</em></>
              )}
            </h2>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search cakes..."
              className="pl-11 h-11 rounded-full bg-card border-border/60"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {filterChips.map((f) => {
            const active = selectedCategory === f.key;
            return (
              <button
                key={f.key}
                onClick={() => onSelectCategory(f.key)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm border transition-all duration-300",
                  active
                    ? "bg-foreground text-background border-foreground shadow-sm"
                    : "bg-card text-foreground/70 border-border/60 hover:border-primary hover:text-primary"
                )}
              >
                {f.label}
                {active && f.key !== "all" && (
                  <X
                    className="inline-block ml-2 h-3 w-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCategory("all");
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div
          key={selectedCategory + q}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 animate-fade-in"
        >
          {list.map((cake) => (
            <ProductCard key={cake.id} cake={cake} onAdd={onAdd} />
          ))}
        </div>
        {list.length === 0 && (
          <p className="text-center text-muted-foreground py-12 animate-fade-in">
            No cakes match your filter.
          </p>
        )}
      </div>
    </section>
  );
};
