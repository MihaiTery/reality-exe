export type ProductSpec = { label: string; value: string };

export type Product = {
  slug: string;
  designation: string; // e.g. "RX-01"
  codename: string; // e.g. "CRANIAL ARRAY"
  category: string; // human category
  form: "head" | "face" | "body";
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
    slug: "rx-01-cranial-array",
    designation: "RX-01",
    codename: "CRANIAL ARRAY",
    category: "Head / Scalp System",
    form: "head",
    price: 349,
    tagline: "Light, worn where the default never looked.",
    summary:
      "A soft-shell red-light cap built for a fixed daily session — full-scalp coverage from a diode array engineered to sit close to skin without heat buildup.",
    status: "IN STOCK",
    benefits: [
      "Full-scalp diode coverage in one fixed session, no handheld positioning",
      "Dual-wavelength array (red + near-infrared) run from a single low-profile pack",
      "Soft-shell interior distributes contact pressure evenly across the scalp",
      "Silent operation — wear it through a normal fifteen-minute wind-down",
    ],
    specs: [
      { label: "WAVELENGTH", value: "630nm / 850nm (placeholder)" },
      { label: "IRRADIANCE", value: "≈40 mW/cm² at scalp (placeholder)" },
      { label: "DIODE COUNT", value: "132 (placeholder)" },
      { label: "SESSION LENGTH", value: "10 / 15 / 20 min presets" },
      { label: "POWER", value: "Rechargeable Li-ion, USB-C" },
      { label: "RUNTIME", value: "≈6 sessions per charge (placeholder)" },
      { label: "EMC / SAFETY", value: "Bench-tested, pending final cert (placeholder)" },
    ],
    usage: [
      "Fit the array over dry, clean scalp — the interior shell centers automatically.",
      "Select a session length on the control node; the array ramps to full output over the first 5 seconds.",
      "A single haptic pulse marks session end. No cleaning required beyond wiping the interior shell.",
    ],
    dimensions: [
      { label: "WEIGHT", value: "398g (placeholder)" },
      { label: "SIZE RANGE", value: "One size, adjustable strap" },
      { label: "MATERIALS", value: "Medical-grade silicone shell, aircraft-alloy frame" },
    ],
    inBox: ["RX-01 Cranial Array", "USB-C charge cable", "Travel case", "Quick-start card"],
    faqs: [
      {
        q: "Is this safe for daily use?",
        a: "RX-01 is designed for one session per day. Full safety and usage documentation ships with the unit and will be published in full ahead of launch — figures on this page are pre-launch placeholders.",
      },
      {
        q: "Does it work with all hair types and lengths?",
        a: "The array is built for direct scalp contact; very dense or long hair may reduce effective output and is addressed in the included usage guide.",
      },
      {
        q: "What's the warranty?",
        a: "2-year limited hardware warranty (placeholder — final terms published at launch).",
      },
    ],
  },
  {
    slug: "rx-02-facial-matrix",
    designation: "RX-02",
    codename: "FACIAL MATRIX",
    category: "Facial System",
    form: "face",
    price: 299,
    tagline: "The face gets its own default. Override it.",
    summary:
      "A contoured mask array mapping red and near-infrared light across the full face in one uninterrupted session — flexible shell, rigid output.",
    status: "IN STOCK",
    benefits: [
      "Contoured silicone shell maps to facial geometry for even, close contact",
      "Independent forehead / mid-face / jaw zones, each individually driven",
      "Eye-safe shielded lens zone, rated for open-eye wear during a session",
      "Foldable for travel — the shell articulates flat without damaging the array",
    ],
    specs: [
      { label: "WAVELENGTH", value: "630nm / 660nm / 850nm (placeholder)" },
      { label: "IRRADIANCE", value: "≈35 mW/cm² at skin (placeholder)" },
      { label: "DIODE COUNT", value: "189 (placeholder)" },
      { label: "SESSION LENGTH", value: "10 min fixed cycle" },
      { label: "POWER", value: "Rechargeable Li-ion, USB-C" },
      { label: "RUNTIME", value: "≈8 sessions per charge (placeholder)" },
      { label: "EMC / SAFETY", value: "Bench-tested, pending final cert (placeholder)" },
    ],
    usage: [
      "Cleanse skin and position the shell using the bridge and chin anchor points.",
      "Start the cycle from the control node — all three zones activate in sequence, then run concurrently.",
      "Shell releases with a single latch; no adhesives or straps against skin.",
    ],
    dimensions: [
      { label: "WEIGHT", value: "312g (placeholder)" },
      { label: "SIZE RANGE", value: "One size, articulating shell" },
      { label: "MATERIALS", value: "Medical-grade silicone, shielded polycarbonate lens zone" },
    ],
    inBox: ["RX-02 Facial Matrix", "USB-C charge cable", "Protective shell case", "Quick-start card"],
    faqs: [
      {
        q: "Can I keep my eyes open during a session?",
        a: "Yes — the lens zone is shielded for open-eye wear. Full documentation ships with the unit ahead of launch.",
      },
      {
        q: "How often should I use it?",
        a: "Most protocols call for daily 10-minute cycles; final usage guidance is published at launch. Figures on this page are pre-launch placeholders.",
      },
      {
        q: "What's the warranty?",
        a: "2-year limited hardware warranty (placeholder — final terms published at launch).",
      },
    ],
  },
  {
    slug: "rx-03-wearable-node",
    designation: "RX-03",
    codename: "WEARABLE NODE",
    category: "Body System",
    form: "body",
    price: 249,
    tagline: "One panel. Any joint, any override.",
    summary:
      "A flexible wearable panel that straps to a single site — shoulder, knee, lower back — for targeted sessions anywhere the default is holding you back.",
    status: "LIMITED",
    benefits: [
      "Flexible diode panel conforms to shoulders, knees, and lower back alike",
      "Magnetic strap system — on and adjusted in under ten seconds",
      "Splash-resistant shell rated for a normal training environment",
      "Pairs with RX-01 / RX-02 on the same charge cable and control logic",
    ],
    specs: [
      { label: "WAVELENGTH", value: "660nm / 850nm (placeholder)" },
      { label: "IRRADIANCE", value: "≈45 mW/cm² at skin (placeholder)" },
      { label: "DIODE COUNT", value: "96 (placeholder)" },
      { label: "SESSION LENGTH", value: "15 / 20 min presets" },
      { label: "POWER", value: "Rechargeable Li-ion, USB-C" },
      { label: "RUNTIME", value: "≈5 sessions per charge (placeholder)" },
      { label: "EMC / SAFETY", value: "Bench-tested, pending final cert (placeholder)" },
    ],
    usage: [
      "Wrap the panel over the target site and close the magnetic strap.",
      "Choose a preset on the control node; the panel confirms contact before ramping to full output.",
      "Wipe the panel face after use; strap is machine-washable at low temperature.",
    ],
    dimensions: [
      { label: "WEIGHT", value: "276g (placeholder)" },
      { label: "SIZE RANGE", value: "Strap fits 25–55cm circumference" },
      { label: "MATERIALS", value: "Flexible diode panel, neoprene-composite strap" },
    ],
    inBox: ["RX-03 Wearable Node", "USB-C charge cable", "Strap extender", "Quick-start card"],
    faqs: [
      {
        q: "Can I use this during activity?",
        a: "RX-03 is splash-resistant and built for pre- or post-training use; it is not rated for submersion. Full guidance ships with the unit.",
      },
      {
        q: "Will it fit larger or smaller joints?",
        a: "The strap and extender cover a 25–55cm range, suited to most shoulders, knees, and lower-back placements.",
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
