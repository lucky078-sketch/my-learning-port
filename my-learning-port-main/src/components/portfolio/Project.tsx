import { Calculator } from "./Calculator";
import { SectionReveal } from "./SectionReveal";

export function Project() {
  return (
    <section id="project" className="scroll-mt-20 px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionReveal className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Mon premier projet
          </h2>
          <p className="mt-3 text-muted-foreground">
            Un calculateur fonctionnel créé avec React et JavaScript.
          </p>
        </SectionReveal>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <SectionReveal>
            <Calculator />
          </SectionReveal>

          <SectionReveal delay={150}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">
                Ce que fait JavaScript ici
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                JavaScript écoute chaque clic sur les boutons, mémorise les nombres
                que vous tapez, garde en mémoire l'opération choisie et effectue
                le calcul réel lorsque vous appuyez sur le signe égal. Les hooks
                d'état de React permettent à l'affichage de se mettre à jour
                immédiatement à chaque changement, sans rechargement de la page.
                C'est un petit projet, mais il utilise les mêmes idées de base
                que les applications web beaucoup plus grandes.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>· Gère l'addition, la soustraction, la multiplication et la division</li>
                <li>· Empêche les erreurs de division par zéro</li>
                <li>· Entièrement responsive et pratique sur mobile</li>
              </ul>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}