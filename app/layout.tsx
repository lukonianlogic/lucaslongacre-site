import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { PERSON_ID, SITE_URL } from "@/lib/schema";
import { person } from "@/data/site";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-3HQ7BDNP8N";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucas Longacre — Head of Product",
  description:
    "Lucas Longacre — Head of Product at Inlightened. AI & LLM product leader, builder, and host of Signal & Noise: Executive Voices.",
  metadataBase: new URL("https://lucaslongacre.com"),
  alternates: {
    canonical: "https://lucaslongacre.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Lucas Longacre — Head of Product",
    description:
      "AI & LLM product leader, builder, and host of Signal & Noise: Executive Voices.",
    url: "https://lucaslongacre.com",
    siteName: "Lucas Longacre",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Longacre — Head of Product",
    description:
      "AI & LLM product leader, builder, and host of Signal & Noise: Executive Voices.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: person.name,
  jobTitle: person.title,
  description: person.tagline,
  worksFor: {
    "@type": "Organization",
    name: person.company,
    url: "https://www.getinlightened.com",
  },
  url: SITE_URL,
  image: `${SITE_URL}/profile.jpg`,
  email: `mailto:${person.email}`,
  knowsAbout: [
    "Artificial intelligence",
    "Large language models",
    "Product management",
    "Fraud prevention",
    "Identity verification",
  ],
  sameAs: [
    person.links.linkedin,
    person.links.github,
    person.links.medium,
    person.links.substack,
    person.links.podcast,
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={personJsonLd} />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
