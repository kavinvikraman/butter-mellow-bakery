import { Plus } from "lucide-react";
import type { Cake } from "@/data/cakes";

type Props = { cake: Cake; onAdd: (cake: Cake) => void };

export const ProductCard = ({ cake, onAdd }: Props) => (
  <article className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift">
    <div className="relative aspect-square overflow-hidden bg-secondary hover-zoom">
      <img
        src={cake.image}
        alt={cake.name}
        loading="lazy"
        width={800}
        height={800}
        className="h-full w-full object-cover"
      />
      {cake.tag && (
        <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-background/90 backdrop-blur px-3 py-1 rounded-full">
          {cake.tag}
        </span>
      )}
    </div>
    <div className="p-5 flex items-center justify-between gap-3">
      <div>
        <h3 className="font-serif text-xl leading-tight">{cake.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">From ${cake.price}</p>
      </div>
      <button
        onClick={() => onAdd(cake)}
        aria-label={`Add ${cake.name} to cart`}
        className="h-10 w-10 shrink-0 rounded-full bg-foreground text-background grid place-items-center hover:bg-primary transition-colors"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  </article>
);
