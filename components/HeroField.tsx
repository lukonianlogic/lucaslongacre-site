const stars = [
  { top: "10%", left: "16%", size: 4, tone: "accent" },
  { top: "22%", left: "58%", size: 3, tone: "muted" },
  { top: "7%", left: "82%", size: 3, tone: "accent" },
  { top: "38%", left: "93%", size: 4, tone: "muted" },
  { top: "58%", left: "88%", size: 3, tone: "accent" },
  { top: "72%", left: "76%", size: 3, tone: "muted" },
  { top: "88%", left: "62%", size: 4, tone: "accent" },
  { top: "16%", left: "37%", size: 3, tone: "muted" },
  { top: "48%", left: "12%", size: 3, tone: "accent" },
  { top: "68%", left: "27%", size: 3, tone: "muted" },
  { top: "92%", left: "18%", size: 3, tone: "accent" },
  { top: "4%", left: "68%", size: 3, tone: "muted" },
] as const;

// Same silhouette as the favicon ship, redrawn faint and monochrome for a corner easter egg.
const shipGrid = [
  "....A....",
  "....A....",
  "...AAA...",
  "..AAAAA..",
  "..AAAAA..",
  ".AAAAAAA.",
  "AA..A..AA",
  "A...A...A",
];

export default function HeroField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            background: star.tone === "accent" ? "var(--accent)" : "var(--muted)",
            opacity: star.tone === "accent" ? 0.85 : 0.6,
            boxShadow: star.tone === "accent" ? "0 0 6px var(--accent)" : "none",
          }}
        />
      ))}

      <svg
        viewBox="0 0 18 16"
        shapeRendering="crispEdges"
        className="absolute -bottom-4 -right-4 h-24 w-24 opacity-[0.08] sm:h-32 sm:w-32"
      >
        {shipGrid.flatMap((row, y) =>
          [...row].map((cell, x) =>
            cell === "." ? null : (
              <rect key={`${x}-${y}`} x={x * 2} y={y * 2} width={2} height={2} fill="var(--accent)" />
            )
          )
        )}
      </svg>
    </div>
  );
}
