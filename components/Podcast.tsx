import { person, podcastEpisodes } from "@/data/site";
import Eyebrow from "@/components/Eyebrow";

export default function Podcast() {
  return (
    <section id="podcast" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <Eyebrow>Signal &amp; Noise: Executive Voices</Eyebrow>
          <a
            href={person.links.podcast}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:underline"
          >
            All episodes →
          </a>
        </div>

        <p className="mt-3 max-w-2xl text-sm text-muted">
          I host conversations with product and AI leaders about what it actually takes to build.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {podcastEpisodes.map((ep) => (
            <a
              key={ep.title}
              href={ep.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-border bg-background p-5 transition-colors hover:border-accent"
            >
              {ep.date && <span className="text-xs text-muted">{ep.date}</span>}
              <h3 className="mt-2 text-sm font-semibold leading-5 group-hover:text-accent">
                {ep.title}
              </h3>
              {ep.guest && <span className="mt-1 text-xs text-muted">{ep.guest}</span>}
              <p className="mt-3 text-sm leading-6 text-muted">{ep.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
