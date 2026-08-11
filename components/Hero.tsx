import { person } from "@/data/site";
import HeroField from "@/components/HeroField";

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-5xl overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full opacity-40 blur-3xl sm:h-96 sm:w-96"
        style={{ background: "var(--accent-soft)" }}
      />

      <HeroField />

      <div className="relative">
        {person.openToWork && (
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {person.openToWorkNote}
          </div>
        )}

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          {person.name}
        </h1>

        <p className="mt-4 text-lg text-muted sm:text-xl">
          {person.title} at {person.company}
        </p>

        <p className="mt-6 max-w-2xl text-balance text-base leading-7 text-muted sm:text-lg sm:leading-8">
          {person.blurb}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#experience"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View experience
          </a>
          <a
            href={`mailto:${person.email}`}
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent-soft"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
