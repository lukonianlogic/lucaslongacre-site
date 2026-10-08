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

export default function Home() {
  return (
    <>
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
