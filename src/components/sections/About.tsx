import { Heart, Leaf, Sparkles } from "lucide-react";
import cake1 from "@/assets/images/cake-1.jpg";
import cake2 from "@/assets/images/cake-2.jpg";
import cake3 from "@/assets/images/cake-3.jpg";

const features = [
  { icon: Heart, image: cake1, title: "Handmade Daily", desc: "Every cake is shaped, layered and finished by our master bakers." },
  { icon: Leaf, image: cake2, title: "Pure Ingredients", desc: "Locally sourced butter, free-range eggs, organic flour. Always." },
  { icon: Sparkles, image: cake3, title: "Crafted to Delight", desc: "Recipes refined over a decade — every bite tastes intentional." },
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
          <div key={f.title} className="bg-card rounded-2xl overflow-hidden shadow-card hover-lift text-center">
            <div className="relative h-44 overflow-hidden">
              <img src={f.image} alt={f.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 to-transparent" />
              <div className="absolute bottom-4 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full bg-background/90 backdrop-blur grid place-items-center">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="p-8">
            <h3 className="font-serif text-2xl mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
