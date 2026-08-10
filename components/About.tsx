import Image from "next/image";
import { about } from "@/data/site";
import Eyebrow from "@/components/Eyebrow";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <Eyebrow>About</Eyebrow>

      <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-[auto_1fr]">
        <div
          className="h-28 w-28 shrink-0 overflow-hidden rounded-full"
          style={{ border: "2px solid var(--accent-soft)" }}
        >
          <Image
            src="/profile.jpg"
            alt="Lucas Longacre"
            width={160}
            height={160}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div className="max-w-2xl">
          <div className="space-y-4 text-sm leading-7 text-muted sm:text-base sm:leading-8">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h3 className="mt-8 text-xs font-mono uppercase tracking-wider text-muted">
            What I care about
          </h3>
          <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {about.focusAreas.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
