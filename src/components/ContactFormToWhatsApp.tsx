"use client";

import { useState } from "react";
import { MessageCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/cn";
import { services, whatsappLink } from "@/data/site";

type Errors = Partial<Record<"name" | "service" | "message", string>>;

export function ContactFormToWhatsApp() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = "Informe seu nome.";
    if (!service) next.service = "Selecione um serviço.";
    if (!message.trim()) next.message = "Descreva sua dúvida.";
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const phonePart = phone.trim() ? ` Meu telefone é ${phone.trim()}.` : "";
    const text =
      `Olá, Cartório Dinah Corrêa. Meu nome é ${name.trim()}. ` +
      `Gostaria de atendimento sobre ${service}.${phonePart} ` +
      `Minha dúvida é: ${message.trim()}`;

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  const fieldBase =
    "w-full rounded-xl border bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-gold focus:outline-none";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nome completo" htmlFor="name" error={errors.name}>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
            aria-invalid={!!errors.name}
            className={cn(fieldBase, errors.name ? "border-red-400" : "border-border")}
          />
        </Field>

        <Field label="Telefone (opcional)" htmlFor="phone">
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(83) 9 0000-0000"
            className={cn(fieldBase, "border-border")}
          />
        </Field>
      </div>

      <Field label="Serviço desejado" htmlFor="service" error={errors.service}>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          aria-invalid={!!errors.service}
          className={cn(
            fieldBase,
            "appearance-none",
            errors.service ? "border-red-400" : "border-border",
            service ? "text-ink" : "text-muted/70",
          )}
        >
          <option value="">Selecione um serviço</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Outro assunto">Outro assunto</option>
        </select>
      </Field>

      <Field label="Sua dúvida" htmlFor="message" error={errors.message}>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Descreva brevemente o que você precisa."
          aria-invalid={!!errors.message}
          className={cn(
            fieldBase,
            "resize-y",
            errors.message ? "border-red-400" : "border-border",
          )}
        />
      </Field>

      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#1f7a5a] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#19684c] focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <MessageCircle className="size-[18px]" />
        Enviar pelo WhatsApp
      </button>

      <p className="text-center text-xs text-muted">
        Nenhum dado é armazenado. Sua mensagem é montada e aberta diretamente no
        WhatsApp.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-xs font-medium uppercase tracking-wide text-ink-soft"
      >
        {label}
      </label>
      {children}
      {error && (
        <span className="flex items-center gap-1 text-xs text-red-500">
          <AlertCircle className="size-3.5" />
          {error}
        </span>
      )}
    </div>
  );
}
