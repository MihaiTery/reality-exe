import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

const BLACK = "#0a0908";
const INK = "#f5f2f0";
const RED = "#e0442b";

export default async function OpengraphImage() {
  const fontData = await readFile(
    join(process.cwd(), "src/app/_og-fonts/Unbounded-ExtraBold-static.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: BLACK,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <svg width="110" height="110" viewBox="0 0 32 32" fill="none">
            <path
              d="M3 11V3.5C3 3.22386 3.22386 3 3.5 3H28.5C28.7761 3 29 3.22386 29 3.5V28.5C29 28.7761 28.7761 29 28.5 29H10.5"
              stroke={INK}
              strokeWidth="2"
            />
            <path d="M6.5 29H3.5C3.22386 29 3 28.7761 3 28.5V14.5" stroke={INK} strokeWidth="2" />
            <rect x="6" y="27" width="4.5" height="4.5" fill={RED} />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: INK,
            }}
          >
            REALITY<span style={{ color: RED }}>.EXE</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Unbounded", data: fontData, weight: 800, style: "normal" }],
    }
  );
}
