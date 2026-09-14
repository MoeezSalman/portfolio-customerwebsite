import { cn } from "@/lib/utils";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { plans } from "@/content/packages";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/graphics/Figure";
import { Icon } from "@/components/graphics/Icon";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/**
 * Three plans as photo cards: the floor it suits on top, the price and four
 * lines underneath. The featured plan carries a gold ribbon.
 */
export function PricingTable({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <RevealGroup as="ul" className="grid gap-3 md:grid-cols-3 md:gap-4" stagger={0.08}>
      {plans.map((p) => (
        <RevealItem
          key={p.id}
          as="li"
          className={cn(
            "group relative flex flex-col overflow-hidden rounded-card bg-ink-2",
            p.featured && "ring-2 ring-gold",
          )}
        >
          <div className="relative aspect-[16/10]">
            <Figure
              slot={p.media}
              locale={locale}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="absolute inset-0"
              imgClassName="transition-transform duration-[900ms] ease-[var(--ease-expo)] group-hover:scale-[1.06]"
            />
            {p.featured && (
              <span className="absolute top-4 start-4 rounded-full bg-gold px-3 py-1.5 text-[0.68rem] font-bold tracking-[0.14em] text-chalk uppercase">
                {t("mostPopular")}
              </span>
            )}
          </div>

          <div className="flex flex-1 flex-col p-6 md:p-7">
            <h3 className="font-display text-[1.5rem] leading-tight font-bold text-chalk">{p.name[locale]}</h3>
            <p className="mt-1.5 text-[0.95rem] text-fog">{p.tagline[locale]}</p>

            <p className="mt-5 font-display text-[1.9rem] leading-none font-bold text-chalk">
              {p.price[locale]}
            </p>
            <p className="mt-1.5 text-[0.82rem] text-fog">{p.per[locale]}</p>

            <ul className="mt-6 flex flex-col gap-2.5">
              {p.includes[locale].map((line) => (
                <li key={line} className="flex items-start gap-2.5 text-[0.92rem] text-mist">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-aqua/15 text-aqua">
                    <Icon name="check" className="size-3" strokeWidth={2.8} />
                  </span>
                  {line}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-[0.78rem] text-fog">
              <span className="font-semibold text-mist">{t("bestFor")}:</span> {p.bestFor[locale]}
            </p>

            <Button
              href={localePath(locale, `/quote?plan=${p.id}`)}
              variant={p.featured ? "primary" : "outline"}
              className="mt-6 w-full"
              arrow
            >
              {t("choosePlan")}
            </Button>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
