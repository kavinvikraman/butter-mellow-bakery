import { CakeSlice } from "lucide-react";
import { Button } from "@/components/ui/button";
import { festivalCakes, type Cake } from "@/data/cakes";

type Props = { onAdd: (cake: Cake) => void };

export const FestivalCakes = ({ onAdd }: Props) => (
  <section id="festival-cakes" className="py-24 md:py-32 bg-soft">
    <div className="container">
      <div className="max-w-2xl mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Seasonal celebrations</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-3">
          Festival <em className="text-gradient-gold">Cakes</em>
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Thoughtful flavours and familiar favourites for Indian festivals, family moments, and every new beginning.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {festivalCakes.map((cake) => (
          <article key={`${cake.festival}-${cake.id}`} className="group overflow-hidden rounded-2xl bg-card shadow-card hover-lift">
            <div className="relative aspect-[4/3] overflow-hidden hover-zoom">
              <img src={cake.image} alt={cake.name} loading="lazy" width={800} height={600} className="h-full w-full object-cover" />
              <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-[10px] uppercase tracking-widest text-foreground">
                {cake.festival}
              </span>
            </div>
            <div className="p-5 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-2xl leading-tight">{cake.name}</h3>
                <CakeSlice className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{cake.description}</p>
              <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground">Flavour options:</span> {cake.flavours.join(", ")} (confirm availability)</p>
              <div className="flex items-center justify-between gap-3 pt-1">
                <div>
                  <p className="text-xs text-primary">{cake.availability}</p>
                  <p className="mt-1 text-sm font-medium">{cake.price === null ? "Contact for Price" : `₹${cake.price.toLocaleString("en-IN")} / ${cake.unit}`}</p>
                </div>
                <Button onClick={() => onAdd(cake)} className="rounded-full bg-foreground text-background hover:bg-primary">
                  Order Now
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);