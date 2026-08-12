import { XMLParser } from "fast-xml-parser";

export type Article = {
  title: string;
  url: string;
  date: string;
  excerpt: string;
  image?: string;
};

const FEED_URL = "https://medium.com/feed/@lucas-longacre";

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

export async function getMediumArticles(limit = 3): Promise<Article[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];

    const xml = await res.text();
    const parser = new XMLParser({ ignoreAttributes: false });
    const feed = parser.parse(xml);

    const items = feed?.rss?.channel?.item;
    if (!items) return [];

    const list = Array.isArray(items) ? items : [items];

    return list.slice(0, limit).map((item) => {
      const rawSummary: string = item.description ?? "";
      const excerpt = stripHtml(rawSummary).slice(0, 160);
      const content: string = item["content:encoded"] ?? "";
      const imageMatch = content.match(/<img[^>]*src="([^"]+)"/);
      return {
        title: stripHtml(item.title ?? ""),
        url: item.link ?? "",
        date: item.pubDate
          ? new Date(item.pubDate).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })
          : "",
        excerpt: excerpt.length === 160 ? `${excerpt}…` : excerpt,
        image: imageMatch?.[1],
      };
    });
  } catch {
    return [];
  }
}
