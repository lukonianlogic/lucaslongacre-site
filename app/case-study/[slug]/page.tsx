import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/data/site";
import { SITE_URL } from "@/lib/schema";
import BackLink from "@/components/BackLink";
import CaseStudy from "@/components/CaseStudy";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata(props: PageProps<"/case-study/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  const url = `${SITE_URL}/case-study/${study.slug}`;
  return {
    title: study.seoTitle,
    description: study.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: study.seoTitle,
      description: study.seoDescription,
      url,
      siteName: "Lucas Longacre",
      type: "article",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: study.seoTitle,
      description: study.seoDescription,
      images: ["/opengraph-image"],
    },
  };
}

export default async function CaseStudyPage(props: PageProps<"/case-study/[slug]">) {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <BackLink />
      <CaseStudy study={study} />
    </>
  );
}
