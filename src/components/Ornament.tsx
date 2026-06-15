import { cn } from "@/lib/cn";

/**
 * Pequeno ornamento linear com losango dourado central —
 * remete a selo de documento. Puramente decorativo.
 */
export function Ornament({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center justify-center gap-3", className)}
    >
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-soft" />
      <span className="block size-1.5 rotate-45 border border-gold/70" />
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold-soft" />
    </div>
  );
}
