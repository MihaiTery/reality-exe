"use client";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function Purchase() {
  return (
    <section className="relative overflow-hidden bg-black-reality py-[clamp(6rem,18vh,11rem)]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 50% 100%, oklch(28% 0.09 25 / 0.4), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="container-edge relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <Reveal>
          <span className="system-label text-ink-on-black-faint">RUN — FINAL PROMPT</span>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 text-balance font-display text-[clamp(2.25rem,7vw,4.5rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.03em]">
            The default ends
            <br />
            when you decide it does.
          </p>
        </Reveal>
        <Reveal delay={0.16} className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <Button href="/shop" variant="primary">
            Enter the shop
          </Button>
          <Button href="/#science" variant="ghost-light">
            Read the file
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
