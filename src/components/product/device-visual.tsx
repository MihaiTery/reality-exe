const CLIP_PATHS: Record<"head" | "face" | "body", { d?: string; rect?: [number, number, number, number, number]; transform?: string }> = {
  head: {
    d: "M20 88 L20 46 C20 18 40 8 60 8 C80 8 100 18 100 46 L100 88 C100 93 96 96 91 96 L29 96 C24 96 20 93 20 88 Z",
  },
  face: {
    d: "M18 30 C18 16 30 8 45 8 Q60 14 75 8 C90 8 102 16 102 30 L102 82 C102 90 96 96 88 96 L32 96 C24 96 18 90 18 82 Z",
  },
  body: {
    rect: [15, 40, 90, 28, 14],
    transform: "rotate(-18 60 54)",
  },
};

function DotGrid({ id }: { id: string }) {
  const dots = [];
  const cols = 10;
  const rows = 9;
  const spacing = 11;
  const offsetX = 5;
  const offsetY = 5;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const active = col % 3 === 1 && row % 3 === 1;
      dots.push(
        <circle
          key={`${row}-${col}`}
          cx={offsetX + col * spacing}
          cy={offsetY + row * spacing}
          r={active ? 1.6 : 1}
          className={active ? "fill-signal" : "fill-white/25"}
          clipPath={`url(#${id})`}
        />
      );
    }
  }
  return <>{dots}</>;
}

export function DeviceVisual({
  form,
  className,
}: {
  form: "head" | "face" | "body";
  className?: string;
}) {
  const clip = CLIP_PATHS[form];
  const clipId = `device-clip-${form}`;

  return (
    <svg viewBox="0 0 120 104" className={className} aria-hidden="true">
      <defs>
        <clipPath id={clipId}>
          {clip.d ? (
            <path d={clip.d} />
          ) : clip.rect ? (
            <rect
              x={clip.rect[0]}
              y={clip.rect[1]}
              width={clip.rect[2]}
              height={clip.rect[3]}
              rx={clip.rect[4]}
              transform={clip.transform}
            />
          ) : null}
        </clipPath>
        <radialGradient id={`device-glow-${form}`} cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="oklch(20% 0.02 25)" />
          <stop offset="100%" stopColor="oklch(11% 0.006 25)" />
        </radialGradient>
      </defs>

      {clip.d ? (
        <path d={clip.d} fill={`url(#device-glow-${form})`} />
      ) : clip.rect ? (
        <rect
          x={clip.rect[0]}
          y={clip.rect[1]}
          width={clip.rect[2]}
          height={clip.rect[3]}
          rx={clip.rect[4]}
          transform={clip.transform}
          fill={`url(#device-glow-${form})`}
        />
      ) : null}

      <DotGrid id={clipId} />

      {clip.d ? (
        <path d={clip.d} fill="none" stroke="oklch(100% 0 0 / 0.18)" strokeWidth="1" />
      ) : clip.rect ? (
        <rect
          x={clip.rect[0]}
          y={clip.rect[1]}
          width={clip.rect[2]}
          height={clip.rect[3]}
          rx={clip.rect[4]}
          transform={clip.transform}
          fill="none"
          stroke="oklch(100% 0 0 / 0.18)"
          strokeWidth="1"
        />
      ) : null}
    </svg>
  );
}
