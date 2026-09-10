"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo/logo";
import { useCart } from "@/lib/cart-context";

const links = [
  { label: "SHOP", href: "/shop" },
  { label: "SYSTEM", href: "/#system" },
  { label: "SCIENCE", href: "/#science" },
];

export function SiteNav() {
  const cart = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-nav">
        <div className="container-edge flex h-16 items-center justify-between border-b border-hairline-black bg-black-reality/75 backdrop-blur-md">
          <Link href="/" className="text-ink-on-black" aria-label="REALITY.EXE home">
            <Logo size="md" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="system-label text-ink-on-black-muted hover:text-signal transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={cart.open}
              className="relative flex items-center gap-2 px-3 py-2 system-label text-ink-on-black hover:text-signal transition-colors duration-200 min-h-11"
              aria-label={`Open cart, ${cart.count} item${cart.count === 1 ? "" : "s"}`}
            >
              CART
              <span
                className={`flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-data transition-colors ${
                  cart.count > 0 ? "bg-signal text-white" : "bg-white/10 text-ink-on-black-faint"
                }`}
              >
                {cart.count}
              </span>
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-11 h-11 text-ink-on-black"
              aria-label="Open menu"
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
                <path d="M0 1H18" stroke="currentColor" strokeWidth="1.5" />
                <path d="M0 11H18" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile system panel */}
      <div
        className={`fixed inset-0 z-overlay md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div
          className="absolute inset-0 bg-black-deep/90 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute inset-y-0 right-0 w-[min(80vw,22rem)] bg-black-reality border-l border-hairline-black-strong transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="container-edge flex h-16 items-center justify-between border-b border-hairline-black">
            <span className="system-label text-ink-on-black-faint">MENU // INDEX</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-11 h-11 text-ink-on-black"
              aria-label="Close menu"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
          <nav className="container-edge flex flex-col gap-1 pt-8">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-baseline gap-4 py-4 border-b border-hairline-black"
              >
                <span className="font-data text-xs text-ink-on-black-faint">
                  0{i + 1}
                </span>
                <span className="font-display text-2xl tracking-tight group-hover:text-signal transition-colors">
                  {l.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
