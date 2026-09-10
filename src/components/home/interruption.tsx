"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { easeOutExpo } from "@/components/motion/reveal";

const crack: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: easeOutExpo, delay: 0.5 },
  },
};

const glitchText: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.01 },
  },
};

// The one deliberate glitch moment on the page: a brief chromatic-split
// jitter as the status line flips from reassurance to interruption.
const glitchLayer: Variants = {
  hidden: { x: 0, opacity: 0 },
  visible: {
    x: [0, -5, 4, -2, 0],
    opacity: [0, 1, 1, 1, 0],
    transition: { duration: 0.55, times: [0, 0.2, 0.45, 0.7, 1], delay: 0.15 },
  },
};

export function Interruption() {
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-black-reality py-[clamp(6rem,16vh,10rem)] overflow-hidden">
      <div className="container-edge relative flex flex-col items-center text-center">
        <div className="relative">
          {!reduced && (
            <>
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 font-data text-[clamp(1rem,3.4vw,1.5rem)] tracking-[0.1em] text-signal mix-blend-screen"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={glitchLayer}
              >
                SYSTEM STATUS: INTERRUPTED
              </motion.span>
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 font-data text-[clamp(1rem,3.4vw,1.5rem)] tracking-[0.1em] text-white mix-blend-screen"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={{
                  hidden: { x: 0, opacity: 0 },
                  visible: {
                    x: [0, 5, -4, 2, 0],
                    opacity: [0, 1, 1, 1, 0],
                    transition: { duration: 0.55, times: [0, 0.2, 0.45, 0.7, 1], delay: 0.15 },
                  },
                }}
              >
                SYSTEM STATUS: INTERRUPTED
              </motion.span>
            </>
          )}
          <motion.p
            className="relative font-data text-[clamp(1rem,3.4vw,1.5rem)] tracking-[0.1em] text-ink-on-black-muted"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={glitchText}
          >
            SYSTEM STATUS: <span className="text-signal">INTERRUPTED</span>
          </motion.p>
        </div>

        <motion.div
          className="mt-9 h-px w-full max-w-md bg-signal origin-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={crack}
        />

        <motion.p
          className="mt-9 max-w-lg text-balance font-display text-[clamp(1.5rem,4.4vw,2.5rem)] font-semibold leading-tight tracking-tight"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: easeOutExpo, delay: reduced ? 0 : 0.75 }}
        >
          Something under the default just moved.
        </motion.p>
      </div>
    </section>
  );
}
