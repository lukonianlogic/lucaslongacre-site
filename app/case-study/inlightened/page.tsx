import type { Metadata } from "next";
import BackLink from "@/components/BackLink";
import CaseStudy from "@/components/CaseStudy";

const title = "Inlightened Case Study — Head of Product | Lucas Longacre";
const description =
  "How Lucas Longacre led Inlightened from early-stage MVP through a stability rebuild, 10x expert-panel growth, its first AI feature, and a 1M+ expert parent-company integration.";
const url = "https://lucaslongacre.com/case-study/inlightened";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Lucas Longacre", type: "article", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function InlightenedCaseStudyPage() {
  return (
    <>
      <BackLink />
      <CaseStudy full />
    </>
  );
}
