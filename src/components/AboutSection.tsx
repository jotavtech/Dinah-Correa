import {
  Scale,
  HeartHandshake,
  Eye,
  ShieldCheck,
  Zap,
  BookOpenCheck,
} from "lucide-react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";

const values = [
  { icon: Scale, label: "Segurança jurídica" },
  { icon: HeartHandshake, label: "Atendimento humanizado" },
  { icon: Eye, label: "Transparência" },
  { icon: ShieldCheck, label: "Responsabilidade" },
  { icon: Zap, label: "Agilidade no encaminhamento" },
  { icon: BookOpenCheck, label: "Respeito à legislação" },
];

export function AboutSection() {
  return (
    <Section id="sobre" className="bg-background">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="flex flex-col">
          <SectionHeading
            eyebrow="Sobre o cartório"
            title={
              <>
                Tradição, fé pública e compromisso com a{" "}
                <span className="text-gold">segurança jurídica</span>.
              </>
            }
          />
          <Reveal delay={80}>
            <p className="mt-6 text-base leading-relaxed text-ink-soft text-pretty sm:text-lg">
              O Cartório Dinah Corrêa atua com foco na autenticidade,
              publicidade, transparência e segurança dos atos praticados,
              oferecendo atendimento claro e responsável à população de Solânea
              e região.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-8 rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)]">
              <Ornament className="justify-start" />
              <p className="mt-5 font-serif text-xl leading-snug text-ink">
                “Servir com seriedade institucional é também servir com
                cuidado: orientar, esclarecer e conduzir cada atendimento com
                respeito.”
              </p>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-muted">
                Nossa atuação
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.label} delay={i * 70}>
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-gold/50">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-gold">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-serif text-[1.05rem] leading-tight text-ink">
                      {value.label}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
