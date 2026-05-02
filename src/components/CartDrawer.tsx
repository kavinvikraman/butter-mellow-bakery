import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
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
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
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
                <p className="text-sm text-muted-foreground">${i.price}</p>
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
          <div className="flex justify-between font-serif text-2xl">
            <span>Total</span><span>${total}</span>
          </div>
          <Button disabled={items.length === 0} className="w-full h-12 rounded-full bg-foreground text-background hover:bg-foreground/90">
            Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
