import { Brain, Lightbulb, Users, BookOpen } from "lucide-react";
import profileImg from "@/assets/kurtis.png";
import { profile, strengths } from "@/content/portfolio";
import { SectionReveal } from "./SectionReveal";

const icons = [Brain, Lightbulb, Users, BookOpen];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionReveal className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            À propos de moi
          </h2>
          <p className="mt-3 text-muted-foreground">Un petit aperçu de qui je suis.</p>
        </SectionReveal>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <SectionReveal className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-primary/20 blur-2xl" />
              <img
                src={profileImg}
                alt="Photo de Kurtis"
                width={1024}
                height={1024}
                loading="lazy"
                style={{ objectPosition: "center top" }}
                className="h-64 w-64 rounded-full border-4 border-card object-cover object-top shadow-xl sm:h-80 sm:w-80"
              />
            </div>
          </SectionReveal>

          <SectionReveal delay={150}>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Bonjour
                </p>
                <h3 className="mt-1 text-2xl font-bold text-foreground">
                  {profile.name}
                </h3>
                <p className="text-sm text-muted-foreground">{profile.city}</p>
              </div>
              <p className="leading-relaxed text-muted-foreground">{profile.bio}</p>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Objectifs d'apprentissage
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  {profile.goals}
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s, i) => {
            const Icon = icons[i];
            return (
              <SectionReveal key={s.title} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-base font-semibold text-foreground">
                    {s.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
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