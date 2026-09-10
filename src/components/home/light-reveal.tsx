"use client";

import { motion } from "framer-motion";
import { Reveal, easeOutExpo } from "@/components/motion/reveal";

export function LightReveal() {
  return (
    <section className="relative bg-white-reality py-[clamp(5rem,14vh,9rem)] text-ink-on-white">
      <div className="container-edge mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="system-label text-signal-on-white">LIGHT IS INFORMATION</span>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-5 text-balance font-display text-[clamp(2rem,6vw,3.5rem)] font-bold leading-[1.08] tracking-tight">
            Every cell in you still speaks it.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-md text-pretty text-[15px] leading-relaxed text-ink-on-white-muted sm:text-base">
            Long before screens, before signals, before language — light told
            your body when to repair, when to rest, when to grow. Most of
            that channel still runs on default. REALITY.EXE tunes into it
            directly.
          </p>
        </Reveal>

        <Reveal delay={0.24} className="mt-14">
          <div className="mx-auto max-w-md">
            <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-white-dim">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(to right, oklch(55% 0.22 300), oklch(55% 0.22 260), oklch(60% 0.19 220), oklch(65% 0.19 150), oklch(75% 0.19 95), oklch(65% 0.22 45), oklch(58% 0.223 27), oklch(30% 0.15 25))",
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 1.1, ease: easeOutExpo, delay: 0.15 }}
              />
            </div>
            <div className="relative mt-3 h-8">
              <motion.div
                className="absolute top-0 flex flex-col items-center"
                style={{ right: "2%" }}
                initial={{ opacity: 0, y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 1.1 }}
              >
                <span className="h-2 w-px bg-signal-on-white" aria-hidden="true" />
                <span className="mt-1 whitespace-nowrap font-data text-[10px] tracking-[0.1em] text-signal-on-white">
                  630–850NM · ACTIVE BAND
                </span>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
