"use client";

import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { Reveal } from "@/components/motion/reveal";

export function ShopManifest() {
  const cart = useCart();

  return (
    <div className="container-edge mx-auto max-w-5xl pb-28">
      <div className="border-t border-hairline-white">
        {PRODUCTS.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.06}>
            <div className="flex flex-col gap-5 border-b border-hairline-white py-8 sm:flex-row sm:items-center sm:gap-8">
              <Link
                href={`/product/${p.slug}`}
                className="relative aspect-[4/5] w-full shrink-0 overflow-hidden border border-hairline-white bg-white-dim sm:w-32"
              >
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </Link>

              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-data text-xs text-ink-on-white-muted">
                    {p.designation}
                  </span>
                  <span className="font-data text-[10px] tracking-[0.1em] text-signal-on-white">
                    {p.status}
                  </span>
                </div>
                <Link href={`/product/${p.slug}`}>
                  <p className="mt-1 font-display text-xl tracking-tight hover:text-signal-on-white transition-colors">
                    {p.codename}
                  </p>
                </Link>
                <p className="text-xs text-ink-on-white-muted">{p.category}</p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-on-white-muted">
                  {p.tagline}
                </p>
              </div>

              <div className="flex shrink-0 items-center justify-between gap-4 sm:flex-col sm:items-end sm:gap-3">
                <span className="font-data text-base">${p.price.toLocaleString("en-US")}</span>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/product/${p.slug}`}
                    className="system-label text-ink-on-white-muted hover:text-signal-on-white transition-colors"
                  >
                    VIEW FILE
                  </Link>
                  <button
                    onClick={() => cart.add(p.slug)}
                    className="border border-hairline-white px-4 py-2 system-label hover:border-signal-on-white hover:text-signal-on-white transition-colors min-h-11"
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
