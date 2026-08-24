import { XMLParser } from "fast-xml-parser";

export type LiveEpisode = {
  title: string;
  url: string;
  date: string;
  description: string;
  image?: string;
};

const FEED_URL = "https://www.signalandnoise.ai/blog-feed.xml";
const MAX_AUTHOR_CHECKS = 6;

// The Wix blog behind Signal & Noise mixes several hosts and shows into one
// feed with no reliable per-item author field in the RSS itself. Fast path:
// his name is often right in the title. Slow path: posts tagged "Executive
// Voices" but without his name in the title (e.g. article-style posts) get
// their individual page fetched to check the JSON-LD byline instead. This is
// a forward-looking check: infrequent posts age out of Wix's ~20-item feed
// window, so it won't backfill history, only catch new ones going forward.
function titleMentionsLucas(title: string): boolean {
  return title.includes("Lucas Longacre");
}

async function pageBylineIsLucas(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return false;
    const html = await res.text();
    return /"author":\{"@type":"Person","name":"Lucas Longacre"\}/.test(html);
  } catch {
    return false;
  }
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

function categories(item: Record<string, unknown>): string[] {
  const raw = item.category;
  if (!raw) return [];
  return Array.isArray(raw) ? (raw as string[]) : [raw as string];
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

    const list: Record<string, unknown>[] = Array.isArray(items) ? items : [items];

    let authorChecksUsed = 0;
    const matches: Record<string, unknown>[] = [];
    for (const item of list) {
      const title = typeof item.title === "string" ? item.title : "";
      if (!title) continue;

      if (titleMentionsLucas(title)) {
        matches.push(item);
        continue;
      }

      const isExecutiveVoices = categories(item).includes("Executive Voices");
      const url = typeof item.link === "string" ? item.link : "";
      if (isExecutiveVoices && url && authorChecksUsed < MAX_AUTHOR_CHECKS) {
        authorChecksUsed++;
        if (await pageBylineIsLucas(url)) matches.push(item);
      }
    }

    return matches.map((item) => ({
      title: stripHtml((item.title as string) ?? ""),
      url: (item.link as string) ?? "",
      date: item.pubDate
        ? new Date(item.pubDate as string).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })
        : "",
      description: stripHtml((item.description as string) ?? "").slice(0, 180),
      image: (item.enclosure as Record<string, string> | undefined)?.["@_url"],
    }));
  } catch {
    return [];
  }
}
