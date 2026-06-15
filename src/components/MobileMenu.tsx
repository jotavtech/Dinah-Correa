"use client";

import { useEffect } from "react";
import { X, Phone, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/cn";
import { navLinks } from "./nav-links";
import { Brand } from "./Brand";
import { WhatsAppButton } from "./WhatsAppButton";
import { siteConfig, defaultWhatsappMessage } from "@/data/site";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Trava o scroll do body e fecha com Esc enquanto aberto.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <button
        type="button"
        tabIndex={open ? 0 : -1}
        aria-label="Fechar menu"
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={cn(
          "absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-background shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <Brand />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="flex size-10 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-gold hover:text-gold"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex flex-col px-3 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-lg px-3 py-3 font-serif text-lg text-ink transition-colors hover:bg-surface-muted hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-4 border-t border-border px-5 py-5">
          <WhatsAppButton
            message={defaultWhatsappMessage}
            label="Atendimento online"
            className="w-full"
          />
          <ul className="flex flex-col gap-2.5 text-sm text-muted">
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 text-gold" />
              <a href={siteConfig.phoneHref} className="hover:text-ink">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="size-4 text-gold" />
              <span>{siteConfig.addressShort}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="size-4 text-gold" />
              <span>{siteConfig.hoursShort}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
