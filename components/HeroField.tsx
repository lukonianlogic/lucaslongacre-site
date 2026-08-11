const stars = [
  { top: "10%", left: "16%", size: 5, tone: "accent" },
  { top: "22%", left: "58%", size: 4, tone: "muted" },
  { top: "7%", left: "82%", size: 4, tone: "accent" },
  { top: "38%", left: "93%", size: 5, tone: "muted" },
  { top: "58%", left: "88%", size: 4, tone: "accent" },
  { top: "72%", left: "76%", size: 4, tone: "muted" },
  { top: "88%", left: "62%", size: 5, tone: "accent" },
  { top: "16%", left: "37%", size: 4, tone: "muted" },
  { top: "48%", left: "12%", size: 4, tone: "accent" },
  { top: "68%", left: "27%", size: 4, tone: "muted" },
  { top: "92%", left: "18%", size: 4, tone: "accent" },
  { top: "4%", left: "68%", size: 4, tone: "muted" },
  { top: "30%", left: "8%", size: 3, tone: "muted" },
  { top: "14%", left: "48%", size: 3, tone: "accent" },
  { top: "80%", left: "45%", size: 3, tone: "muted" },
  { top: "62%", left: "6%", size: 3, tone: "accent" },
  { top: "45%", left: "75%", size: 3, tone: "muted" },
  { top: "26%", left: "20%", size: 3, tone: "accent" },
] as const;

// Redrawn to match the hand-drawn reference: spike + horns, blue "eyes"
// flanking a red center, wide wings, and leg nubs at the base.
const shipGrid = [
  "......W......",
  "......W......",
  ".....WWW.....",
  "...R.WWW.R...",
  "...W.WWW.W...",
  "...WBWRWBW...",
  ".R.WBRRRBW.R.",
  "RWWRRWRWRRWWR",
  "WWWWWWWWWWWWW",
  ".WWWWWWWWWWW.",
  "..RR.WWW.RR..",
  "W...........W",
];

const shipColors: Record<string, string> = {
  W: "var(--foreground)",
  R: "#ef4444",
  B: "#2563eb",
};

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
            opacity: star.tone === "accent" ? 0.95 : 0.75,
            boxShadow: star.tone === "accent" ? "0 0 8px var(--accent)" : "0 0 3px var(--muted)",
          }}
        />
      ))}

      <svg
        viewBox="0 0 26 24"
        shapeRendering="crispEdges"
        className="absolute bottom-10 right-10 h-20 w-20 opacity-25 sm:bottom-14 sm:right-16 sm:h-28 sm:w-28"
      >
        {shipGrid.flatMap((row, y) =>
          [...row].map((cell, x) =>
            cell === "." ? null : (
              <rect key={`${x}-${y}`} x={x * 2} y={y * 2} width={2} height={2} fill={shipColors[cell]} />
            )
          )
        )}
      </svg>
    </div>
  );
}
