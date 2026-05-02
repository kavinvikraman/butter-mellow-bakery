import { ArrowUpRight } from "lucide-react";

type Props = { name: string; desc: string; image: string };

export const CategoryCard = ({ name, desc, image }: Props) => (
  <a href="#featured" className="group block hover-zoom">
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary shadow-card">
      <img
        src={image}
        alt={name}
        loading="lazy"
        width={800}
        height={1000}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-background">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl">{name}</h3>
            <p className="text-sm text-background/80 mt-1">{desc}</p>
          </div>
          <span className="h-10 w-10 shrink-0 rounded-full bg-background text-foreground grid place-items-center transition-transform group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </div>
  </a>
);
