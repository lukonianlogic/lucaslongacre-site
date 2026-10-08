import type { Metadata } from "next";
import BackLink from "@/components/BackLink";
import FraudProtection from "@/components/FraudProtection";

const title = "AI Fraud Protection & Identity Verification Consulting | Lucas Longacre";
const description =
  "Consulting on fraud prevention for platforms that onboard credentialed professionals: behavioral detection, government ID verification, and credential checks against authoritative sources.";
const url = "https://lucaslongacre.com/ai-fraud-protection";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Lucas Longacre", type: "website", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function AIFraudProtectionPage() {
  return (
    <>
      <BackLink />
      <FraudProtection full />
    </>
  );
}
