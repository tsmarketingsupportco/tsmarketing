import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X } from "lucide-react";

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageZoom({ src, alt, className = "" }: ImageZoomProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const layoutId = `zoom-${src}`;

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isZoomed) setIsZoomed(false);
    };
    
    // Handle scroll to close for better UX
    const handleScroll = () => {
      if (isZoomed) setIsZoomed(false);
    };

    if (isZoomed) {
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isZoomed]);

  return (
    <>
      {/* Thumbnail / Original Image */}
      <div 
        className="relative cursor-zoom-in group/zoom h-full w-full"
        onClick={() => setIsZoomed(true)}
      >
        <motion.img
          layoutId={layoutId}
          src={src}
          alt={alt}
          className={className}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        {/* Subtle hover overlay with icon */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover/zoom:bg-black/20 flex items-center justify-center opacity-0 group-hover/zoom:opacity-100 rounded-[inherit]">
          <div className="bg-background/80 backdrop-blur-sm text-foreground p-3 rounded-full shadow-xl transform scale-90 transition-transform duration-300 group-hover/zoom:scale-100">
            <ZoomIn className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Overlay */}
      <AnimatePresence>
        {isZoomed && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-background/90 backdrop-blur-md cursor-zoom-out"
              onClick={() => setIsZoomed(false)}
            />
            
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              onClick={() => setIsZoomed(false)}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Zoomed Image */}
            <div className="relative z-10 w-full h-full max-w-6xl flex items-center justify-center pointer-events-none">
              <motion.img
                layoutId={layoutId}
                src={src}
                alt={alt}
                className="w-full h-auto max-h-[90vh] object-contain rounded-2xl shadow-2xl pointer-events-auto cursor-zoom-out"
                onClick={() => setIsZoomed(false)}
                transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
