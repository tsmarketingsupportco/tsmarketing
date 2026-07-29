import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const reduce = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (reduce) {
      setIsLoading(false);
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            onComplete?.();
          }, 300);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 18) + 8;
        return next > 100 ? 100 : next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [reduce, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background p-6"
        >
          {/* Ambient glow backdrop */}
          <div
            aria-hidden
            className="pointer-events-none absolute h-96 w-96 rounded-full opacity-60 blur-3xl animate-pulse-glow"
            style={{
              background: "radial-gradient(circle, oklch(0.68 0.20 285 / 0.5), transparent 70%)",
            }}
          />

          <div className="relative flex flex-col items-center text-center">
            {/* Logo / Emblem visual icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/40 bg-elevated/80 p-2 shadow-[0_0_50px_rgba(168,85,247,0.5)] backdrop-blur-xl"
            >
              <img
                src="https://46ykd16d8k.ufs.sh/f/GTSgDGA07Fis7Nzh0Vi9Lm8sAawMkrK5bYyBnfclOhpCiZTS"
                alt="TS Marketing Logo"
                className="h-full w-full rounded-xl object-contain"
              />
            </motion.div>


            {/* Percentage counter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 flex items-baseline gap-1"
            >
              <span className="font-display text-5xl font-extrabold tracking-tight text-foreground md:text-6xl">
                {progress}
              </span>
              <span className="font-display text-xl font-bold text-primary-glow">%</span>
            </motion.div>

            {/* Status indicator pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-surface/80 px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-lg backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              Loading Conversion Engine...
            </motion.div>

            {/* Progress bar line */}
            <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-elevated/80 border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-primary-glow"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
