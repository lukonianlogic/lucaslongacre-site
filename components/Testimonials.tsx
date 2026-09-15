import Image from "next/image";
import { testimonials } from "@/data/site";
import Eyebrow from "@/components/Eyebrow";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="mx-auto max-w-5xl px-6 py-16">
      <Eyebrow>What people say</Eyebrow>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 border-t-2 border-t-accent"
          >
            <blockquote className="text-sm leading-6 text-muted sm:text-base sm:leading-7">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <figcaption className="mt-6 flex items-center gap-3">
              {t.photo ? (
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-accent-soft">
                  <Image src={t.photo} alt={t.name} fill className="object-cover" sizes="44px" />
                </div>
              ) : (
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
                  {initials(t.name)}
                </div>
              )}
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted">
                  {t.title} · {t.company}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
