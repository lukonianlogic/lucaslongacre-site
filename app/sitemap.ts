import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://lucaslongacre.com",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://lucaslongacre.com/ai-fraud-protection",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://lucaslongacre.com/case-study/inlightened",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
