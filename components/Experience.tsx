import { experience, education } from "@/data/site";
import Eyebrow from "@/components/Eyebrow";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <Eyebrow>Experience</Eyebrow>

      <ol className="mt-6 space-y-10 border-l border-border pl-6 sm:pl-8">
        {experience.map((job) => (
          <li
            key={`${job.role}-${job.org}`}
            className="relative grid gap-2 sm:grid-cols-[200px_1fr]"
          >
            <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-accent sm:-left-[35px]" />
            <div className="text-sm text-muted">{job.period}</div>
            <div>
              <h3 className="text-base font-semibold">
                {job.role} · {job.org}
              </h3>
              <ul className="mt-2 space-y-1.5 text-sm leading-6 text-muted">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="pl-4 relative before:absolute before:left-0 before:content-['—']">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="mt-16 text-sm font-mono uppercase tracking-wider text-muted">Education</h2>
      <ul className="mt-6 space-y-2">
        {education.map((item) => (
          <li key={item.degree} className="text-sm text-muted">
            <span className="text-foreground">{item.degree}</span> — {item.school}
          </li>
        ))}
      </ul>
    </section>
  );
}
