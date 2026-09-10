"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { PRODUCTS, type Product } from "@/lib/products";

export type CartLine = { slug: string; qty: number };

type CartContextValue = {
  lines: CartLine[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (slug: string, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  count: number;
  subtotal: number;
  items: { product: Product; qty: number; lineTotal: number }[];
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "realityexe.cart.v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // One-time hydration from localStorage after mount: state must start
    // empty to match the server-rendered HTML, then sync from the external
    // store once we're safely on the client. Not a derived-state mirror.
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // ignore corrupted/blocked storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // storage unavailable (private mode, etc.) — cart still works in-memory
    }
  }, [lines, hydrated]);

  const add = useCallback((slug: string, qty = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.slug === slug);
      if (existing) {
        return prev.map((l) => (l.slug === slug ? { ...l, qty: l.qty + qty } : l));
      }
      return [...prev, { slug, qty }];
    });
    setIsOpen(true);
  }, []);

  const remove = useCallback((slug: string) => {
    setLines((prev) => prev.filter((l) => l.slug !== slug));
  }, []);

  const setQty = useCallback((slug: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => l.slug !== slug)
        : prev.map((l) => (l.slug === slug ? { ...l, qty } : l))
    );
  }, []);

  const items = useMemo(
    () =>
      lines
        .map((l) => {
          const product = PRODUCTS.find((p) => p.slug === l.slug);
          if (!product) return null;
          return { product, qty: l.qty, lineTotal: product.price * l.qty };
        })
        .filter((x): x is { product: Product; qty: number; lineTotal: number } => x !== null),
    [lines]
  );

  const count = items.reduce((n, i) => n + i.qty, 0);
  const subtotal = items.reduce((n, i) => n + i.lineTotal, 0);

  const value: CartContextValue = {
    lines,
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    add,
    remove,
    setQty,
    count,
    subtotal,
    items,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
