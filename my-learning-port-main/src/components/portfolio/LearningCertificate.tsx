import { Award, CheckCircle2 } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

export function LearningCertificate() {
  return (
    <section
      id="learning-certificate"
      className="scroll-mt-20 bg-secondary/40 px-4 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <SectionReveal className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Mon premier projet d'apprentissage
          </h2>
        </SectionReveal>

        <SectionReveal>
          <div className="relative overflow-hidden rounded-[28px] border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="absolute right-4 top-4 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Personnel
            </div>

            <div className="mb-6 flex items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Award size={22} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Attestation de projet personnel
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Document personnel d'apprentissage, sans valeur officielle.
                </p>
              </div>
            </div>

            <div className="grid gap-4 border-b border-border pb-5 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  Nom
                </p>
                <p className="mt-1 text-base font-semibold text-foreground">Abama Kurtis</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  Date
                </p>
                <p className="mt-1 text-base font-semibold text-foreground">12/07/2026</p>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Ce document atteste que Kurtis a réalisé son premier projet personnel de développement web dans le cadre de son apprentissage des bases de l'informatique. Au cours de ce projet, il a découvert les notions fondamentales du HTML, du CSS et du JavaScript, et a créé un portfolio personnel ainsi qu'une calculatrice interactive.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Il s'agit d'une attestation personnelle de projet d'apprentissage, pas d'un certificat officiel délivré par une école ou un centre de formation.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-secondary/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Compétences mises en pratique
              </p>
              <ul className="mt-3 space-y-2 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 text-primary" />
                  <span>Structure d'une page web avec HTML</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 text-primary" />
                  <span>Mise en forme avec CSS</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 text-primary" />
                  <span>Interactivité avec JavaScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 text-primary" />
                  <span>Utilisation de React</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 text-primary" />
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 text-primary" />
                  <span>Résolution de problèmes</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4">
              <p className="text-sm font-semibold text-foreground">Statut :</p>
              <p className="text-sm text-muted-foreground">
                Projet personnel en cours d'apprentissage
              </p>
            </div>

            <div className="mt-6 flex justify-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Premier projet réalisé 🚀
              </span>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
