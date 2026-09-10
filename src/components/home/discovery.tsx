"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { LogoMark } from "@/components/logo/logo";

const params = [
  { id: "PARAM_01", label: "CIRCADIAN WINDOW", status: "FACTORY DEFAULT", active: false },
  { id: "PARAM_02", label: "LIGHT EXPOSURE", status: "UNLOCKED", active: true },
  { id: "PARAM_03", label: "RECOVERY CYCLE", status: "FACTORY DEFAULT", active: false },
  { id: "PARAM_04", label: "BASELINE ENERGY", status: "FACTORY DEFAULT", active: false },
];

// The signal node's patrol inside the frame — starts and ends at the
// mark's actual gap position, so it always reads as coming home.
const HOME = { left: "25.8%", top: "91.4%" };
const dotPath = [HOME, { left: "78%", top: "20%" }, { left: "22%", top: "20%" }, HOME];

function SignalDot() {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <span
        className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal"
        style={HOME}
        aria-hidden="true"
      />
    );
  }

  return (
    <motion.span
      className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal shadow-[0_0_10px_2px_oklch(58%_0.223_27_/_0.55)]"
      animate={{ left: dotPath.map((p) => p.left), top: dotPath.map((p) => p.top) }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    />
  );
}

export function Discovery() {
  return (
    <section id="system" className="relative bg-black-reality py-[clamp(5rem,14vh,8rem)]">
      <div className="container-edge mx-auto grid max-w-5xl gap-14 lg:grid-cols-[minmax(0,220px)_1fr] lg:items-center lg:gap-20">
        <Reveal className="relative mx-auto aspect-square w-40 text-ink-on-black-muted sm:w-48 lg:w-full lg:mx-0" y={16}>
          <LogoMark size={200} showNode={false} className="h-full w-full" />
          <SignalDot />
        </Reveal>

        <div>
          <Reveal>
            <p className="font-display text-[clamp(1.5rem,4vw,2rem)] font-semibold leading-tight tracking-tight text-ink-on-black-muted">
              Reality is a system.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-1 font-display text-[clamp(1.5rem,4vw,2rem)] font-semibold leading-tight tracking-tight text-ink-on-black-muted">
              Every system ships with defaults.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-balance font-display text-[clamp(1.9rem,5.5vw,3rem)] font-bold leading-[1.08] tracking-tight">
              Yours was installed before you had a say — tuned for average,
              optimized for nobody in particular.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-5 font-display text-[clamp(1.9rem,5.5vw,3rem)] font-bold leading-[1.08] tracking-tight text-signal">
              REALITY.EXE builds the tools to override them.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-10 max-w-md">
            <ul className="flex flex-col gap-2.5 font-data text-xs">
              {params.map((p) => (
                <li key={p.id} className="flex items-baseline gap-2 text-ink-on-black-faint">
                  <span className="shrink-0">{p.id}</span>
                  <span className="shrink-0 text-ink-on-black-muted">{p.label}</span>
                  <span
                    className="flex-1 border-b border-dotted border-hairline-black-strong translate-y-[-3px]"
                    aria-hidden="true"
                  />
                  <span className={`shrink-0 ${p.active ? "text-signal" : ""}`}>
                    {p.status}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
