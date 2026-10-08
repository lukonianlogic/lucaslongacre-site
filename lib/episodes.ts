import { podcastEpisodes } from "@/data/site";
import { getLiveExecutiveVoicesEpisodes } from "@/lib/signalAndNoise";

export type Episode = {
  title: string;
  guest?: string;
  date: string;
  description: string;
  url: string;
  thumbnail?: string;
};

export async function getEpisodes(): Promise<Episode[]> {
  const liveEpisodes = await getLiveExecutiveVoicesEpisodes();

  const curated: Episode[] = podcastEpisodes.map((ep) => ({
    title: ep.title,
    guest: ep.guest,
    date: ep.date,
    description: ep.description,
    url: ep.url,
    thumbnail:
      ("image" in ep ? ep.image : undefined) ??
      (ep.videoId ? `https://i.ytimg.com/vi/${ep.videoId}/hqdefault.jpg` : undefined),
  }));

  const known = new Set(curated.map((c) => c.url));
  const fresh: Episode[] = liveEpisodes
    .filter((ep) => !known.has(ep.url))
    .map((ep) => ({
      title: ep.title,
      date: ep.date,
      description: ep.description,
      url: ep.url,
      thumbnail: ep.image,
    }));

  return [...fresh, ...curated];
}
