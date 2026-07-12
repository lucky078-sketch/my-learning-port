import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { contact } from "@/content/portfolio";
import { SectionReveal } from "./SectionReveal";

export function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
    { icon: MapPin, label: "Location", value: contact.location, href: null },
  ];

  const socials = [
    { icon: Github, label: "GitHub", href: contact.socials.github },
    { icon: Linkedin, label: "LinkedIn", href: contact.socials.linkedin },
    { icon: Twitter, label: "Twitter", href: contact.socials.twitter },
  ];

  return (
    <section id="contact" className="scroll-mt-20 px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionReveal className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-3 text-muted-foreground">
            I'd love to hear from fellow learners.
          </p>
        </SectionReveal>

        <div className="grid gap-4 sm:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            const inner = (
              <div className="group h-full rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <Icon size={18} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {it.label}
                </p>
                <p className="mt-1 truncate text-sm font-medium text-foreground">
                  {it.value}
                </p>
              </div>
            );
            return (
              <SectionReveal key={it.label} delay={i * 100}>
                {it.href ? (
                  <a href={it.href} className="block h-full">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal delay={300} className="mt-10 flex justify-center gap-3">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:text-primary hover:shadow-md"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </SectionReveal>
      </div>
    </section>
  );
}