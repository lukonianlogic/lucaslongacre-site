import Link from "next/link";
import { consulting, person } from "@/data/site";
import Eyebrow from "@/components/Eyebrow";
import BookCallButton from "@/components/BookCallButton";

export const fraudPath = "/ai-fraud-protection";

export default function FraudProtection({ full = false }: { full?: boolean }) {
  const { fraud } = consulting;
  const Heading = full ? "h1" : "h2";

  return (
    <section id="fraud-protection" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Eyebrow>Consulting</Eyebrow>
        <Heading className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
          {fraud.title}
        </Heading>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          {fraud.intro}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {fraud.pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-border border-t-2 border-t-accent bg-surface p-5"
            >
              <div className="font-mono text-xs text-accent">0{i + 1}</div>
              <h3 className="mt-2 text-base font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{pillar.description}</p>
            </div>
          ))}
        </div>

        {full ? (
          <>
            <p className="mt-8 max-w-2xl text-sm leading-6 text-muted">{fraud.layersNote}</p>

            <h2 className="mt-12 text-xl font-semibold tracking-tight">Who this is for</h2>
            <ul className="mt-4 space-y-2.5">
              {fraud.audience.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <BookCallButton
                calLink="consulting-call"
                label="Book a call →"
                className="inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              />
              <a
                href={`mailto:${person.email}`}
                className="text-sm font-medium text-accent hover:underline"
              >
                or email {person.email}
              </a>
            </div>
          </>
        ) : (
          <Link
            href={fraudPath}
            className="mt-8 inline-block text-sm font-medium text-accent hover:underline"
          >
            Learn more about AI fraud protection →
          </Link>
        )}
      </div>
    </section>
  );
}
