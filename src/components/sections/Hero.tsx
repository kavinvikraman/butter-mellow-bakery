import { Button } from "@/components/ui/button";
import heroCake from "@/assets/images/hero-cake.jpg";

export const Hero = () => (
  <section id="home" className="relative bg-hero overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28">
    <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
    <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />

    <div className="container relative grid md:grid-cols-2 gap-12 md:gap-16 items-center">
      <div className="space-y-7 animate-fade-in">
        <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary px-4 py-2 rounded-full bg-card/70 backdrop-blur shadow-soft">
          Artisan Bakery · Est. 2014
        </span>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-foreground">
          Crafting <em className="text-gradient-gold not-italic">Sweet</em><br />
          Moments with<br />
          Every <em className="italic font-light">Bite</em>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
          Handmade cakes, baked fresh each morning with the finest ingredients.
          Indulgence, gently elevated.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button size="lg" className="rounded-full px-8 h-12 bg-foreground text-background hover:bg-foreground/90">
            Order Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 h-12 border-foreground/20 hover:bg-foreground/5"
            asChild
          >
            <a href="#featured">Explore Cakes</a>
          </Button>
        </div>
      </div>

      <div className="relative animate-scale-in">
        <div className="relative aspect-square max-w-lg mx-auto">
          <div className="absolute inset-0 rounded-full bg-card shadow-elegant" />
          <img
            src={heroCake}
            alt="Signature Butter Mellow naked cake with berries and gold leaf"
            width={1536}
            height={1280}
            className="relative z-10 w-full h-full object-cover rounded-full p-3 animate-float"
          />
          <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl px-5 py-3 shadow-card animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <p className="font-serif text-2xl text-gradient-gold">4.9 ★</p>
            <p className="text-xs text-muted-foreground">2,400+ reviews</p>
          </div>
          <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full h-24 w-24 grid place-items-center text-center shadow-elegant animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <span className="font-serif text-sm leading-tight">Fresh<br/>Today</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
