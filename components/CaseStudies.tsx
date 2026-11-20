import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/site";
import Eyebrow from "@/components/Eyebrow";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Eyebrow>Case Studies</Eyebrow>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Products I&rsquo;ve taken from problem to production
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-study/${study.slug}`}
              className="group flex flex-col rounded-2xl border border-border border-t-2 border-t-accent bg-background p-6 transition-colors hover:border-accent"
            >
              {study.screenshots?.[0] && (
                <div className="relative mb-5 aspect-[2/1] overflow-hidden rounded-xl border border-border bg-surface">
                  <Image
                    src={study.screenshots[0].src}
                    alt={study.screenshots[0].alt}
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover object-left-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <span className="font-mono text-xs uppercase tracking-wider text-muted">
                {study.role}
              </span>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight group-hover:text-accent sm:text-4xl">
                {study.org}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted sm:text-base sm:leading-7">
                {study.summary}
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
                {study.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-lg font-semibold tracking-tight text-accent sm:text-xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs leading-4 text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>

              <span className="mt-6 text-sm font-medium text-accent">Read the case study →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
