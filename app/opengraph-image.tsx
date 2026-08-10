import { ImageResponse } from "next/og";
import { person } from "@/data/site";

export const alt = `${person.name} — ${person.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0d",
          padding: 80,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: 480,
            background: "#1e1b3a",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 10, height: 10, borderRadius: 10, background: "#818cf8", display: "flex" }} />
          <div style={{ fontSize: 28, color: "#a1a1aa", fontFamily: "monospace" }}>
            lucaslongacre.com
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, color: "#f4f4f5", lineHeight: 1.05 }}>
            {person.name}
          </div>
          <div style={{ display: "flex", fontSize: 36, color: "#a1a1aa", marginTop: 20 }}>
            {person.title} at {person.company}
          </div>
          <div style={{ fontSize: 28, color: "#818cf8", marginTop: 28 }}>
            {person.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
