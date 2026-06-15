"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/cn";
import { whatsappLink, defaultWhatsappMessage } from "@/data/site";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className={cn(
        "group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-50",
        "inline-flex items-center gap-2.5 rounded-full bg-[#1f7a5a] py-3.5 pl-3.5 pr-4 text-white",
        "shadow-[0_12px_32px_-8px_rgba(31,122,90,0.55)] transition-all duration-500",
        "hover:bg-[#19684c] focus-visible:outline-2 focus-visible:outline-offset-2",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <span className="relative flex size-6 items-center justify-center">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-white/40 [animation-duration:2.4s] motion-reduce:hidden" />
        <MessageCircle className="size-6" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">
        Atendimento
      </span>
    </a>
  );
}
