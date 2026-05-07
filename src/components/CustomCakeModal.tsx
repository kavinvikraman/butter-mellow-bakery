import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CustomCakeModal = ({ open, onOpenChange }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/custom-cake-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          setSuccess(false);
          onOpenChange(false);
        }, 2000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Error sending message. Please check your connection.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Customize Your Cake</DialogTitle>
          <DialogDescription>
            Tell us about your dream cake. Our team will get back to you shortly!
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="py-8 text-center space-y-3">
            <div className="text-4xl">✓</div>
            <p className="font-medium">Thank you!</p>
            <p className="text-sm text-muted-foreground">
              We've received your custom cake request. Our team will contact you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Your Custom Cake Request</Label>
              <Textarea
                id="message"
                placeholder="Describe your cake... flavors, size, design, special requests, etc."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={loading}
                className="min-h-[120px] resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-full h-10 bg-foreground text-background hover:bg-foreground/90"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Request"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
