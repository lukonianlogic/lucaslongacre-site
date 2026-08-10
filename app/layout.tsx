import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

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
  openGraph: {
    title: "Lucas Longacre — Head of Product",
    description:
      "AI & LLM product leader, builder, and host of Signal & Noise: Executive Voices.",
    url: "https://lucaslongacre.com",
    siteName: "Lucas Longacre",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
