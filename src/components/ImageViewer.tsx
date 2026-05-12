import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ZoomIn, RotateCcw, Sparkles } from "lucide-react";

type Props = {
  src: string;
  alt: string;
};

export const ImageViewer = ({ src, alt }: Props) => {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(100);

  const handleZoom = (direction: "in" | "out") => {
    setZoom((prev) => {
      if (direction === "in") {
        return Math.min(prev + 20, 400);
      } else {
        return Math.max(prev - 20, 50);
      }
    });
  };

  const handleReset = () => {
    setZoom(100);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);

    if (!nextOpen) {
      setZoom(100);
    }
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={() => setOpen(true)}
        loading="lazy"
        width={800}
        height={800}
        className="h-full w-full object-cover cursor-zoom-in transition-transform duration-500 hover:scale-105"
      />

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="max-w-5xl max-h-[92vh] overflow-hidden border-0 bg-gradient-to-br from-background via-background to-secondary/40 p-0 shadow-2xl sm:rounded-3xl">
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          <DialogDescription className="sr-only">Preview of {alt}</DialogDescription>
          <div className="flex items-center justify-between border-b border-border/60 bg-background/80 px-5 py-4 backdrop-blur">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Cake Preview
              </div>
              <div className="text-base font-medium leading-tight">{alt}</div>
            </div>
            <div className="rounded-full border border-border/60 bg-muted/60 px-3 py-1 text-xs text-muted-foreground">
              Zoom: {zoom}%
            </div>
          </div>

          <div className="relative flex-1 overflow-auto bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_45%)] px-4 py-6 sm:px-6 sm:py-8">
            <div className="mx-auto flex min-h-[45vh] w-full max-w-4xl items-center justify-center rounded-2xl border border-border/50 bg-background/80 p-3 shadow-inner sm:p-5">
              <img
                src={src}
                alt={alt}
                className="max-h-[68vh] w-full rounded-2xl object-contain shadow-xl"
                style={{
                  transform: `scale(${zoom / 100})`,
                  transition: "transform 0.25s ease-in-out",
                }}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 border-t border-border/60 bg-background/90 px-5 py-4 backdrop-blur">
            <Button size="sm" variant="outline" onClick={handleReset}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleZoom("in")}
              disabled={zoom >= 400}
            >
              <ZoomIn className="h-4 w-4 mr-2" />
              Zoom In
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
