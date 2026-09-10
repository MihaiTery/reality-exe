import type { Metadata, Viewport } from "next";
import { Unbounded, Familjen_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { SiteNav } from "@/components/nav/site-nav";
import { SiteFooter } from "@/components/nav/site-footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { ScrollToTop } from "@/components/nav/scroll-to-top";

const unbounded = Unbounded({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const familjen = Familjen_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-data",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://realityexe.com"),
  title: {
    default: "REALITY.EXE — The default is not mandatory.",
    template: "%s — REALITY.EXE",
  },
  description:
    "REALITY.EXE builds premium red-light technology for people who question the default settings of their body and environment. Light is information. Your system can be updated.",
  keywords: [
    "REALITY.EXE",
    "red light therapy",
    "red light device",
    "recovery technology",
    "longevity technology",
    "wearable red light",
  ],
  openGraph: {
    title: "REALITY.EXE — The default is not mandatory.",
    description:
      "Premium red-light technology for people who question the default settings of their body and environment.",
    url: "https://realityexe.com",
    siteName: "REALITY.EXE",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0908",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${familjen.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-black-reality text-ink-on-black font-body antialiased selection:bg-signal selection:text-black-reality">
        <CartProvider>
          <ScrollToTop />
          <SiteNav />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
