import { Calculator } from "./Calculator";
import { SectionReveal } from "./SectionReveal";

export function Project() {
  return (
    <section id="project" className="scroll-mt-20 px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionReveal className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My First Project
          </h2>
          <p className="mt-3 text-muted-foreground">
            A working calculator built with React and JavaScript.
          </p>
        </SectionReveal>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <SectionReveal>
            <Calculator />
          </SectionReveal>

          <SectionReveal delay={150}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">
                What JavaScript does here
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                JavaScript listens for every button click, remembers the numbers
                you type, keeps track of the operator you chose, and performs
                the actual math when you press equals. React's state hooks let
                the display update instantly whenever anything changes — no page
                reload needed. It's a small project, but it uses the same core
                ideas as much bigger web apps.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>· Handles addition, subtraction, multiplication and division</li>
                <li>· Prevents divide-by-zero errors</li>
                <li>· Fully responsive and touch-friendly</li>
              </ul>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}