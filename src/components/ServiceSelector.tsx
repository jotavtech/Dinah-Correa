"use client";

import { useState } from "react";
import { MessageCircle, HelpCircle, Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";
import { services, whatsappLink, type Service } from "@/data/site";

type Question = {
  prompt: string;
  slug: Service["slug"];
};

const questions: Question[] = [
  { prompt: "Quero resolver algo sobre imóvel", slug: "registro-imoveis" },
  {
    prompt: "Preciso reconhecer firma ou autenticar documento",
    slug: "notas",
  },
  { prompt: "Tenho uma dívida ou título para protesto", slug: "protesto" },
  {
    prompt: "Quero registrar contrato, documento ou pessoa jurídica",
    slug: "rtd-pj",
  },
];

export function ServiceSelector() {
  const [selected, setSelected] = useState<Service["slug"] | null>(null);
  const service = services.find((s) => s.slug === selected) ?? null;
  const message = service
    ? `Olá, Cartório Dinah Corrêa. Gostaria de atendimento sobre: ${service.title}.`
    : "";

  return (
    <Reveal>
      <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-card)]">
        <div className="grid lg:grid-cols-[1fr_0.9fr]">
          {/* Perguntas */}
          <div className="border-b border-border p-7 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-2.5 text-gold">
              <HelpCircle className="size-5" />
              <span className="eyebrow !text-gold">Orientação rápida</span>
            </div>
            <h3 className="mt-3 font-serif text-2xl text-ink">
              Não sabe qual serviço precisa?
            </h3>
            <p className="mt-2 text-sm text-muted">
              Escolha a opção que mais se aproxima da sua situação. Vamos
              indicar o serviço correspondente.
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              {questions.map((q) => {
                const active = selected === q.slug;
                return (
                  <button
                    key={q.slug}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelected(q.slug)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all duration-200",
                      active
                        ? "border-gold bg-gold/5 text-ink"
                        : "border-border bg-surface text-ink-soft hover:border-gold/50 hover:bg-surface-muted/50",
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors",
                        active
                          ? "border-gold bg-gold text-white"
                          : "border-border",
                      )}
                    >
                      {active && <Check className="size-3.5" />}
                    </span>
                    {q.prompt}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Resultado */}
          <div className="flex flex-col justify-center bg-surface-muted/40 p-7 sm:p-8">
            {service ? (
              <div key={service.slug} className="animate-[fadeIn_0.4s_ease]">
                <span className="eyebrow">Serviço indicado</span>
                <h4 className="mt-2 font-serif text-2xl text-ink">
                  {service.title}
                </h4>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <a
                  href={whatsappLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Falar pelo WhatsApp sobre ${service.title}`}
                  className="mt-6 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#1f7a5a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#19684c]"
                >
                  <MessageCircle className="size-[18px]" />
                  Falar sobre {service.title}
                </a>
              </div>
            ) : (
              <div className="text-center text-muted">
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-dashed border-gold/40 text-gold">
                  <HelpCircle className="size-6" />
                </div>
                <p className="mt-4 text-sm">
                  Selecione uma das opções ao lado para ver o serviço
                  correspondente e iniciar o atendimento.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
