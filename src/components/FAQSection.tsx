"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Quais são os horários de atendimento?",
    a: "O atendimento ocorre de segunda a sexta-feira, das 8h às 17h. Recomendamos confirmar pelo WhatsApp antes de se deslocar.",
  },
  {
    q: "Posso iniciar um atendimento pelo WhatsApp?",
    a: "Sim. Você pode enviar sua dúvida e informar o serviço desejado pelo WhatsApp, e nossa equipe orientará os próximos passos.",
  },
  {
    q: "Quais serviços o cartório oferece?",
    a: "Atuamos com Registro de Imóveis, Tabelionato de Notas, Protesto de Títulos e RTD/PJ. Cada serviço possui requisitos próprios, que confirmamos no atendimento.",
  },
  {
    q: "O que preciso levar para reconhecimento de firma?",
    a: "Em geral, é necessário um documento de identificação com foto. Como cada situação pode exigir documentos específicos, entre em contato para confirmar o que se aplica ao seu caso.",
  },
  {
    q: "Como solicitar informações sobre registro de imóvel?",
    a: "Você pode nos chamar pelo WhatsApp ou telefone informando o que precisa. A documentação necessária varia conforme o ato e será orientada pela equipe.",
  },
  {
    q: "O cartório realiza atendimento remoto?",
    a: "Oferecemos atendimento presencial, remoto e telefônico. Os procedimentos possíveis remotamente dependem do tipo de serviço e serão informados no contato.",
  },
  {
    q: "Como saber quais documentos são necessários?",
    a: "Os documentos dependem do serviço e da análise de cada caso. Recomendamos entrar em contato para receber a orientação correta antes de comparecer.",
  },
  {
    q: "Onde o cartório está localizado?",
    a: "Estamos na R. José Amâncio Ramalho, 269, Centro, Solânea - PB. Há um botão na seção de localização para abrir a rota no Google Maps.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="duvidas" className="bg-background">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title={
            <>
              Perguntas comuns,{" "}
              <span className="text-gold">respostas claras</span>.
            </>
          }
          description="Não encontrou o que procurava? Fale com nossa equipe pelo WhatsApp para uma orientação específica ao seu caso."
        />

        <Reveal>
          <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-trigger-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-surface-muted/50 sm:px-6"
                    >
                      <span className="font-serif text-[1.05rem] text-ink">
                        {faq.q}
                      </span>
                      <span
                        className={cn(
                          "flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-gold transition-transform duration-300",
                          isOpen && "rotate-45 bg-gold text-white",
                        )}
                      >
                        <Plus className="size-4" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    inert={!isOpen}
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
