export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-muted">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
      {children}
    </h2>
  );
}
