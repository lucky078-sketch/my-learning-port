import { Braces, Code2, Cpu, GitBranch, Globe, Palette } from "lucide-react";
import { learningTopics } from "@/content/portfolio";
import { SectionReveal } from "./SectionReveal";

const iconMap = { Cpu, Code2, Palette, Braces, Globe, GitBranch };

export function Learning() {
  return (
    <section
      id="learning"
      className="scroll-mt-20 bg-secondary/40 px-4 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionReveal className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What I'm Learning
          </h2>
          <p className="mt-3 text-muted-foreground">
            The core concepts behind the web, explained simply.
          </p>
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {learningTopics.map((t, i) => {
            const Icon = iconMap[t.icon as keyof typeof iconMap];
            return (
              <SectionReveal key={t.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t.description}
                  </p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}