"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";

function formatPrice(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}

export function CartDrawer() {
  const cart = useCart();
  const [checkedOut, setCheckedOut] = useState(false);

  // Reset the "checked out" view whenever the drawer transitions closed,
  // adjusted during render (React's recommended alternative to an
  // effect+setState pair for resetting state on a prop change).
  const [wasOpen, setWasOpen] = useState(cart.isOpen);
  if (cart.isOpen !== wasOpen) {
    setWasOpen(cart.isOpen);
    if (!cart.isOpen) setCheckedOut(false);
  }

  useEffect(() => {
    if (!cart.isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && cart.close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [cart, cart.isOpen]);

  return (
    <div
      className={`fixed inset-0 z-drawer transition-opacity duration-300 ${
        cart.isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Cart"
    >
      <div className="absolute inset-0 bg-black-deep/70 backdrop-blur-sm" onClick={cart.close} />

      <div
        className={`absolute inset-y-0 right-0 w-full sm:w-[26rem] bg-white-reality text-ink-on-white flex flex-col transition-transform duration-400 ease-out ${
          cart.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container-edge flex h-16 items-center justify-between border-b border-hairline-white shrink-0">
          <span className="system-label text-ink-on-white-muted">
            CART // {cart.count} UNIT{cart.count === 1 ? "" : "S"}
          </span>
          <button
            onClick={cart.close}
            className="flex items-center justify-center w-11 h-11 -mr-2"
            aria-label="Close cart"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        {checkedOut ? (
          <div className="flex-1 flex flex-col items-center justify-center container-edge text-center gap-4">
            <span className="system-label text-signal-on-white">ORDER_RECEIVED</span>
            <p className="font-display text-2xl tracking-tight">Session queued.</p>
            <p className="text-sm text-ink-on-white-muted max-w-xs">
              This is a prototype checkout — no payment was processed. A real order
              flow ships before launch.
            </p>
            <Button variant="ghost-dark" onClick={cart.close} className="mt-4">
              Continue
            </Button>
          </div>
        ) : cart.items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center container-edge text-center gap-4">
            <span className="system-label text-ink-on-white-muted">CART_EMPTY</span>
            <p className="text-sm text-ink-on-white-muted max-w-xs">
              Nothing queued yet. The devices are on the other side of that door.
            </p>
            <Button href="/shop" variant="ghost-dark" onClick={cart.close}>
              Browse devices
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto container-edge py-6 flex flex-col gap-6">
              {cart.items.map(({ product, qty, lineTotal }) => (
                <li key={product.slug} className="flex gap-4">
                  <div className="w-16 h-16 shrink-0 border border-hairline-white bg-white-dim flex items-center justify-center">
                    <span className="font-data text-[10px] text-ink-on-white-muted">
                      {product.designation}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-display text-sm tracking-tight">{product.codename}</p>
                        <p className="font-data text-[11px] text-ink-on-white-muted mt-0.5">
                          {product.designation}
                        </p>
                      </div>
                      <p className="font-data text-sm shrink-0">{formatPrice(lineTotal)}</p>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center border border-hairline-white">
                        <button
                          className="w-7 h-7 flex items-center justify-center text-sm hover:text-signal-on-white"
                          onClick={() => cart.setQty(product.slug, qty - 1)}
                          aria-label={`Decrease quantity of ${product.codename}`}
                        >
                          −
                        </button>
                        <span className="w-6 text-center font-data text-xs">{qty}</span>
                        <button
                          className="w-7 h-7 flex items-center justify-center text-sm hover:text-signal-on-white"
                          onClick={() => cart.setQty(product.slug, qty + 1)}
                          aria-label={`Increase quantity of ${product.codename}`}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => cart.remove(product.slug)}
                        className="system-label text-ink-on-white-muted hover:text-signal-on-white"
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="container-edge py-6 border-t border-hairline-white shrink-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-ink-on-white-muted">Subtotal</span>
                <span className="font-data text-base">{formatPrice(cart.subtotal)}</span>
              </div>
              <p className="text-xs text-ink-on-white-muted mb-4">
                Shipping and taxes calculated at checkout.
              </p>
              <Button
                variant="primary"
                className="w-full"
                onClick={() => setCheckedOut(true)}
              >
                Checkout
              </Button>
              <Link
                href="/shop"
                onClick={cart.close}
                className="block text-center mt-3 system-label text-ink-on-white-muted hover:text-signal-on-white"
              >
                Continue browsing
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
