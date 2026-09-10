"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { DeviceVisual } from "@/components/product/device-visual";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function ProductDetail({ product }: { product: Product }) {
  const cart = useCart();
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  function handleAdd() {
    cart.add(product.slug, qty);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1800);
  }

  return (
    <div className="bg-white-reality text-ink-on-white">
      <div className="container-edge mx-auto max-w-5xl pt-28 pb-6 sm:pt-32">
        <nav className="flex items-center gap-2 font-data text-[11px] tracking-[0.08em] text-ink-on-white-muted">
          <Link href="/shop" className="hover:text-signal-on-white transition-colors">
            SHOP
          </Link>
          <span aria-hidden="true">/</span>
          <span>{product.designation}</span>
        </nav>
      </div>

      {/* Hero / purchase block */}
      <div className="container-edge mx-auto grid max-w-5xl gap-10 pb-16 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex items-center justify-center border border-hairline-white bg-white-dim p-10 sm:p-16">
          <DeviceVisual form={product.form} className="h-64 w-64 sm:h-72 sm:w-72" />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex items-center gap-3">
            <span className="font-data text-xs text-ink-on-white-muted">{product.designation}</span>
            <span className="flex items-center gap-1.5 font-data text-[10px] tracking-[0.1em] text-signal-on-white">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-on-white" aria-hidden="true" />
              {product.status}
            </span>
          </div>

          <h1 className="mt-3 text-balance font-display text-[clamp(2rem,4.5vw,2.75rem)] font-bold leading-[1.05] tracking-tight">
            {product.codename}
          </h1>
          <p className="mt-1 text-sm text-ink-on-white-muted">{product.category}</p>

          <p className="mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-ink-on-white-muted">
            {product.summary}
          </p>

          <ul className="mt-6 flex flex-col gap-2.5">
            {product.benefits.map((b) => (
              <li key={b} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-on-white" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-baseline gap-3 border-t border-hairline-white pt-6">
            <span className="font-data text-2xl">${product.price.toLocaleString("en-US")}</span>
            <span className="text-xs text-ink-on-white-muted">USD, shipping calculated at checkout</span>
          </div>

          <div className="mt-5 flex items-center gap-4">
            <div className="flex items-center border border-hairline-white">
              <button
                className="flex h-12 w-11 items-center justify-center text-base hover:text-signal-on-white"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-8 text-center font-data text-sm">{qty}</span>
              <button
                className="flex h-12 w-11 items-center justify-center text-base hover:text-signal-on-white"
                onClick={() => setQty((q) => q + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <Button variant="primary" className="flex-1" onClick={handleAdd}>
              {justAdded ? "Added" : "Add to cart"}
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Specifications */}
      <section className="border-t border-hairline-white bg-white-dim py-16">
        <div className="container-edge mx-auto max-w-5xl">
          <Reveal>
            <span className="system-label text-signal-on-white">SPECIFICATIONS</span>
          </Reveal>
          <Reveal delay={0.06} className="mt-8 grid gap-x-10 gap-y-0 sm:grid-cols-2">
            {product.specs.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between gap-4 border-b border-hairline-white py-3 font-data text-sm">
                <span className="text-ink-on-white-muted">{s.label}</span>
                <span className="text-right">{s.value}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Usage */}
      <section className="border-t border-hairline-white py-16">
        <div className="container-edge mx-auto max-w-5xl grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="system-label text-signal-on-white">USAGE PROTOCOL</span>
            </Reveal>
            <ol className="mt-6 flex flex-col gap-5">
              {product.usage.map((step, i) => (
                <Reveal key={step} delay={i * 0.06}>
                  <li className="flex gap-4">
                    <span className="font-data text-xs text-ink-on-white-muted pt-0.5">
                      0{i + 1}
                    </span>
                    <span className="text-sm leading-relaxed">{step}</span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <Reveal>
              <span className="system-label text-signal-on-white">DIMENSIONS &amp; MATERIALS</span>
            </Reveal>
            <Reveal delay={0.06} className="mt-6 flex flex-col gap-0">
              {product.dimensions.map((d) => (
                <div key={d.label} className="flex items-baseline justify-between gap-4 border-b border-hairline-white py-3 font-data text-sm">
                  <span className="text-ink-on-white-muted">{d.label}</span>
                  <span className="text-right">{d.value}</span>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.12} className="mt-8">
              <span className="system-label text-ink-on-white-muted">IN THE BOX</span>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-ink-on-white-muted">
                {product.inBox.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-hairline-white bg-white-dim py-16">
        <div className="container-edge mx-auto max-w-3xl">
          <Reveal>
            <span className="system-label text-signal-on-white">FAQ</span>
          </Reveal>
          <div className="mt-6 flex flex-col">
            {product.faqs.map((f) => (
              <details key={f.q} className="group border-b border-hairline-white py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium">
                  {f.q}
                  <span className="shrink-0 font-data text-ink-on-white-muted group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-on-white-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline-white py-16">
        <div className="container-edge mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
          <span className="system-label text-ink-on-white-muted">MANIFEST</span>
          <Link href="/shop" className="font-display text-xl tracking-tight hover:text-signal-on-white transition-colors">
            See the full device manifest →
          </Link>
        </div>
      </section>
    </div>
  );
}
