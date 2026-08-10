import { skillGroups } from "@/data/site";
import Eyebrow from "@/components/Eyebrow";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <Eyebrow>Skills</Eyebrow>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-border bg-surface p-5 border-t-2 border-t-accent"
          >
            <h3 className="text-sm font-semibold">{group.label}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-accent-soft px-3 py-1 text-xs text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
