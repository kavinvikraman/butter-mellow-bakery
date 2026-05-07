import { Instagram } from "lucide-react";

const socialLinks = [
  { Icon: Instagram, href: "https://www.instagram.com/buttermellow_cbe/", label: "Instagram" },
];

const cols = [
  { title: "Shop", links: ["Birthday", "Wedding", "Custom", "Cupcakes"] },
  { title: "Company", links: ["About", "Story", "Press", "Careers"] },
  { title: "Help", links: ["Contact", "Shipping", "Returns", "FAQ"] },
];

export const Footer = () => (
  <footer className="bg-foreground text-background pt-20 pb-8">
    <div className="container">
      <div className="grid md:grid-cols-5 gap-10 pb-14 border-b border-background/10">
        <div className="md:col-span-2 space-y-4">
          <p className="font-serif text-3xl">Butter <em className="text-gradient-gold">Mellow</em></p>
          <p className="text-sm text-background/70 max-w-xs leading-relaxed">
            Handmade cakes baked with intention. Sweet moments, slowly perfected.
          </p>
          <div className="flex gap-3 pt-2">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="h-10 w-10 rounded-full border border-background/20 grid place-items-center hover:bg-primary hover:border-primary transition-colors"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="text-xs uppercase tracking-[0.3em] text-background/50 mb-4">{c.title}</p>
            <ul className="space-y-2 text-sm">
              {c.links.map((l) => (
                <li key={l}><a href="#" className="text-background/80 hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-xs text-background/50 text-center pt-8">
        © {new Date().getFullYear()} Butter Mellow. Made with love & real butter.
      </p>
    </div>
  </footer>
);
