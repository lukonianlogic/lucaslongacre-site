import Image from "next/image";
import { getMediumArticles } from "@/lib/medium";
import { person, linkedinArticles } from "@/data/site";
import Eyebrow from "@/components/Eyebrow";

type WritingItem = {
  title: string;
  url: string;
  date: string;
  excerpt: string;
  image?: string;
  source: "Medium" | "LinkedIn";
};

export default async function Writing() {
  const mediumArticles = await getMediumArticles(4);

  const items: WritingItem[] = [
    ...linkedinArticles.map((a) => ({ ...a, source: "LinkedIn" as const })),
    ...mediumArticles.map((a) => ({ ...a, source: "Medium" as const })),
  ].sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });

  return (
    <section id="writing" className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <Eyebrow>Writing</Eyebrow>
        <div className="flex gap-4 text-sm">
          <a href={person.links.medium} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">
            Medium →
          </a>
          <a href={person.links.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">
            LinkedIn →
          </a>
        </div>
      </div>

      {items.length > 0 ? (
        <div className="mt-8 space-y-6">
          {items.map((article) => (
            <a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 border-b border-border pb-6 last:border-b-0 sm:gap-6"
            >
              {article.image ? (
                <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-accent-soft sm:h-24 sm:w-36">
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="144px"
                  />
                </div>
              ) : (
                <div className="hidden h-20 w-28 shrink-0 rounded-xl bg-accent-soft sm:block sm:h-24 sm:w-36" />
              )}

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent">
                      {article.source}
                    </span>
                    <h3 className="text-base font-semibold group-hover:text-accent">
                      {article.title}
                    </h3>
                  </div>
                  {article.date && (
                    <span className="whitespace-nowrap text-xs text-muted">{article.date}</span>
                  )}
                </div>
                {article.excerpt && (
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{article.excerpt}</p>
                )}
              </div>
            </a>
          ))}
        </div>
      ) : (
        <p className="mt-8 text-sm text-muted">
          Latest articles are on{" "}
          <a href={person.links.medium} className="text-accent hover:underline">
            Medium
          </a>
          .
        </p>
      )}
    </section>
  );
}
