import { ArrowDown, Sparkles } from "lucide-react";
import { profile } from "@/content/portfolio";
import { SectionReveal } from "./SectionReveal";

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-20 items-center justify-center overflow-hidden px-4 pt-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      <SectionReveal className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
          <Sparkles size={14} className="text-primary" />
          Bienvenue dans mon parcours d'apprentissage
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Bonjour, je suis <span className="text-primary">{profile.name}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.intro}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={scrollToAbout}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
          >
            En savoir plus
            <ArrowDown
              size={16}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </button>
          <a
            href="#project"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            Voir mon projet
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}