import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { featuredCakes, type Cake } from "@/data/cakes";
import { ProductCard } from "@/components/ProductCard";

export const Featured = ({ onAdd }: { onAdd: (cake: Cake) => void }) => {
  const [q, setQ] = useState("");
  const list = useMemo(
    () => featuredCakes.filter((c) => c.name.toLowerCase().includes(q.toLowerCase())),
    [q]
  );

  return (
    <section id="featured" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Featured</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">
              This week's <em className="text-gradient-gold">favorites</em>
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {list.map((cake) => (
            <ProductCard key={cake.id} cake={cake} onAdd={onAdd} />
          ))}
        </div>
        {list.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No cakes match "{q}".</p>
        )}
      </div>
    </section>
  );
};
