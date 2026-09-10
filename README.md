# REALITY.EXE

The website for REALITY.EXE — a premium red-light technology brand. Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

See `PRODUCT.md` and `DESIGN.md` at the repo root for the brand's strategic and visual direction.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app` — routes: homepage narrative (`/`), device manifest (`/shop`), device files (`/product/[slug]`)
- `src/components/home` — the homepage's scroll narrative sections
- `src/components/product`, `src/components/shop` — commerce UI
- `src/components/cart`, `src/lib/cart-context.tsx` — placeholder cart (localStorage-backed, no real payment backend)
- `src/lib/products.ts` — the three placeholder devices (RX-01/02/03) and their specs

## Notes

- Product specs, certifications, and pricing are pre-launch placeholders, clearly labeled as such in the UI.
- Checkout is a prototype: it queues an order state locally and does not process payment.
