# Design

## Theme

Two realities, one interface. **Black Reality** is the default state: near-total black, the "system" the visitor starts inside. **White Reality** is what's underneath it: a colder, clinical near-white that the homepage's signature scroll moment physically opens into. Red is the only color permitted to cross between the two — the signal that something in the system is active.

Reference: Vercel's pure-black monochrome restraint, crossed with a mission-control/instrument-panel signal red (the red of an active status light or a laser diode, not a Ferrari or Netflix brand-red wash). Color strategy is **Drenched** for the two realities themselves (black IS the surface, white IS the surface) and **Committed-but-narrow** for red — it never exceeds roughly 5–10% of any given viewport, so it stays a signal.

## Color

OKLCH throughout; tinted a hair toward the red hue (25–29°) rather than true neutral, so black/white/gray all feel like they belong to the same system as the accent.

```
--reality-black       oklch(9% 0.004 25)     /* Black Reality surface */
--reality-black-raised oklch(13% 0.006 25)   /* panels/cards on black */
--reality-white       oklch(98.5% 0.002 90)  /* White Reality surface */
--reality-white-dim   oklch(94% 0.003 90)    /* panels on white */

--ink-on-black        oklch(97% 0 0)         /* primary text on black */
--ink-on-black-muted  oklch(74% 0.01 25)     /* secondary text on black, AA-safe */
--ink-on-black-faint  oklch(46% 0.015 25)    /* tertiary / large-text-only on black */

--ink-on-white        oklch(12% 0.01 25)     /* primary text on white */
--ink-on-white-muted  oklch(40% 0.02 25)     /* secondary text on white, AA-safe */

--signal-red          oklch(58% 0.223 27)    /* the accent: active/energized/scanning */
--signal-red-bright   oklch(67% 0.235 29)    /* glow / hover / high-energy state */
--signal-red-dim      oklch(28% 0.11 25)     /* hairline borders, resting indicators on black */
--signal-red-on-white oklch(53% 0.22 27)     /* accent recalibrated for AA on white */

--hairline-on-black   oklch(100% 0 0 / 0.08)
--hairline-on-white   oklch(0% 0 0 / 0.08)
```

Rules: red never fills a large surface — it marks a state (live, active, scanning, in stock, error) or a single decisive element (a CTA, a light source, a cursor). Body copy is never gray-on-gray at low contrast; `-muted` tokens are pre-checked to ≥4.5:1 on their paired surface.

## Typography

Voice words used to select type: **precise, systemic, restrained-but-alive** — the feel of an instrument nameplate or a classified equipment manifest, not a developer tool and not a spa brochure.

Three families, three distinct jobs (contrast pairing, not two similar grotesques):

- **Display — Unbounded** (Google Fonts, variable weight). Used sparingly, only for the handful of large narrative statements (hero lines, section turns). Geometric, squared-off glyph shapes that echo the logo's rectangular system-object language. Ceiling `clamp()` ≤ 6rem, letter-spacing floor ≥ -0.04em (tightened only slightly, since the geometry is already dense).
- **UI/Body — Familjen Grotesk** (Google Fonts, variable weight). Carries navigation, body copy, product copy, buttons — the humanist counterweight to Unbounded's geometry. This is ~90% of all text on the site.
- **Technical/Data — JetBrains Mono** (Google Fonts). Reserved for genuinely technical content: specs, wavelengths, coordinates, sequence/part numbers, system status labels, timestamps. Earned here because the brand's content really is technical data, not used as a "developer" costume.

Scale: fluid `clamp()`, ratio ≥1.25 between steps. Light text on black gets +0.05–0.1 line-height over the same size on white. `text-wrap: balance` on all headings; `text-wrap: pretty` on body copy over ~2 lines.

## Layout

- Mobile-first; each major homepage moment is designed as a full-viewport "scene" with one dominant idea, one dominant object, one action — dense multi-column composition is reserved for the technical/credibility and product-index layers, never the narrative layers.
- Asymmetry and off-grid placement are allowed and expected in the narrative sections (Interruption, Discovery, System Opening); the product and technical sections tighten into a controlled, more conventional grid to signal "you have left the mystery and entered the file."
- Fluid spacing via `clamp()`. Vary rhythm deliberately: tight clusters (a device readout) next to generous voids (a single line of copy alone in a black frame).
- No side-stripe borders, no gradient text, no default card grids for products — see Components.

## Motion

- The signature moment: on the homepage, a pinned scroll sequence where black panels (the "doors" of the System Opening scene) translate/rotate/clip apart under scroll control to expose the White Reality layer already sitting beneath them in the DOM — implemented as transform/clip-path on a few large panels, not per-element animation, so it stays performant.
- Ease-out-expo/quint curves everywhere; no bounce or elastic.
- Motion is staggered per what it reveals (a device's spec lines stagger in as data; a headline enters as a block) — never one uniform fade applied identically to every section.
- Rare, meaningful glitch/displacement accents only at true state changes (e.g. the interruption moment); never ambient/constant.
- Full `prefers-reduced-motion` alternative for every scroll-driven and pinned effect (crossfade/instant reveal, no pinning, doors simply absent with content already in place).
- All homepage content is present and legible in the DOM by default; scroll-linked transforms enhance an already-correct static layout rather than gating visibility.

## Components

- **Nav**: minimal fixed bar — wordmark left, SHOP / SYSTEM / SCIENCE right (desktop) or a system-style slide-out panel (mobile), cart as a small live counter, not a generic icon-only cart glyph.
- **Product presentation**: not standard ecommerce cards. Homepage introduces devices as an "artifact index" (device designation, one image, one spec line, status indicator) inside the narrative flow. The shop/index view uses a controlled manifest-style list/grid (`repeat(auto-fit, minmax(280px,1fr))`) rather than uniform icon+heading+text cards.
- **Product detail**: shifts register deliberately — calmer, symmetrical, a "technical file" layout (spec table in JetBrains Mono, benefit copy in Familjen Grotesk, one hero product visual) with obvious Add to Cart / price / variant controls that never get sacrificed to art direction.
- **Buttons/CTAs**: solid signal-red fill for primary purchase actions, black/white bordered ghost buttons for secondary actions; consistent, always legible, never hidden inside an experimental interaction.
- **Cart**: slide-in panel, White-Reality surface (signals "you are transacting now, not exploring"), clear line items, obvious checkout CTA.

## Accessibility

WCAG AA minimum. All `-muted` text tokens pre-validated at ≥4.5:1 on their paired surface; large display type ≥3:1. Every scroll-driven/pinned animation has a `prefers-reduced-motion` fallback that preserves narrative order without motion. Focus states are visible signal-red outlines on both realities. No content or purchase action is ever gated behind a motion-only reveal.
