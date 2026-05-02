import { Button } from "@/components/ui/button";
import customImg from "@/assets/images/custom-cake.jpg";

export const CustomCake = () => (
  <section className="py-24 md:py-32 bg-soft">
    <div className="container grid md:grid-cols-2 gap-12 md:gap-20 items-center">
      <div className="relative order-2 md:order-1">
        <img
          src={customImg}
          alt="A custom designed celebration cake"
          loading="lazy"
          width={1280}
          height={1280}
          className="rounded-3xl shadow-elegant w-full aspect-square object-cover"
        />
        <div className="hidden md:block absolute -top-6 -left-6 h-32 w-32 rounded-full bg-blush -z-10" />
        <div className="hidden md:block absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-accent/40 -z-10" />
      </div>
      <div className="order-1 md:order-2 space-y-6">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Bespoke</span>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
          Dream it. We'll <em className="text-gradient-gold">bake it.</em>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          From intimate anniversaries to once-in-a-lifetime weddings, our
          designers will craft a cake that's wholly yours — flavors, florals,
          and finishes chosen with care.
        </p>
        <ul className="space-y-3 text-sm">
          {["Personal design consultation", "Choose flavors, fillings & decor", "Delivered fresh, on the day"].map((t) => (
            <li key={t} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {t}
            </li>
          ))}
        </ul>
        <Button size="lg" className="rounded-full px-8 h-12 bg-foreground text-background hover:bg-foreground/90">
          Customize Your Cake
        </Button>
      </div>
    </div>
  </section>
);
