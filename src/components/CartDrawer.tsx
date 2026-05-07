import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Minus, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import type { Cake } from "@/data/cakes";

export type CartItem = Cake & { qty: number };

type Props = {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  items: CartItem[];
  onInc: (id: string) => void;
  onDec: (id: string) => void;
  onRemove: (id: string) => void;
};

export const CartDrawer = ({ open, onOpenChange, items, onInc, onDec, onRemove }: Props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");

  const placeOrder = async () => {
    if (items.length === 0) return;

    if (!name.trim() || !address.trim()) {
      setFormError("Please enter your name and address.");
      return;
    }

    try {
      setSending(true);
      setFormError("");

      const message = [
        "Hello Butter Mellow, I would like to place an order:",
        `Name: ${name}`,
        `Address: ${address}`,
        "Items:",
        ...items.map((item) => `- ${item.name} x${item.qty}`),
      ].join("\n");

      const whatsappNumber = "918940851331";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      toast.success("Your order message is ready on WhatsApp!");
      setName("");
      setAddress("");
      onOpenChange(false);
    } catch (error) {
      console.error("Failed to place order", error);
      setFormError("Sorry, we could not open WhatsApp. Please try again.");
      toast.error("WhatsApp message could not be opened.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="bg-background w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-serif text-3xl text-left">Your Cart</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-auto py-6 space-y-4">
          {items.length === 0 && (
            <p className="text-muted-foreground text-center py-12">Your cart is empty. Time for cake.</p>
          )}
          {items.map((i) => (
            <div key={i.id} className="flex gap-4 bg-card rounded-2xl p-3 shadow-card">
              <img src={i.image} alt={i.name} className="h-20 w-20 rounded-xl object-cover" />
              <div className="flex-1">
                <p className="font-serif text-lg leading-tight">{i.name}</p>
                {/* Price hidden by request */}
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => onDec(i.id)} className="h-7 w-7 rounded-full bg-secondary grid place-items-center"><Minus className="h-3 w-3" /></button>
                  <span className="w-6 text-center text-sm">{i.qty}</span>
                  <button onClick={() => onInc(i.id)} className="h-7 w-7 rounded-full bg-secondary grid place-items-center"><Plus className="h-3 w-3" /></button>
                  <button onClick={() => onRemove(i.id)} className="ml-auto text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-4 space-y-4">
          <div className="space-y-3">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="h-11 rounded-full bg-card border-border/60"
            />
            <Textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Delivery address"
              className="min-h-24 rounded-2xl bg-card border-border/60"
            />
            {formError && <p className="text-sm text-destructive">{formError}</p>}
          </div>
          <Button
            onClick={placeOrder}
            disabled={items.length === 0 || sending}
            className="w-full h-12 rounded-full bg-foreground text-background hover:bg-foreground/90"
          >
            {sending ? "Sending order..." : "Place Order"}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
