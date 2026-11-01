import { useEffect, useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#categories", label: "Categories" },
  { href: "#featured", label: "Cakes" },
  { href: "#festival-cakes", label: "Festival Cakes" },
  { href: "#hampers", label: "Hampers" },
  { href: "#menu", label: "Menu" },
  { href: "#bulk-orders", label: "Bulk Orders" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = ({ cartCount, onCartClick, onCakesClick }: { cartCount: number; onCartClick: () => void; onCakesClick: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-soft py-3" : "bg-background/90 backdrop-blur-sm py-4 md:py-5"
      }`}
    >
      <nav className="container flex min-w-0 items-center justify-between gap-3">
        <a href="#home" className="min-w-0 shrink truncate">
          <span className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
            Butter <span className="text-gradient-gold italic">Mellow</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-4 xl:gap-7 whitespace-nowrap">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={l.label === "Cakes" ? onCakesClick : undefined}
                className="whitespace-nowrap text-xs xl:text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((s) => !s)}
            className="p-2.5 rounded-full hover:bg-secondary transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Cart"
            onClick={onCartClick}
            className="relative p-2.5 rounded-full hover:bg-secondary transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-6 h-6 px-1 text-xs font-semibold leading-none grid place-items-center rounded-full bg-primary text-primary-foreground shadow-sm">
                {cartCount}
              </span>
            )}
          </button>
          <button
            aria-label="Menu"
            className="lg:hidden p-2 rounded-full hover:bg-secondary"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {searchOpen && (
        <div className="container mt-3 animate-fade-in">
          <Input placeholder="Search cakes, flavors, occasions..." className="bg-card border-border/60" />
        </div>
      )}

      {open && (
        <div className="lg:hidden container mt-3 max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-2xl border border-border/70 bg-card/95 p-3 shadow-soft animate-fade-in">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => {
                    if (l.label === "Cakes") onCakesClick();
                    setOpen(false);
                  }}
                  className="block min-h-11 whitespace-nowrap rounded-xl px-3 py-3 text-sm font-medium leading-5 text-foreground/80 hover:bg-secondary hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
