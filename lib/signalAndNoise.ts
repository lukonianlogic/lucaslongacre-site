import { XMLParser } from "fast-xml-parser";

export type LiveEpisode = {
  title: string;
  url: string;
  date: string;
  description: string;
  image?: string;
};

const FEED_URL = "https://www.signalandnoise.ai/blog-feed.xml";

// The Wix blog behind Signal & Noise mixes several hosts and shows into one
// feed, so filtering by category isn't reliable — but every post that's
// actually Lucas's carries his full name in the title. This is a forward
// looking check: infrequent posts age out of Wix's ~20-item feed window, so
// it won't backfill history, only catch new ones going forward.
function isLucasEpisode(title: string): boolean {
  return title.includes("Lucas Longacre");
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

export async function getLiveExecutiveVoicesEpisodes(): Promise<LiveEpisode[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];

    const xml = await res.text();
    const parser = new XMLParser({ ignoreAttributes: false });
    const feed = parser.parse(xml);

    const items = feed?.rss?.channel?.item;
    if (!items) return [];

    const list = Array.isArray(items) ? items : [items];

    return list
      .filter((item) => typeof item.title === "string" && isLucasEpisode(item.title))
      .map((item) => ({
        title: stripHtml(item.title ?? ""),
        url: item.link ?? "",
        date: item.pubDate
          ? new Date(item.pubDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })
          : "",
        description: stripHtml(item.description ?? "").slice(0, 180),
        image: item.enclosure?.["@_url"],
      }));
  } catch {
    return [];
  }
}
