"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

/** Reveals its children on scroll-into-view with a deliberate upward
 * settle. Respects reduced motion by rendering in its final state with no
 * transition, never gating content visibility on the animation firing. */
export function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
  once = true,
  amount = 0.4,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: easeOutExpo },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

/** Stagger container — children should be <Reveal> or share the same
 * hidden/visible variant shape. Use for groups that should read as one
 * choreographed unit (a spec list, a stacked headline). */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  amount = 0.3,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ staggerChildren: stagger }}
    >
      {children}
    </motion.div>
  );
}

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutExpo } },
};

export { easeOutExpo };
