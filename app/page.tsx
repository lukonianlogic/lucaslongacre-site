import Hero from "@/components/Hero";
import Consulting from "@/components/Consulting";
import FraudProtection from "@/components/FraudProtection";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import CaseStudy from "@/components/CaseStudy";
import Testimonials from "@/components/Testimonials";
import Podcast from "@/components/Podcast";
import Writing from "@/components/Writing";
import JsonLd from "@/components/JsonLd";
import { consulting, person } from "@/data/site";
import { LL_LABS_ID, PERSON_ID, SITE_URL } from "@/lib/schema";

const llLabsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": LL_LABS_ID,
  name: "LL Labs, LLC",
  legalName: "LL Labs, LLC",
  url: SITE_URL,
  description: consulting.pitch,
  email: person.email,
  founder: { "@id": PERSON_ID },
  serviceType: [...consulting.services, ...consulting.fraud.pillars.map((p) => p.title)],
};

export default function Home() {
  return (
    <>
      <JsonLd data={llLabsJsonLd} />
      <Hero />
      <Consulting />
      <FraudProtection />
      <About />
      <Skills />
      <Experience />
      <CaseStudy />
      <Testimonials />
      <Podcast />
      <Writing />
    </>
  );
}
