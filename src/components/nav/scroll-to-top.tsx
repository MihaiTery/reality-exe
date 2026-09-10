"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Guarantees a fresh page starts at the top. Next's own scroll restoration
 * can get out of sync with the pinned scroll-jacked homepage sections, so we
 * force it explicitly on every route change. */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Let layout (fonts, the pinned scroll-jacked sections) settle before
      // jumping — an early jump combined with global smooth-scroll can
      // otherwise animate straight through a tall pinned section.
      const id = window.setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "instant", block: "start" });
      }, 200);
      return () => window.clearTimeout(id);
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
