"use client";

import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import { DeviceVisual } from "@/components/product/device-visual";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/reveal";
import { useCart } from "@/lib/cart-context";
import { motion } from "framer-motion";

export function DeviceIndex() {
  const cart = useCart();

  return (
    <section className="relative bg-black-raised py-[clamp(5rem,14vh,9rem)]">
      <div className="container-edge mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-lg text-center">
          <span className="system-label text-ink-on-black-faint">ARTIFACT INDEX</span>
          <p className="mt-4 text-balance font-display text-[clamp(1.9rem,5.5vw,3rem)] font-bold leading-[1.08] tracking-tight">
            Three ways in.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {PRODUCTS.map((p) => (
            <motion.article
              key={p.slug}
              variants={revealItem}
              className="group relative flex flex-col overflow-hidden border border-hairline-black bg-black-reality transition-colors duration-300 hover:border-signal-dim"
            >
              <Link href={`/product/${p.slug}`} className="flex flex-1 flex-col">
                <div className="flex items-center justify-between border-b border-hairline-black px-5 py-3">
                  <span className="font-data text-[11px] tracking-[0.1em] text-ink-on-black-faint">
                    {p.designation}
                  </span>
                  <span className="flex items-center gap-1.5 font-data text-[10px] tracking-[0.1em] text-ink-on-black-faint">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                    {p.status}
                  </span>
                </div>

                <div className="flex items-center justify-center px-8 py-10">
                  <DeviceVisual
                    form={p.form}
                    className="h-36 w-36 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <div className="px-5 pb-5">
                  <p className="font-display text-lg tracking-tight">{p.codename}</p>
                  <p className="mt-1 text-xs text-ink-on-black-faint">{p.category}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-on-black-muted line-clamp-2">
                    {p.tagline}
                  </p>
                </div>
              </Link>

              <div className="mt-auto flex items-center justify-between border-t border-hairline-black px-5 py-4">
                <span className="font-data text-sm">${p.price.toLocaleString("en-US")}</span>
                <button
                  onClick={() => cart.add(p.slug)}
                  className="system-label text-ink-on-black-muted hover:text-signal transition-colors"
                >
                  ADD
                </button>
              </div>
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
