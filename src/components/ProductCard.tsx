import { Plus } from "lucide-react";
import type { Cake } from "@/data/cakes";
import { ImageViewer } from "./ImageViewer";

type Props = { cake: Cake; onAdd: (cake: Cake) => void };

export const ProductCard = ({ cake, onAdd }: Props) => (
  <article className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift">
    <div className="relative aspect-square overflow-hidden bg-secondary hover-zoom">
      <ImageViewer src={cake.image} alt={cake.name} />
      <span className="absolute right-3 bottom-3 rounded-full bg-foreground/90 px-3 py-1.5 text-xs font-medium text-background shadow-lg backdrop-blur-sm">
        {cake.price === null ? "Contact for Price" : `₹${cake.price.toLocaleString("en-IN")} / ${cake.unit}`}
      </span>
      {cake.tag && (
        <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-background/90 backdrop-blur px-3 py-1 rounded-full">
          {cake.tag}
        </span>
      )}
    </div>
    <div className="p-4 sm:p-5 flex items-end justify-between gap-3">
      <div className="min-w-0">
        <h3 className="font-serif text-xl leading-tight">{cake.name}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{cake.unit}</p>
      </div>
      <button
        onClick={() => onAdd(cake)}
        aria-label={`Order ${cake.name}`}
        className="inline-flex h-10 shrink-0 items-center gap-1 rounded-full bg-foreground px-3 sm:px-4 text-[11px] sm:text-xs font-medium text-background transition-colors hover:bg-primary"
      >
        <Plus className="h-4 w-4" />
        <span>Order Now</span>
      </button>
    </div>
  </article>
);
