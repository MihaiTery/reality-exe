import type { Metadata } from "next";
import { ShopManifest } from "@/components/shop/shop-manifest";

export const metadata: Metadata = {
  title: "Shop",
  description: "The full REALITY.EXE device manifest — three ways to override the default.",
};

export default function ShopPage() {
  return (
    <div className="bg-white-reality text-ink-on-white">
      <div className="container-edge mx-auto max-w-5xl pt-32 pb-8 sm:pt-40">
        <span className="system-label text-signal-on-white">DEVICE MANIFEST</span>
        <h1 className="mt-4 text-balance font-display text-[clamp(2rem,6vw,3.5rem)] font-bold leading-[1.05] tracking-tight">
          Three devices. Zero defaults.
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-on-white-muted">
          Every unit ships from the same system, tuned to a different site on
          the body. Full specifications live on each device&apos;s file.
        </p>
      </div>

      <ShopManifest />
    </div>
  );
}
