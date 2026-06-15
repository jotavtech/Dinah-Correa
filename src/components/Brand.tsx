import Image from "next/image";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/data/site";
import logoMetal from "../../public/logo-dc.png";
import logoLight from "../../public/logo-dc-light.png";

/**
 * Marca do cartório: logo "DC" + nome.
 * `tone` troca o logo (metálico p/ fundo claro, silhueta clara p/ fundo escuro).
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
      <Image
        src={isDark ? logoLight : logoMetal}
        alt=""
        aria-hidden="true"
        priority
        className="h-9 w-auto sm:h-10"
      />
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
