import Link from "next/link";

export default function BackLink() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-8">
      <Link href="/" className="text-sm text-muted hover:text-foreground">
        ← Lucas Longacre
      </Link>
    </div>
  );
}
