import { MapPin, Clock, Headset, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { siteConfig } from "@/data/site";

export function LocationSection() {
  return (
    <Section
      id="localizacao"
      className="border-y border-border bg-taupe"
    >
      <SectionHeading
        eyebrow="Localização"
        title={
          <>
            No <span className="text-gold">Centro de Solânea</span>, de portas
            abertas para a comunidade.
          </>
        }
      />

      <Reveal className="mt-10">
        <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-card)]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-7 sm:p-9">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-gold">
                  <MapPin className="size-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Endereço
                  </p>
                  <p className="mt-1 font-serif text-xl leading-snug text-ink">
                    {siteConfig.addressShort}
                    <br />
                    {siteConfig.city}
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl border border-border bg-surface-muted/50 p-4">
                  <Clock className="mt-0.5 size-5 shrink-0 text-gold" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Horário
                    </p>
                    <p className="mt-0.5 text-sm text-ink">{siteConfig.hours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-surface-muted/50 p-4">
                  <Headset className="mt-0.5 size-5 shrink-0 text-gold" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Atendimento
                    </p>
                    <p className="mt-0.5 text-sm text-ink">
                      Presencial, remoto e telefônico
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-ink-soft"
              >
                Abrir no Google Maps
                <ExternalLink className="size-4" />
              </a>
            </div>

            {/* Placeholder de mapa — leve, sem iframe automático */}
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir localização no Google Maps"
              className="group relative flex min-h-[240px] items-center justify-center overflow-hidden border-t border-border bg-taupe lg:border-l lg:border-t-0"
            >
              {/* grade estilizada de "mapa" */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.5]"
                style={{
                  backgroundImage:
                    "linear-gradient(#cdc6b6 1px, transparent 1px), linear-gradient(90deg, #cdc6b6 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute left-1/3 top-0 h-full w-10 -rotate-12 bg-[#e2ddd1]"
              />
              <div className="relative flex flex-col items-center text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-gold text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <MapPin className="size-7" />
                </span>
                <span className="mt-3 rounded-full bg-surface/90 px-4 py-1.5 text-xs font-semibold text-ink shadow-sm">
                  Ver no mapa
                </span>
              </div>
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
