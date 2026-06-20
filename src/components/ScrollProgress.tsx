import { motion, useScroll } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed inset-x-0 top-0 z-[90] h-0.5 origin-left bg-primary shadow-[0_0_10px_var(--primary)]"
    />
  );
}
