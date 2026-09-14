import Link from "next/link";
import { cn } from "@/lib/utils";
import type { MediaSlot } from "@/lib/media";
import type { Locale } from "@/i18n/config";
import { Figure } from "@/components/graphics/Figure";
import { Icon } from "@/components/graphics/Icon";

/**
 * The site's main building block: a big photograph with a few words on it.
 * Every card, list row and grid cell is one of these, so corners, hover and
 * type stay identical everywhere.
 */
export function PhotoTile({
  slot,
  locale,
  title,
  sub,
  badge,
  href,
  className,
  aspect = "aspect-[4/3]",
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
  titleSize = "md",
}: {
  slot: MediaSlot;
  locale: Locale;
  title?: string;
  sub?: string;
  /** Small pill in the top corner, e.g. a district or a price. */
  badge?: string;
  href?: string;
  className?: string;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  titleSize?: "sm" | "md" | "lg" | "xl";
}) {
  const sizeClass = {
    sm: "text-[1rem]",
    md: "text-[1.25rem] md:text-[1.4rem]",
    lg: "text-[1.5rem] md:text-[1.9rem]",
    xl: "text-[1.8rem] md:text-[2.6rem]",
  }[titleSize];

  const inner = (
    <>
      <Figure
        slot={slot}
        locale={locale}
        priority={priority}
        sizes={sizes}
        className="absolute inset-0"
        imgClassName="transition-transform duration-[900ms] ease-[var(--ease-expo)] group-hover:scale-[1.06]"
      />
      {(title || sub) && (
        <div className="scrim pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 pt-20 md:p-6">
          <div className="min-w-0">
            {title && (
              <p className={cn("font-display leading-tight font-bold text-white", sizeClass)}>
                {title}
              </p>
            )}
            {sub && <p className="mt-1.5 text-[0.86rem] leading-snug text-white/80">{sub}</p>}
          </div>
          {href && (
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-colors duration-300 group-hover:bg-gold group-hover:text-chalk">
              <Icon name="arrow" className="flip-rtl size-4" strokeWidth={2} />
            </span>
          )}
        </div>
      )}
      {badge && (
        <span className="absolute top-4 start-4 rounded-full bg-white/85 px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.12em] text-chalk uppercase backdrop-blur">
          {badge}
        </span>
      )}
    </>
  );

  const classes = cn(
    "group relative block overflow-hidden rounded-card bg-ink-2",
    aspect,
    className,
  );

  return href ? (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  ) : (
    <div className={classes}>{inner}</div>
  );
}
