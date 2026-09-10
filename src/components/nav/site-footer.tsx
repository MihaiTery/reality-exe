import Link from "next/link";
import { Logo } from "@/components/logo/logo";

export function SiteFooter() {
  return (
    <footer className="bg-black-deep border-t border-hairline-black">
      <div className="container-edge py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Logo size="md" />
            <p className="mt-4 text-sm leading-relaxed text-ink-on-black-muted">
              Light is information. REALITY.EXE builds the technology to question
              your defaults, starting with the ones you can switch on.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="system-label text-ink-on-black-faint mb-4">INDEX</p>
              <ul className="space-y-3 text-sm">
                <li><Link href="/shop" className="hover:text-signal transition-colors">Shop</Link></li>
                <li><Link href="/#system" className="hover:text-signal transition-colors">System</Link></li>
                <li><Link href="/#science" className="hover:text-signal transition-colors">Science</Link></li>
              </ul>
            </div>
            <div>
              <p className="system-label text-ink-on-black-faint mb-4">SUPPORT</p>
              <ul className="space-y-3 text-sm text-ink-on-black-muted">
                <li>Shipping</li>
                <li>Returns</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <p className="system-label text-ink-on-black-faint mb-4">LEGAL</p>
              <ul className="space-y-3 text-sm text-ink-on-black-muted">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Warranty</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-hairline-black pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-data text-[11px] text-ink-on-black-faint">
            © {new Date().getFullYear()} REALITY.EXE — SYSTEM_BUILD/01 — ALL DEFAULTS QUESTIONED
          </p>
          <p className="font-data text-[11px] text-ink-on-black-faint">
            STATUS: <span className="text-signal">ACTIVE</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
