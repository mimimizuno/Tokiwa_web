import type { Variants } from "framer-motion";

export const fadeItem: Variants = {
  hidden: { opacity: 0, y: 6 },
  show:   { opacity: 1, y: 0 },
};

export const fadeIn = (delay = 0.2, duration = 0.6) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration },
});
