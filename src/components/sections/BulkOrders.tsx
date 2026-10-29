import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { apiUrl } from "@/lib/api";

const useCases = ["Weddings", "Birthdays", "Corporate events", "Parties", "School functions", "Family celebrations"];

export const BulkOrders = () => {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const phone = String(formData.get("phone") ?? "").trim();
    if (!/^\+?[0-9\s()-]{10,15}$/.test(phone)) {
      setStatus({ type: "error", message: "Please enter a valid phone number." });
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(apiUrl("/bulk-order-inquiry"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message ?? "We could not send your enquiry.");
      setStatus({ type: "success", message: "Your bulk order enquiry has been received. We will contact you with a custom quotation." });
      form.reset();
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "We could not send your enquiry. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="bulk-orders" className="py-24 md:py-32 bg-background">
      <div className="container grid lg:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-start">
        <div className="space-y-6 lg:sticky lg:top-32">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Made for gathering</span>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">Bulk Cake Orders for Every Special Occasion</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Planning a celebration? Tell us what you need and our team will help shape a bulk cake order around your guests, flavours, and date.
          </p>
          <div className="flex flex-wrap gap-2">
            {useCases.map((useCase) => <span key={useCase} className="rounded-full bg-blush px-4 py-2 text-sm">{useCase}</span>)}
          </div>
          <p className="text-sm text-muted-foreground">Bulk pricing and availability are confirmed after we review your requirements.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl bg-card p-6 md:p-10 shadow-card space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <label className="space-y-2 text-sm"><span>Customer Name</span><Input required name="name" placeholder="Your full name" /></label>
            <label className="space-y-2 text-sm"><span>Phone Number</span><Input required name="phone" type="tel" inputMode="tel" placeholder="+91 89408 51331" /></label>
            <label className="space-y-2 text-sm"><span>Email Address</span><Input required name="email" type="email" placeholder="you@example.com" /></label>
            <label className="space-y-2 text-sm"><span>Event Type</span><select required name="eventType" defaultValue="" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"><option value="" disabled>Select an event</option>{useCases.map((useCase) => <option key={useCase}>{useCase}</option>)}</select></label>
            <label className="space-y-2 text-sm"><span>Required Cake Quantity</span><Input required name="quantity" type="number" min="1" placeholder="e.g. 50" /></label>
            <label className="space-y-2 text-sm"><span>Required Delivery Date</span><Input required name="deliveryDate" type="date" /></label>
          </div>
          <label className="block space-y-2 text-sm"><span>Preferred Cake Flavours</span><Input required name="flavours" placeholder="Vanilla, chocolate, fruit cake..." /></label>
          <label className="block space-y-2 text-sm"><span>Additional Requirements</span><Textarea name="requirements" rows={4} placeholder="Sizes, packaging, theme, delivery notes..." /></label>
          {status && <p role="status" className={status.type === "success" ? "text-sm text-primary" : "text-sm text-destructive"}>{status.message}</p>}
          <Button type="submit" disabled={submitting} className="h-12 w-full rounded-full bg-foreground text-background hover:bg-foreground/90">{submitting ? "Sending enquiry..." : "Request Bulk Order"}</Button>
        </form>
      </div>
    </section>
  );
};