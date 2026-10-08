import Link from "next/link";
import { getEpisodes } from "@/lib/episodes";
import Eyebrow from "@/components/Eyebrow";
import EpisodeGrid from "@/components/EpisodeGrid";
import BookCallButton from "@/components/BookCallButton";

export const podcastPath = "/signal-and-noise";

export default async function Podcast() {
  const episodes = await getEpisodes();

  return (
    <section id="podcast" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <Eyebrow>Signal &amp; Noise: Executive Voices</Eyebrow>
          <Link href={podcastPath} className="text-sm font-medium text-accent hover:underline">
            All episodes →
          </Link>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-2xl text-sm text-muted">
            I host conversations with product and AI leaders about what it actually takes to build.
          </p>
          <BookCallButton
            calLink="podcast-guest"
            label="Book time to be a guest →"
            className="shrink-0 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent-soft"
          />
        </div>

        <EpisodeGrid episodes={episodes.slice(0, 3)} />
      </div>
    </section>
  );
}
