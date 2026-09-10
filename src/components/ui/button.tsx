import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost-light" | "ghost-dark";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-signal text-white hover:bg-signal-bright active:bg-signal-dim border border-signal",
  "ghost-light":
    "bg-transparent text-ink-on-black border border-hairline-black-strong hover:border-signal hover:text-signal",
  "ghost-dark":
    "bg-transparent text-ink-on-white border border-hairline-white hover:border-signal-on-white hover:text-signal-on-white",
};

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide uppercase font-body transition-colors duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal min-h-11";

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = `${base} ${variantClasses[variant]} ${className ?? ""}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
