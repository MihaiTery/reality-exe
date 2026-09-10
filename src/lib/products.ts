export type ProductSpec = { label: string; value: string };

export type ProductImage = { src: string; alt: string };

export type Product = {
  slug: string;
  designation: string; // e.g. "RX-01"
  codename: string; // e.g. "CRANIAL ARRAY"
  category: string; // human category
  image: ProductImage;
  price: number;
  tagline: string;
  summary: string;
  status: "IN STOCK" | "LIMITED" | "PRE-ORDER";
  benefits: string[];
  specs: ProductSpec[];
  usage: string[];
  dimensions: ProductSpec[];
  inBox: string[];
  faqs: { q: string; a: string }[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "rx-01-cranial-cap",
    designation: "RX-01",
    codename: "CRANIAL CAP",
    category: "Head / Scalp System",
    image: { src: "/products/rx-01-cranial-cap.webp", alt: "RX-01 Cranial Cap, a soft-shell red-light cap with a visible 850nm LED array lining the crown" },
    price: 149,
    tagline: "Wear it. Ten minutes. Override starts at the root.",
    summary:
      "A soft-shell red-light cap built for a fixed daily session — an 850nm near-infrared array lines the crown, run hands-free from a battery pack with an onboard LED display.",
    status: "IN STOCK",
    benefits: [
      "850nm near-infrared array lines the full crown for hands-free scalp coverage",
      "Battery-powered — no cable tethering you to an outlet mid-session",
      "Onboard LED display tracks session status at a glance",
      "Soft textile shell adjusts like a standard cap, one size fits most",
    ],
    specs: [
      { label: "WAVELENGTH", value: "850nm near-infrared" },
      { label: "IRRADIANCE", value: "Placeholder — pending bench data" },
      { label: "DIODE COUNT", value: "Placeholder — pending bench data" },
      { label: "SESSION LENGTH", value: "10 / 15 / 20 min presets (placeholder)" },
      { label: "POWER", value: "Battery-powered (cell spec placeholder)" },
      { label: "DISPLAY", value: "Onboard LED display screen" },
      { label: "EMC / SAFETY", value: "Bench-tested, pending final cert (placeholder)" },
    ],
    usage: [
      "Put the cap on and power on from the LED display.",
      "Select a session preset — the array runs hands-free while you go about a normal routine.",
      "Session ends automatically on the display; wipe the interior after use.",
    ],
    dimensions: [
      { label: "WEIGHT", value: "Placeholder — pending bench data" },
      { label: "SIZE", value: "One size, adjustable strap" },
      { label: "MATERIALS", value: "Soft textile shell (frame spec placeholder)" },
    ],
    inBox: ["RX-01 Cranial Cap", "Charge cable", "Travel pouch", "Quick-start card"],
    faqs: [
      {
        q: "Is this safe for daily use?",
        a: "RX-01 is designed for one session per day. Full safety and usage documentation ships with the unit and will be published in full ahead of launch — figures on this page are pre-launch placeholders.",
      },
      {
        q: "Does it work with all hair types and lengths?",
        a: "The cap is built for close scalp proximity; very dense or long hair may reduce effective output and is addressed in the included usage guide.",
      },
      {
        q: "What's the warranty?",
        a: "1-year limited hardware warranty (placeholder — final terms published at launch).",
      },
    ],
  },
  {
    slug: "rx-02-quad-matrix",
    designation: "RX-02",
    codename: "QUAD MATRIX",
    category: "Facial System",
    image: { src: "/products/rx-02-quad-matrix.webp", alt: "RX-02 Quad Matrix, a flexible black silicone face mask with adjustable straps and red LED zones lit across the eyes, nose, and mouth" },
    price: 329,
    tagline: "The face gets its own default. Override it.",
    summary:
      "A contoured silicone mask running four wavelengths — blue, red, near-infrared, deep near-infrared — across 236 diodes in one uninterrupted session, with AI voice cues marking the way through.",
    status: "IN STOCK",
    benefits: [
      "236-diode array across four wavelengths — 460nm / 665nm / 850nm / 1064nm — in one mask",
      "AI voice cues mark session start, midpoint, and end",
      "Flexible medical-grade silicone shell maps to facial geometry for close, even contact",
      "CE-marked source hardware",
    ],
    specs: [
      { label: "WAVELENGTH", value: "460nm / 665nm / 850nm / 1064nm" },
      { label: "IRRADIANCE", value: "Placeholder — pending bench data" },
      { label: "DIODE COUNT", value: "236" },
      { label: "SESSION LENGTH", value: "10 min fixed cycle" },
      { label: "POWER", value: "Rechargeable Li-ion, USB-C (placeholder)" },
      { label: "VOICE GUIDANCE", value: "AI voice cues (start / midpoint / end)" },
      { label: "EMC / SAFETY", value: "CE-marked source hardware — REALITY.EXE cert pending launch (placeholder)" },
    ],
    usage: [
      "Cleanse skin and position the shell using the bridge and chin anchor points.",
      "Start the cycle from the control node — voice cues confirm session start.",
      "A closing voice cue marks session end; shell releases with a single latch, no adhesives or straps.",
    ],
    dimensions: [
      { label: "WEIGHT", value: "Placeholder — pending bench data" },
      { label: "SIZE RANGE", value: "One size, articulating shell" },
      { label: "MATERIALS", value: "Medical-grade silicone shell" },
    ],
    inBox: ["RX-02 Quad Matrix", "USB-C charge cable", "Protective shell case", "Quick-start card"],
    faqs: [
      {
        q: "What do the four wavelengths do differently?",
        a: "Blue, red, near-infrared, and deep near-infrared sit at different depths in skin; the mask runs all four in one cycle rather than requiring separate sessions. Full protocol documentation ships with the unit ahead of launch.",
      },
      {
        q: "How often should I use it?",
        a: "Most protocols call for a daily 10-minute cycle; final usage guidance is published at launch. Figures on this page are pre-launch placeholders.",
      },
      {
        q: "What's the warranty?",
        a: "1-year limited hardware warranty (placeholder — final terms published at launch).",
      },
    ],
  },
  {
    slug: "rx-03-recline-array",
    designation: "RX-03",
    codename: "RECLINE ARRAY",
    category: "Full-Body System",
    image: { src: "/products/rx-03-recline-array.webp", alt: "RX-03 Recline Array, a large rectangular red LED mat glowing fully lit on a white plinth" },
    price: 549,
    tagline: "The whole body, one session, no defaults spared.",
    summary:
      "A fold-flat, whole-body mat carrying 640 diodes across dual wavelengths — lie down and let one session cover head to feet, with dimming, pulsing, and a therapeutic heating layer tuned from the same control node.",
    status: "LIMITED",
    benefits: [
      "640-diode array across dual wavelengths (660nm red / 850nm near-infrared), whole-body coverage in one lay-down session",
      "Dimming and pulsing modes (10Hz / 40Hz) tuned per session",
      "Add-on therapeutic heating layer for a warmer session profile",
      "Fold-flat fabric shell packs down for storage between sessions",
    ],
    specs: [
      { label: "WAVELENGTH", value: "660nm / 850nm" },
      { label: "IRRADIANCE", value: "Placeholder — pending bench data" },
      { label: "DIODE COUNT", value: "640 (5050 SMD)" },
      { label: "PULSE MODE", value: "10Hz / 40Hz, dimmable" },
      { label: "SESSION LENGTH", value: "10–90 min presets, 10 min steps" },
      { label: "POWER", value: "100–240V AC input, 12V to mat" },
      { label: "EMF", value: "≤2 μT at 1 inch" },
      { label: "EMC / SAFETY", value: "Bench-tested, pending final cert (placeholder)" },
    ],
    usage: [
      "Unroll the mat on a flat, stable surface and lie down for full coverage.",
      "Select a wavelength and pulse mode, then a session length, on the control node.",
      "Let the mat cool after a heated session, then fold flat for storage.",
    ],
    dimensions: [
      { label: "SHIPPING WEIGHT", value: "≈5.6kg (packaged)" },
      { label: "SIZE", value: "≈160 × 68cm (unfolded)" },
      { label: "MATERIALS", value: "Fabric shell, flexible diode layer" },
    ],
    inBox: ["RX-03 Recline Array", "AC power adapter", "Storage pouch", "Quick-start card"],
    faqs: [
      {
        q: "Can I use it daily?",
        a: "RX-03 is designed for a daily lay-down session; full usage guidance is published at launch. Figures on this page are pre-launch placeholders.",
      },
      {
        q: "Does the heating function work independently of the light?",
        a: "Heating and light run from the same control node; independent-mode behavior is documented in full ahead of launch.",
      },
      {
        q: "What's the warranty?",
        a: "2-year limited hardware warranty (placeholder — final terms published at launch).",
      },
    ],
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
