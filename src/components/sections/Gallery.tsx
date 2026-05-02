import { galleryImages } from "@/data/cakes";

export const Gallery = () => (
  <section id="gallery" className="py-24 md:py-32 bg-soft">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Gallery</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-3">
          Recent <em className="text-gradient-gold">creations</em>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl bg-secondary hover-zoom shadow-card ${
              i % 5 === 0 ? "row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-square"
            }`}
          >
            <img
              src={img}
              alt={`Cake creation ${i + 1}`}
              loading="lazy"
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
