import { ArrowDown, Clock, MapPin, ShieldCheck, Headset } from "lucide-react";
import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";
import { WhatsAppButton } from "./WhatsAppButton";
import { siteConfig, defaultWhatsappMessage } from "@/data/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-border px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20"
    >
      {/* Ornamento de fundo discreto */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full border border-gold/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 size-[20rem] rounded-full border border-gold/10"
      />

      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Coluna editorial */}
        <div className="flex flex-col">
          <Reveal>
            <span className="eyebrow">Cartório em {siteConfig.city}</span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mt-5 font-serif text-[2.5rem] leading-[1.06] tracking-tight text-ink text-balance sm:text-5xl lg:text-[3.5rem]">
              Segurança jurídica, atendimento claro e{" "}
              <span className="text-gold">tradição</span> a serviço da sua
              história.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft text-pretty sm:text-lg">
              O {siteConfig.name} oferece serviços notariais e registrais com
              transparência, responsabilidade e orientação segura para cada
              etapa.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton
                message={defaultWhatsappMessage}
                label="Falar pelo WhatsApp"
                className="w-full sm:w-auto"
              />
              <a
                href="#servicos"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-gold hover:text-gold sm:w-auto"
              >
                Ver serviços
                <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
              <div className="flex items-start gap-3 bg-surface p-4">
                <Clock className="mt-0.5 size-5 shrink-0 text-gold" />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                    Horário
                  </dt>
                  <dd className="mt-0.5 text-sm text-ink">
                    Seg. a sex.
                    <br />
                    8h às 17h
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-surface p-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-gold" />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                    Endereço
                  </dt>
                  <dd className="mt-0.5 text-sm text-ink">
                    {siteConfig.addressShort}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-surface p-4">
                <Headset className="mt-0.5 size-5 shrink-0 text-gold" />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                    Atendimento
                  </dt>
                  <dd className="mt-0.5 text-sm text-ink">
                    Presencial, remoto
                    <br />e telefônico
                  </dd>
                </div>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* Card lateral — selo institucional */}
        <Reveal delay={200} className="lg:pl-4">
          <div className="relative rounded-3xl border border-border bg-surface p-8 shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between">
              <span className="eyebrow">Fé pública</span>
              <ShieldCheck className="size-5 text-gold" />
            </div>

            <Ornament className="mt-6 justify-start" />

            <p className="mt-6 font-serif text-2xl leading-snug text-ink">
              Cada ato registrado com autenticidade, publicidade e segurança.
            </p>

            <div className="mt-8 flex items-center justify-center rounded-2xl border border-dashed border-gold/40 bg-surface-muted/60 px-6 py-7 text-center">
              <div>
                <p className="font-serif text-lg text-ink">Solânea</p>
                <div className="my-2 h-px w-12 bg-gold/40 mx-auto" />
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  Paraíba · Brasil
                </p>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-muted">
              {siteConfig.serviceModes}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
