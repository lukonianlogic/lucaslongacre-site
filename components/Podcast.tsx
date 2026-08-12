import Image from "next/image";
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
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:border-accent"
            >
              {ep.videoId ? (
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <Image
                    src={`https://i.ytimg.com/vi/${ep.videoId}/hqdefault.jpg`}
                    alt={ep.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-sm">
                      <div className="ml-0.5 h-0 w-0 border-y-8 border-l-[14px] border-y-transparent border-l-black" />
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="flex flex-1 flex-col p-5">
                {ep.date && <span className="text-xs text-muted">{ep.date}</span>}
                <h3 className="mt-2 text-sm font-semibold leading-5 group-hover:text-accent">
                  {ep.title}
                </h3>
                {ep.guest && <span className="mt-1 text-xs text-muted">{ep.guest}</span>}
                <p className="mt-3 text-sm leading-6 text-muted">{ep.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
