import Image from "next/image";
import { sideProjects } from "@/data/site";
import Eyebrow from "@/components/Eyebrow";

export default function SideProjects() {
  return (
    <section id="side-projects" className="mx-auto max-w-5xl px-6 py-16">
      <Eyebrow>Side Projects</Eyebrow>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        {sideProjects.headline}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{sideProjects.intro}</p>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {sideProjects.projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-2xl border border-border border-t-2 border-t-accent bg-surface p-6"
          >
            {project.screenshots && project.screenshots.length === 1 && (
              <div className="mb-5 overflow-hidden rounded-lg border border-border bg-background">
                <Image
                  src={project.screenshots[0].src}
                  alt={project.screenshots[0].alt}
                  width={project.screenshots[0].width}
                  height={project.screenshots[0].height}
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="h-auto w-full"
                />
              </div>
            )}
            {project.screenshots && project.screenshots.length > 1 && (
              <div className="mb-5 grid grid-cols-2 gap-2">
                {project.screenshots.map((shot) => (
                  <div
                    key={shot.src}
                    className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-background"
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(min-width: 1024px) 240px, 50vw"
                      className="object-cover object-left-top"
                    />
                  </div>
                ))}
              </div>
            )}
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              {project.tag}
            </span>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted sm:text-base sm:leading-7">
              {project.tagline}
            </p>

            <ul className="mt-5 space-y-2.5">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-sm leading-6 text-muted">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2 pt-1">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
