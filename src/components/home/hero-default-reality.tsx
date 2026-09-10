"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { LogoMark } from "@/components/logo/logo";
import { easeOutExpo } from "@/components/motion/reveal";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOutExpo } },
};

export function HeroDefaultReality() {
  const reduced = useReducedMotion();
  const Wrap = reduced ? "div" : motion.div;
  const wrapProps = reduced ? {} : { variants: container, initial: "hidden", animate: "visible" };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-black-reality grid-substrate-dark">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 38%, oklch(28% 0.09 25 / 0.35), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-edge relative flex items-center justify-between pt-20 sm:pt-24">
        <span className="font-data text-[11px] tracking-[0.14em] text-ink-on-black-faint">
          REALITY.EXE — SYSTEM ONLINE
        </span>
        <span className="hidden sm:inline font-data text-[11px] tracking-[0.14em] text-ink-on-black-faint">
          COORD 00.0000, 00.0000 — UNSET
        </span>
      </div>

      <Wrap {...wrapProps} className="relative container-edge flex flex-col items-center text-center py-10">
        <motion.div variants={reduced ? undefined : item} className="mb-6 text-ink-on-black-muted">
          <LogoMark size={40} />
        </motion.div>

        <motion.h1
          variants={reduced ? undefined : item}
          className="font-display font-extrabold uppercase leading-[0.94] tracking-[-0.03em] text-[clamp(2.75rem,11vw,6rem)]"
        >
          Exit the
          <br />
          default.
        </motion.h1>

        <motion.p
          variants={reduced ? undefined : item}
          className="mt-7 max-w-md text-balance text-[15px] leading-relaxed text-ink-on-black-muted sm:text-base"
        >
          You were taught what you were allowed to know. Enter Reality.
        </motion.p>
      </Wrap>

      <div className="container-edge relative flex justify-center pb-10 sm:pb-12">
        <div className="flex flex-col items-center gap-3">
          <span className="font-data text-[10px] tracking-[0.18em] text-ink-on-black-faint">
            SCROLL TO EXECUTE
          </span>
          <span className="relative h-9 w-px bg-hairline-black-strong overflow-hidden">
            <motion.span
              className="absolute inset-x-0 top-0 h-3 bg-signal"
              animate={reduced ? undefined : { y: ["-12px", "36px"] }}
              transition={
                reduced
                  ? undefined
                  : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
              }
            />
          </span>
        </div>
      </div>
    </section>
  );
}
