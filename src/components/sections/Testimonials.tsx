import { Star } from "lucide-react";

const reviews = [
  { name: "Aria L.", role: "Wedding, June 2025", rating: 5, text: "Our wedding cake was beyond beautiful — guests are still talking about the pistachio rose tier." },
  { name: "Marcus T.", role: "Birthday Order", rating: 5, text: "The chocolate ganache is the most decadent cake I've ever tasted. Worth every penny." },
  { name: "Sienna K.", role: "Custom Cake", rating: 5, text: "They captured exactly what I imagined. Truly artisans of their craft." },
];

export const Testimonials = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Loved by many</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-3">
          Words from our <em className="text-gradient-gold">guests</em>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <figure key={r.name} className="bg-card rounded-2xl p-8 shadow-card hover-lift">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <blockquote className="font-serif text-xl leading-snug mb-6">"{r.text}"</blockquote>
            <figcaption>
              <p className="font-medium">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
