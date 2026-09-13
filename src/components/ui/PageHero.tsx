import Link from "next/link";
import { cn } from "@/lib/utils";
import { localePath, type Locale } from "@/i18n/config";
import type { MediaSlot } from "@/lib/media";
import { Eyebrow } from "./SectionHeading";
import { SplitText } from "@/components/motion/SplitText";
import { Reveal } from "@/components/motion/Reveal";
import { Figure } from "@/components/graphics/Figure";
import { Icon } from "@/components/graphics/Icon";

export type Crumb = { label: string; href?: string };

/**
 * Shared masthead for every inner page — a true split screen.
 *
 * The copy half and the photo half each take exactly 50% of the viewport, so
 * the page never reads as lopsided: the copy's start inset matches the
 * photo's end bleed. Breadcrumbs pin to the top of the copy half, the title
 * and lead sit on the photo's bottom edge, which uses the height purposefully
 * instead of floating the text in the middle.
 */
export function PageHero({
  locale,
  eyebrow,
  title,
  lead,
  crumbs = [],
  accent = "gold",
  media,
  caption,
  children,
  className,
}: {
  locale: Locale;
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  accent?: "gold" | "aqua";
  media: MediaSlot;
  /** Small label printed over the photo's lower corner. */
  caption?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn("relative overflow-hidden border-b border-line pt-20 md:pt-24", className)}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora" />
      </div>

      <div className="relative grid lg:min-h-[36rem] lg:grid-cols-2">
        {/* Copy half */}
        <div className="flex flex-col justify-between px-5 pt-6 pb-12 md:px-8 lg:ps-[clamp(2rem,6vw,7rem)] lg:pe-16 lg:pt-8 lg:pb-16">
          <Reveal variant="fade" duration={0.5}>
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-[0.78rem] text-fog"
            >
              <Link href={localePath(locale, "/")} className="transition-colors hover:text-chalk">
                {locale === "ar" ? "الرئيسية" : "Home"}
              </Link>
              {crumbs.map((c) => (
                <span key={c.label} className="flex items-center gap-2">
                  <Icon name="chevron" className="flip-rtl size-3 text-line-2" />
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-chalk">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-mist">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>

          <div className="mt-14 lg:mt-20">
            {eyebrow && (
              <Reveal variant="fade" duration={0.5}>
                <Eyebrow accent={accent}>{eyebrow}</Eyebrow>
              </Reveal>
            )}

            <SplitText
              as="h1"
              text={title}
              className="mt-5 max-w-[14ch] font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02] font-bold tracking-tight text-chalk"
            />

            {lead && (
              <Reveal variant="up" delay={0.16}>
                <p className="mt-7 max-w-[52ch] text-[1.05rem] leading-relaxed text-fog">
                  {lead}
                </p>
              </Reveal>
            )}

            {children}
          </div>
        </div>

        {/* Photo half — flush to the end edge */}
        <Reveal variant="scale" duration={0.9} className="relative">
          <div className="relative aspect-[16/11] overflow-hidden lg:absolute lg:inset-0 lg:aspect-auto lg:rounded-s-[2rem]">
            <Figure
              slot={media}
              locale={locale}
              priority
              className="absolute inset-0"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            {caption && (
              <span className="absolute bottom-5 start-5 rounded-full bg-black/60 px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.14em] text-white uppercase">
                {caption}
              </span>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Generic page section wrapper with consistent rhythm. */
export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative py-20 md:py-28", className)}>
      {children}
    </section>
  );
}
