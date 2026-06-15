import { cn } from "@/lib/cn";
import { siteConfig } from "@/data/site";

/**
 * Marca do cartório: selo com monograma "DC" + nome.
 * `tone` ajusta as cores para fundos claros ou escuros.
 */
export function Brand({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "relative flex size-10 shrink-0 items-center justify-center rounded-full border",
          isDark ? "border-gold/50" : "border-gold/60",
        )}
      >
        <span
          className={cn(
            "absolute inset-[3px] rounded-full border",
            isDark ? "border-gold/25" : "border-border",
          )}
        />
        <span className="font-serif text-sm font-semibold tracking-tight text-gold">
          DC
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif text-[1.05rem] font-semibold tracking-tight",
            isDark ? "text-background" : "text-ink",
          )}
        >
          {siteConfig.name}
        </span>
        <span
          className={cn(
            "mt-1 text-[0.62rem] font-medium uppercase tracking-[0.2em]",
            isDark ? "text-gold-soft/80" : "text-muted",
          )}
        >
          {siteConfig.city}
        </span>
      </span>
    </span>
  );
}
