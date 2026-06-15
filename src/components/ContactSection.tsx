import { Phone, Check } from "lucide-react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ContactFormToWhatsApp } from "./ContactFormToWhatsApp";
import { WhatsAppButton } from "./WhatsAppButton";
import { siteConfig, defaultWhatsappMessage } from "@/data/site";

const checklist = [
  "Nome completo",
  "Tipo de serviço",
  "Documento ou assunto",
  "Preferência de atendimento",
  "Dúvida principal",
];

export function ContactSection() {
  return (
    <Section id="atendimento" className="bg-background">
      <SectionHeading
        eyebrow="Atendimento online"
        title={
          <>
            Precisa de atendimento?{" "}
            <span className="text-gold">Fale com nossa equipe.</span>
          </>
        }
        description="Envie sua dúvida pelo WhatsApp e informe o serviço desejado. Nossa equipe orientará os próximos passos de acordo com o atendimento disponível."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
        {/* Lateral — telefone, CTA e checklist */}
        <Reveal className="flex flex-col gap-6">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)]">
            <span className="eyebrow">Telefone & WhatsApp</span>
            <a
              href={siteConfig.phoneHref}
              className="mt-3 flex items-center gap-3 font-serif text-2xl text-ink transition-colors hover:text-gold"
            >
              <Phone className="size-5 text-gold" />
              {siteConfig.phone}
            </a>
            <div className="mt-5">
              <WhatsAppButton
                message={defaultWhatsappMessage}
                label="Falar pelo WhatsApp"
                className="w-full"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface-muted/50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
              Antes de entrar em contato
            </p>
            <p className="mt-1 text-sm text-muted">
              Tenha em mãos, se possível:
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-ink-soft">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Formulário */}
        <Reveal delay={100}>
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8">
            <h3 className="font-serif text-xl text-ink">
              Monte sua mensagem
            </h3>
            <p className="mt-1.5 text-sm text-muted">
              Preencha os campos e enviaremos você direto ao WhatsApp com tudo
              preenchido.
            </p>
            <div className="mt-6">
              <ContactFormToWhatsApp />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
