import { getFeedArticles, type FeedArticle } from "@/lib/rss";

export type Article = FeedArticle;

const FEED_URL = "https://lucaslongacre.substack.com/feed";

export function getSubstackArticles(limit = 3): Promise<Article[]> {
  return getFeedArticles(FEED_URL, limit);
}
