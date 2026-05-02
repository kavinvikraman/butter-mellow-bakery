import { useEffect, useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#categories", label: "Categories" },
  { href: "#featured", label: "Cakes" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = ({ cartCount, onCartClick }: { cartCount: number; onCartClick: () => void }) => {
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
        scrolled ? "bg-background/85 backdrop-blur-md shadow-soft py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-serif text-2xl md:text-3xl font-semibold tracking-tight">
            Butter <span className="text-gradient-gold italic">Mellow</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((s) => !s)}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            aria-label="Cart"
            onClick={onCartClick}
            className="relative p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <ShoppingBag className="h-4 w-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-4 w-4 text-[10px] grid place-items-center rounded-full bg-primary text-primary-foreground">
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
        <div className="lg:hidden container mt-4 pb-4 animate-fade-in">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-foreground/80 hover:text-primary"
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
