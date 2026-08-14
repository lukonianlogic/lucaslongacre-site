import { person } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold">{person.name}</p>
          <p className="mt-1 text-sm text-muted">{person.title} · {person.company}</p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href={`mailto:${person.email}`} className="text-muted hover:text-foreground">
            {person.email}
          </a>
          <a href={person.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground">
            LinkedIn
          </a>
          <a href={person.links.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground">
            GitHub
          </a>
          <a href={person.links.medium} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground">
            Medium
          </a>
          <a href={person.links.substack} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground">
            Substack
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-6 pb-8 text-xs text-muted">
        © {year} {person.name}
      </div>
    </footer>
  );
}
