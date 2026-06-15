import {
  MessageCircle,
  MapPin,
  Clock,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "./Reveal";
import {
  siteConfig,
  whatsappLink,
  defaultWhatsappMessage,
} from "@/data/site";

type Item = {
  icon: React.ElementType;
  title: string;
  text: string;
  cta: string;
  href: string;
  external?: boolean;
};

const items: Item[] = [
  {
    icon: MessageCircle,
    title: "Atendimento online",
    text: "Tire dúvidas e solicite orientação inicial pelo WhatsApp.",
    cta: "Chamar agora",
    href: whatsappLink(defaultWhatsappMessage),
    external: true,
  },
  {
    icon: MapPin,
    title: "Localização",
    text: "Veja como chegar ao cartório, no Centro de Solânea.",
    cta: "Abrir mapa",
    href: siteConfig.mapsUrl,
    external: true,
  },
  {
    icon: Clock,
    title: "Horário",
    text: "Segunda a sexta, das 8h às 17h. Planeje seu atendimento.",
    cta: "Ver atendimento",
    href: "#atendimento",
  },
  {
    icon: FileText,
    title: "Serviços",
    text: "Conheça as principais áreas de atuação do cartório.",
    cta: "Ver serviços",
    href: "#servicos",
  },
];

export function QuickAccess() {
  return (
    <section
      aria-label="Acesso rápido"
      className="border-b border-border bg-surface-muted/50 px-5 py-12 sm:px-8 sm:py-14"
    >
      <div className="mx-auto grid w-full max-w-[1200px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={i * 70}>
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-card-hover)]"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-surface-muted text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-serif text-lg text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors group-hover:text-gold">
                  {item.cta}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
