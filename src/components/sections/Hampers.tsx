import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hampers } from "@/data/hampers";

const whatsappUrl = (hamperName: string) =>
  `https://wa.me/918940851331?text=${encodeURIComponent(`Hello Butter Mellow, I would like to enquire about the ${hamperName}.`)}`;

export const Hampers = () => (
  <section id="hampers" className="py-24 md:py-32 bg-soft">
    <div className="container">
      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-center">
        <div className="relative overflow-hidden rounded-3xl shadow-elegant">
          <img
            src="/hampers/hamper-placeholder.svg"
            alt="Butter Mellow celebration hamper with baked treats and a ribbon"
            width={1200}
            height={900}
            loading="lazy"
            className="w-full aspect-[4/3] object-cover"
          />
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Gifts made sweeter</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">
            Thoughtful <em className="text-gradient-gold">Hampers</em>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Share a little Butter Mellow joy with curated hampers for celebrations, festivals, and meaningful thank-yous. Tell us your occasion and we will help create the right assortment.
          </p>
          <div className="grid sm:grid-cols-3 gap-5 mt-10">
            {hampers.map((hamper) => (
              <article key={hamper.name} className="bg-card rounded-2xl overflow-hidden shadow-card">
                <img src={hamper.image} alt={hamper.name} width={600} height={450} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-2xl leading-tight">{hamper.name}</h3>
                    <Gift className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{hamper.description}</p>
                  <p className="text-xs text-muted-foreground">{hamper.includes}</p>
                  <p className="text-xs text-primary">{hamper.availability}</p>
                  <Button asChild className="w-full rounded-full bg-foreground text-background hover:bg-primary">
                    <a href={whatsappUrl(hamper.name)} target="_blank" rel="noreferrer">Enquire Now</a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
