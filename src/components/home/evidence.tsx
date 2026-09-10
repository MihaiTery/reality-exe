"use client";

import { PRODUCTS } from "@/lib/products";
import { Reveal } from "@/components/motion/reveal";

const rows: { label: string; get: (p: (typeof PRODUCTS)[number]) => string }[] = [
  { label: "WAVELENGTH", get: (p) => p.specs.find((s) => s.label === "WAVELENGTH")?.value ?? "—" },
  { label: "IRRADIANCE", get: (p) => p.specs.find((s) => s.label === "IRRADIANCE")?.value ?? "—" },
  { label: "SESSION LENGTH", get: (p) => p.specs.find((s) => s.label === "SESSION LENGTH")?.value ?? "—" },
  { label: "RUNTIME", get: (p) => p.specs.find((s) => s.label === "RUNTIME")?.value ?? "—" },
];

const documentation = [
  { label: "BENCH TESTED", status: "COMPLETE" },
  { label: "THIRD-PARTY VERIFICATION", status: "IN PROGRESS" },
  { label: "EMC / SAFETY CERTIFICATION", status: "PENDING FINAL CERT" },
  { label: "HARDWARE WARRANTY", status: "2 YEARS (PLACEHOLDER)" },
];

export function Evidence() {
  return (
    <section id="science" className="relative bg-white-reality py-[clamp(5rem,14vh,9rem)] text-ink-on-white">
      <div className="container-edge mx-auto max-w-5xl">
        <Reveal className="max-w-xl">
          <span className="system-label text-signal-on-white">SYSTEM FILE</span>
          <p className="mt-4 text-balance font-display text-[clamp(1.9rem,5.5vw,3rem)] font-bold leading-[1.08] tracking-tight">
            The mystery stops here. The measurements don&apos;t.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-on-white-muted">
            Figures below are pre-launch placeholders pending final bench and
            third-party verification. We publish the real numbers before a
            single unit ships.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 overflow-x-auto border border-hairline-white">
          <table className="w-full min-w-[560px] border-collapse font-data text-sm">
            <thead>
              <tr className="border-b border-hairline-white text-left">
                <th className="px-5 py-4 text-xs font-medium tracking-[0.08em] text-ink-on-white-muted">
                  PARAMETER
                </th>
                {PRODUCTS.map((p) => (
                  <th key={p.slug} className="px-5 py-4 text-xs font-medium tracking-[0.08em] text-ink-on-white-muted">
                    {p.designation}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-hairline-white last:border-b-0">
                  <td className="px-5 py-4 text-ink-on-white-muted">{row.label}</td>
                  {PRODUCTS.map((p) => (
                    <td key={p.slug} className="px-5 py-4">{row.get(p)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal delay={0.18} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {documentation.map((d) => (
            <div key={d.label} className="border border-hairline-white px-5 py-4">
              <p className="font-data text-[11px] tracking-[0.08em] text-ink-on-white-muted">
                {d.label}
              </p>
              <p className="mt-1.5 text-sm font-medium">{d.status}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
