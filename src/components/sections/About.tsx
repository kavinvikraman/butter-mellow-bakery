import { Heart, Leaf, Sparkles } from "lucide-react";

const features = [
  { icon: Heart, title: "Handmade Daily", desc: "Every cake is shaped, layered and finished by our master bakers." },
  { icon: Leaf, title: "Pure Ingredients", desc: "Locally sourced butter, free-range eggs, organic flour. Always." },
  { icon: Sparkles, title: "Crafted to Delight", desc: "Recipes refined over a decade — every bite tastes intentional." },
];

export const About = () => (
  <section id="about" className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Our Story</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
          Small batch. <em className="text-gradient-gold">Big love.</em>
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Butter Mellow began as a quiet kitchen experiment — a love letter to slow baking,
          real butter, and the kind of cake you remember years later. Today, we still bake
          everything by hand, in small batches, the way it should be.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="bg-card rounded-2xl p-8 shadow-card hover-lift text-center">
            <div className="h-14 w-14 mx-auto rounded-full bg-blush grid place-items-center mb-5">
              <f.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-2xl mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
