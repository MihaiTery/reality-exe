type LogoMarkProps = {
  className?: string;
  size?: number;
  /** Set false to omit the static node at the frame's gap — used where a
   * separately animated signal dot takes its place instead. */
  showNode?: boolean;
};

/**
 * The mark: a square system-frame with one deliberate break in its edge and
 * a signal node sitting in the gap — the frame that isn't quite closed, and
 * the point where something gets in or out.
 */
export function LogoMark({ className, size = 32, showNode = true }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 11V3.5C3 3.22386 3.22386 3 3.5 3H28.5C28.7761 3 29 3.22386 29 3.5V28.5C29 28.7761 28.7761 29 28.5 29H10.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M6.5 29H3.5C3.22386 29 3 28.7761 3 28.5V14.5" stroke="currentColor" strokeWidth="2" />
      {showNode && <rect x="6" y="27" width="4.5" height="4.5" className="fill-signal" />}
    </svg>
  );
}

type LogoProps = {
  className?: string;
  markClassName?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { mark: 18, text: "text-sm", gap: "gap-2" },
  md: { mark: 24, text: "text-lg", gap: "gap-2.5" },
  lg: { mark: 34, text: "text-2xl", gap: "gap-3" },
};

/** Full wordmark: mark + "REALITY" set in the display face, ".EXE" carried
 * in the data/mono face like a literal file extension. */
export function Logo({ className, markClassName, size = "md" }: LogoProps) {
  const s = sizes[size];
  return (
    <span
      className={`inline-flex items-center ${s.gap} font-display font-semibold ${s.text} ${className ?? ""}`}
    >
      <LogoMark size={s.mark} className={markClassName} />
      <span className="tracking-tight">
        REALITY<span className="font-data font-normal text-signal">.EXE</span>
      </span>
    </span>
  );
}
