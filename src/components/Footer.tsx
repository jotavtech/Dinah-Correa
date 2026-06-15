import { Phone, Mail, MapPin, Clock, Camera, MessageCircle } from "lucide-react";
import { Brand } from "./Brand";
import { Ornament } from "./Ornament";
import { navLinks } from "./nav-links";
import {
  siteConfig,
  services,
  whatsappLink,
  defaultWhatsappMessage,
  SHOW_AUTHOR_CREDIT,
  AUTHOR_CREDIT,
} from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark text-background/80">
      {/* CTA superior */}
      <div className="border-b border-white/10 px-5 py-14 sm:px-8">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center text-center">
          <Ornament />
          <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight text-background text-balance sm:text-4xl">
            Vamos cuidar da sua{" "}
            <span className="text-gold-soft">história</span> com segurança.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-background/60">
            Fale com o Cartório Dinah Corrêa e receba orientação clara sobre o
            seu atendimento.
          </p>
          <a
            href={whatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-[#1f7a5a] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#19684c]"
          >
            <MessageCircle className="size-[18px]" />
            Falar pelo WhatsApp
          </a>
        </div>
      </div>

      {/* Colunas */}
      <div className="px-5 py-14 sm:px-8">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Brand tone="dark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/60">
              Serviços notariais e registrais com transparência,
              responsabilidade e orientação segura em Solânea - PB.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do cartório"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 text-background/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Camera className="size-[18px]" />
              </a>
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp do cartório"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 text-background/80 transition-colors hover:border-gold hover:text-gold"
              >
                <MessageCircle className="size-[18px]" />
              </a>
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Navegação
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 transition-colors hover:text-gold-soft"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Serviços
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug} className="text-background/70">
                  {s.title}
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Contato
            </p>
            <ul className="mt-4 flex flex-col gap-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span className="text-background/70">{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-gold" />
                <a
                  href={siteConfig.phoneHref}
                  className="text-background/70 transition-colors hover:text-gold-soft"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-gold" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all text-background/70 transition-colors hover:text-gold-soft"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-4 shrink-0 text-gold" />
                <span className="text-background/70">{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Base */}
      <div className="border-t border-white/10 px-5 py-6 sm:px-8">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-2 text-center text-xs text-background/50 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
            reservados.
          </p>
          {SHOW_AUTHOR_CREDIT && (
            <p className="text-background/40">{AUTHOR_CREDIT}</p>
          )}
        </div>
      </div>
    </footer>
  );
}
