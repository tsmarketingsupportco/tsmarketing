import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "fade-up" | "fade" | "blur-in" | "3d-up" | "scale-up";

export function Reveal({
  children,
  delay = 0,
  className,
  variant = "fade-up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: Variant;
} & MotionProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const initial =
    variant === "fade"
      ? { opacity: 0 }
      : variant === "blur-in"
      ? { opacity: 0, filter: "blur(12px)", y: 12, scale: 0.96 }
      : variant === "3d-up"
      ? { opacity: 0, y: 30, scale: 0.93, rotateX: 6 }
      : variant === "scale-up"
      ? { opacity: 0, scale: 0.9 }
      : { opacity: 0, y: 20, scale: 0.97 };

  const animate =
    variant === "fade"
      ? { opacity: 1 }
      : variant === "blur-in"
      ? { opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }
      : variant === "3d-up"
      ? { opacity: 1, y: 0, scale: 1, rotateX: 0 }
      : variant === "scale-up"
      ? { opacity: 1, scale: 1 }
      : { opacity: 1, y: 0, scale: 1 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}

