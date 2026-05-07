import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

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

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={() => setOpen(true)}
        loading="lazy"
        width={800}
        height={800}
        className="h-full w-full object-cover cursor-pointer transition-transform hover:scale-105"
      />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col p-0 overflow-hidden">
          <div className="bg-background p-4 border-b flex items-center justify-between">
            <div className="text-sm font-medium">{alt}</div>
            <div className="text-sm text-muted-foreground">Zoom: {zoom}%</div>
          </div>

          <div className="flex-1 overflow-auto flex items-center justify-center bg-background/50">
            <img
              src={src}
              alt={alt}
              className="max-w-full object-contain"
              style={{
                transform: `scale(${zoom / 100})`,
                transition: "transform 0.2s ease-in-out",
              }}
            />
          </div>

          <div className="bg-background p-4 border-t flex gap-2 justify-center">
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleZoom("out")}
              disabled={zoom <= 50}
            >
              <ZoomOut className="h-4 w-4 mr-2" />
              Zoom Out
            </Button>
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
