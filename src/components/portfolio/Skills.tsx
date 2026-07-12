import { useEffect, useRef, useState } from "react";
import { skills } from "@/content/portfolio";
import { SectionReveal } from "./SectionReveal";

export function Skills() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-secondary/40 px-4 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <SectionReveal className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Skills
          </h2>
          <p className="mt-3 text-muted-foreground">
            Where I am right now — and always improving.
          </p>
        </SectionReveal>

        <div ref={ref} className="space-y-6 rounded-3xl border border-border bg-card p-8 shadow-sm">
          {skills.map((s) => (
            <div key={s.label}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">
                  {s.label}
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {s.value}%
                </span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-1000 ease-out"
                  style={{ width: animate ? `${s.value}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}