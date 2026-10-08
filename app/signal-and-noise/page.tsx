import type { Metadata } from "next";
import { person } from "@/data/site";
import { getEpisodes } from "@/lib/episodes";
import { PERSON_ID, PODCAST_ID, SITE_URL, yearMonth } from "@/lib/schema";
import BackLink from "@/components/BackLink";
import BookCallButton from "@/components/BookCallButton";
import EpisodeGrid from "@/components/EpisodeGrid";
import Eyebrow from "@/components/Eyebrow";
import JsonLd from "@/components/JsonLd";

const title = "Signal & Noise: Executive Voices — Podcast hosted by Lucas Longacre";
const description =
  "Conversations with product and AI leaders about what it actually takes to build, hosted by Lucas Longacre. Browse episodes and book time to be a guest.";
const url = `${SITE_URL}/signal-and-noise`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Lucas Longacre", type: "website", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default async function SignalAndNoisePage() {
  const episodes = await getEpisodes();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "PodcastSeries",
        "@id": PODCAST_ID,
        name: "Signal & Noise: Executive Voices",
        url: person.links.podcast,
        description: "Conversations with product and AI leaders about what it actually takes to build.",
        actor: { "@id": PERSON_ID },
      },
      ...episodes.map((ep) => ({
        "@type": "PodcastEpisode",
        name: ep.title,
        url: ep.url,
        description: ep.description,
        datePublished: yearMonth(ep.date),
        partOfSeries: { "@id": PODCAST_ID },
      })),
    ],
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <BackLink />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Eyebrow>Podcast</Eyebrow>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
          Signal &amp; Noise: Executive Voices
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          I host conversations with product and AI leaders about what it actually takes to build:
          how they turn ambiguity into structure, where AI is changing the work, and what it takes
          to ship products people trust.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <BookCallButton
            calLink="podcast-guest"
            label="Book time to be a guest →"
            className="inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          />
          <a
            href={person.links.podcast}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:underline"
          >
            Listen on signalandnoise.ai →
          </a>
        </div>

        <h2 className="sr-only">Episodes</h2>
        <EpisodeGrid episodes={episodes} />
      </section>
    </>
  );
}
