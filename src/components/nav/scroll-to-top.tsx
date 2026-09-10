"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Guarantees a fresh page starts at the top. Next's own scroll restoration
 * can get out of sync with the pinned scroll-jacked homepage sections, so we
 * force it explicitly on every route change. */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
