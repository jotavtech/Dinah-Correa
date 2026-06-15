import {
  Building2,
  PenLine,
  FileWarning,
  FileStack,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappLink, type Service } from "@/data/site";

const icons: Record<Service["slug"], React.ElementType> = {
  "registro-imoveis": Building2,
  notas: PenLine,
  protesto: FileWarning,
  "rtd-pj": FileStack,
};

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = icons[service.slug];
  const message = `Olá, Cartório Dinah Corrêa. Gostaria de atendimento sobre: ${service.title}.`;

  return (
    <Reveal delay={index * 70} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-card-hover)]">
        {/* Número do "documento" */}
        <span
          aria-hidden="true"
          className="absolute right-5 top-4 font-serif text-3xl text-border transition-colors group-hover:text-gold-soft"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="flex size-12 items-center justify-center rounded-xl bg-surface-muted text-gold transition-colors group-hover:bg-gold group-hover:text-white">
          <Icon className="size-6" />
        </span>

        <h3 className="mt-5 font-serif text-xl text-ink">{service.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted">
          {service.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {service.topics.map((topic) => (
            <li
              key={topic}
              className="rounded-full border border-border bg-surface-muted/60 px-2.5 py-1 text-xs text-ink-soft"
            >
              {topic}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center border-t border-border pt-4">
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-gold"
          >
            {service.cta}
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </article>
    </Reveal>
  );
}
