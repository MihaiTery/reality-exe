"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

function WhiteRealityCore() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white-reality">
      <div
        className="absolute h-[60vmin] w-[60vmin] rounded-full blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, oklch(58% 0.223 27 / 0.55), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-center text-center px-6">
        <span className="system-label text-signal-on-white">WHITE REALITY DETECTED</span>
        <p className="mt-4 font-display text-[clamp(1.5rem,5vw,2.75rem)] font-bold tracking-tight text-ink-on-white">
          It was here the whole time.
        </p>
      </div>
    </div>
  );
}

function DoorsReduced() {
  return (
    <section className="relative bg-black-reality">
      <div className="container-edge flex min-h-[70svh] flex-col items-center justify-center gap-3 py-24 text-center">
        <span className="system-label text-ink-on-black-faint">SYSTEM OPENING</span>
        <p className="font-display text-[clamp(1.9rem,6vw,3.5rem)] font-bold tracking-tight">
          Behind the default: another reality.
        </p>
      </div>
      <div className="relative min-h-[70svh]">
        <WhiteRealityCore />
      </div>
    </section>
  );
}

export function SystemOpening() {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], ["0%", "0%", "-100%", "-100%"]);
  const rightX = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], ["0%", "0%", "100%", "100%"]);
  const seamGlow = useTransform(scrollYProgress, [0, 0.26, 0.3], [0.25, 1, 0]);
  const coreScale = useTransform(scrollYProgress, [0.28, 0.85], [1.08, 1]);
  const coreOpacity = useTransform(scrollYProgress, [0.28, 0.55], [0.5, 1]);
  const readoutOpacity = useTransform(scrollYProgress, [0, 0.22, 0.32], [1, 1, 0]);
  const unlockPct = useTransform(scrollYProgress, [0, 0.28], [0, 100]);
  const unlockRounded = useTransform(unlockPct, (v) => `${Math.min(100, Math.max(0, Math.round(v)))}%`);
  const seamGlowShadow = useMotionTemplate`0 0 24px 2px oklch(58% 0.223 27 / ${seamGlow})`;

  if (reduced) return <DoorsReduced />;

  return (
    <section ref={containerRef} className="relative h-[320vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ scale: coreScale, opacity: coreOpacity }}
        >
          <WhiteRealityCore />
        </motion.div>

        <motion.div
          className="absolute inset-y-0 left-0 w-1/2 flex items-center justify-end bg-black-reality"
          style={{ x: leftX }}
        >
          <span className="font-display pr-[3vw] text-[clamp(2.5rem,9vw,6rem)] font-extrabold uppercase tracking-[-0.03em] text-ink-on-black">
            System
          </span>
        </motion.div>

        <motion.div
          className="absolute inset-y-0 right-0 w-1/2 flex items-center justify-start bg-black-reality"
          style={{ x: rightX }}
        >
          <span className="font-display pl-[3vw] text-[clamp(2.5rem,9vw,6rem)] font-extrabold uppercase tracking-[-0.03em] text-ink-on-black">
            Opening
          </span>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-signal"
          style={{ opacity: seamGlow, boxShadow: seamGlowShadow }}
        />

        <motion.div
          className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center"
          style={{ opacity: readoutOpacity }}
        >
          <span className="font-data text-xs tracking-[0.14em] text-ink-on-black-faint">
            UNLOCKING SEQUENCE —{" "}
            <motion.span className="text-signal">{unlockRounded}</motion.span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
