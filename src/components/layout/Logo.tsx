import { cn } from "@/lib/utils";

/** Faceted gem mark with a sweeping highlight — the "shine" in ShinePro. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn("size-9", className)} aria-hidden="true">
      <defs>
        <linearGradient id="lm-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff3d6" />
          <stop offset="45%" stopColor="#e6c079" />
          <stop offset="100%" stopColor="#8a6524" />
        </linearGradient>
        <linearGradient id="lm-a" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#1fb5a5" />
          <stop offset="100%" stopColor="#4fe7d4" />
        </linearGradient>
      </defs>
      <path d="M20 2.5l15.5 9v17L20 37.5 4.5 28.5v-17L20 2.5Z" fill="none" stroke="url(#lm-a)" strokeWidth="1.1" opacity="0.55" />
      <path d="M20 8l10.5 6.1v11.8L20 32l-10.5-6.1V14.1L20 8Z" fill="url(#lm-g)" />
      <path d="M20 8l10.5 6.1L20 20 9.5 14.1 20 8Z" fill="#fff3d6" opacity="0.55" />
      <path d="M20 20v12" stroke="#8a6524" strokeWidth="0.9" opacity="0.55" />
      <path d="M20 20L9.5 14.1M20 20l10.5-5.9" stroke="#8a6524" strokeWidth="0.7" opacity="0.35" />
    </svg>
  );
}

export function Logo({
  name,
  tagline,
  className,
  light = false,
}: {
  name: string;
  tagline?: string;
  className?: string;
  /** White wordmark for use over a dark photograph. */
  light?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[1.15rem] font-bold tracking-tight transition-colors duration-500", light ? "text-white" : "text-chalk")}>
          {name}
        </span>
        {tagline && (
          <span className={cn("mt-1 text-[0.6rem] font-medium tracking-[0.18em] uppercase transition-colors duration-500", light ? "text-white/70" : "text-fog")}>
            {tagline}
          </span>
        )}
      </span>
    </span>
  );
}
