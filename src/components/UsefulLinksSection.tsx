import { ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { usefulLinks } from "@/data/site";

export function UsefulLinksSection() {
  return (
    <Section
      aria-label="Links úteis"
      className="border-t border-border bg-surface-muted/40"
    >
      <SectionHeading
        eyebrow="Links úteis"
        title="Serviços e plataformas oficiais"
        description="Acesse diretamente as principais plataformas relacionadas aos serviços notariais e registrais."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {usefulLinks.map((link, i) => (
          <Reveal key={link.label} delay={i * 60}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-[var(--shadow-card)]"
            >
              <div>
                <p className="font-serif text-lg text-ink transition-colors group-hover:text-gold">
                  {link.label}
                </p>
                <p className="mt-1 text-sm text-muted">{link.description}</p>
              </div>
              <ExternalLink className="size-4 shrink-0 text-muted transition-colors group-hover:text-gold" />
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
