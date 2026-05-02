import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  desc: string;
  image: string;
  active?: boolean;
  onClick?: () => void;
};

export const CategoryCard = ({ name, desc, image, active, onClick }: Props) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "group block w-full text-left hover-zoom focus:outline-none transition-transform",
      active && "scale-[1.02]"
    )}
  >
    <div
      className={cn(
        "relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary shadow-card transition-all duration-300",
        active && "ring-2 ring-primary ring-offset-4 ring-offset-background shadow-lg"
      )}
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        width={800}
        height={1000}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
      {active && (
        <span className="absolute top-3 right-3 h-8 w-8 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-md animate-scale-in">
          <Check className="h-4 w-4" />
        </span>
      )}
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
  </button>
);
