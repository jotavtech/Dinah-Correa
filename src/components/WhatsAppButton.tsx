import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/cn";
import { whatsappLink } from "@/data/site";

type Variant = "solid" | "outline" | "ink";

const variants: Record<Variant, string> = {
  solid:
    "bg-[#1f7a5a] text-white hover:bg-[#19684c] shadow-[0_8px_24px_-10px_rgba(31,122,90,0.6)]",
  outline:
    "border border-border bg-surface text-ink hover:border-gold hover:text-gold-soft hover:bg-surface",
  ink: "bg-ink text-background hover:bg-ink-soft",
};

export function WhatsAppButton({
  message,
  label = "Falar pelo WhatsApp",
  variant = "solid",
  className,
}: {
  message?: string;
  label?: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        className,
      )}
    >
      <MessageCircle className="size-[18px] transition-transform duration-300 group-hover:-rotate-12" />
      {label}
    </a>
  );
}
