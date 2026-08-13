import { caseStudy } from "@/data/site";
import Eyebrow from "@/components/Eyebrow";

export default function CaseStudy() {
  return (
    <section id="case-study" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Eyebrow>Case Study</Eyebrow>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
          {caseStudy.org}
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          {caseStudy.intro}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {caseStudy.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-background p-5 border-t-2 border-t-accent"
            >
              <div className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        <ol className="mt-12 space-y-10 border-l border-border pl-6 sm:pl-8">
          {caseStudy.milestones.map((milestone) => (
            <li key={milestone.title} className="relative grid gap-2 sm:grid-cols-[140px_1fr]">
              <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-surface bg-accent sm:-left-[35px]" />
              <div className="text-sm text-muted">{milestone.period}</div>
              <div>
                <h3 className="text-base font-semibold">{milestone.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{milestone.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-2xl text-sm leading-6 text-muted">{caseStudy.closingNote}</p>
      </div>
    </section>
  );
}
