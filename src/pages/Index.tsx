import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Categories } from "@/components/sections/Categories";
import { Featured } from "@/components/sections/Featured";
import { CustomCake } from "@/components/sections/CustomCake";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { CartDrawer, type CartItem } from "@/components/CartDrawer";
import type { Cake, CategoryKey } from "@/data/cakes";

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("all");
  const [cakes, setCakes] = useState<Cake[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCakes = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("http://localhost:5000/cakes");
        if (!response.ok) {
          throw new Error(`Failed to load cakes: ${response.status}`);
        }

        const data = (await response.json()) as Cake[];
        setCakes(data);
      } catch (err) {
        console.error("Failed to fetch cakes", err);
        setError("We could not load the cake menu right now. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadCakes();
  }, []);

  const addToCart = (cake: Cake) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === cake.id);
      if (existing) return prev.map((p) => (p.id === cake.id ? { ...p, qty: p.qty + 1 } : p));
      return [...prev, { ...cake, qty: 1 }];
    });
    toast.success(`${cake.name} added to cart`);
  };

  const inc = (id: string) => setCart((p) => p.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  const dec = (id: string) =>
    setCart((p) => p.flatMap((i) => (i.id === id ? (i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : []) : [i])));
  const remove = (id: string) => setCart((p) => p.filter((i) => i.id !== id));

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
      <main>
        <Hero />
        <About />
        <Categories selected={selectedCategory} onSelect={setSelectedCategory} />
        <Featured
          cakes={cakes}
          loading={loading}
          error={error}
          onAdd={addToCart}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <CustomCake />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <CartDrawer
        open={cartOpen}
        onOpenChange={setCartOpen}
        items={cart}
        onInc={inc}
        onDec={dec}
        onRemove={remove}
      />
    </div>
  );
};

export default Index;
