import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-50 h-1 origin-left bg-gradient-to-r from-primary via-primary-glow to-primary shadow-[0_0_12px_rgba(168,85,247,0.8)]"
      style={{ scaleX }}
    />
  );
}
