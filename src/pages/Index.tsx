import { useState } from "react";
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
