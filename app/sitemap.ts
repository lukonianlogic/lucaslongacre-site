import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/site";

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
      url: "https://lucaslongacre.com/signal-and-noise",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...caseStudies.map((study) => ({
      url: `https://lucaslongacre.com/case-study/${study.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
