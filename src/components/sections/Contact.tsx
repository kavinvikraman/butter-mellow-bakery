import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Contact = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within a day.");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container grid md:grid-cols-2 gap-12 md:gap-16">
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Get in touch</span>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Let's bake something <em className="text-gradient-gold">memorable</em>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Questions, custom orders, or collaborations — we'd love to hear from you.
          </p>
          <ul className="space-y-4 pt-4">
            <li className="flex items-center gap-4">
              <span className="h-11 w-11 rounded-full bg-blush grid place-items-center"><Phone className="h-4 w-4 text-primary" /></span>
              <div><p className="text-xs text-muted-foreground">Call us</p><p>+91 89408 51331</p></div>
            </li>
            <li className="flex items-center gap-4">
              <span className="h-11 w-11 rounded-full bg-blush grid place-items-center"><Mail className="h-4 w-4 text-primary" /></span>
              <div><p className="text-xs text-muted-foreground">Email</p><p>hello@buttermellow.com</p></div>
            </li>
            <li className="flex items-center gap-4">
              <span className="h-11 w-11 rounded-full bg-blush grid place-items-center"><MapPin className="h-4 w-4 text-primary" /></span>
              <div>
                <p className="text-xs text-muted-foreground">Visit</p>
                <p>Thudiyalur</p>
                <a
                  href="https://g.page/r/CVYVe_-wMG53EBM/review"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  View location and Google reviews
                </a>
              </div>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="bg-card rounded-3xl p-8 md:p-10 shadow-card space-y-4">
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
            <Input required name="name" placeholder="Your full name" className="mt-2 h-12 bg-background border-border/60" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
            <Input required type="email" name="email" placeholder="you@example.com" className="mt-2 h-12 bg-background border-border/60" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <Textarea required name="message" rows={5} placeholder="Tell us about your dream cake..." className="mt-2 bg-background border-border/60" />
          </div>
          <Button type="submit" size="lg" className="w-full rounded-full h-12 bg-foreground text-background hover:bg-foreground/90">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};
