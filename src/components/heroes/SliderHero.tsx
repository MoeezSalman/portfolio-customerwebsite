import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { MediaSlot } from "@/lib/media";
import { Crumbs, type Crumb } from "@/components/ui/Section";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Figure } from "@/components/graphics/Figure";
import { SplitText } from "@/components/motion/SplitText";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Slider hero — the before/after comparison IS the masthead. The title
 * floats on a frosted card over the top corner. Used on project pages.
 */
export function SliderHero({
  locale,
  before,
  after,
  title,
  sub,
  crumbs = [],
  facts,
}: {
  locale: Locale;
  before: MediaSlot;
  after: MediaSlot;
  title: string;
  sub?: string;
  crumbs?: Crumb[];
  facts?: { value: string; label: string }[];
}) {
  const t = getDictionary(locale);

  return (
    <section className="relative pt-24 md:pt-28">
      <div className="container-x">
        <Reveal variant="fade" duration={0.5}>
          <Crumbs locale={locale} crumbs={crumbs} className="mb-4" />
        </Reveal>

        <div className="relative">
          <Reveal variant="scale" duration={0.9}>
            <BeforeAfter
              className="aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[21/10]"
              beforeLabel={t("before")}
              afterLabel={t("after")}
              initial={42}
              before={<Figure slot={before} locale={locale} priority className="absolute inset-0" sizes="100vw" />}
              after={<Figure slot={after} locale={locale} priority className="absolute inset-0" sizes="100vw" />}
            />
          </Reveal>

          {/* Title card overlapping the bottom edge */}
          <div className="relative z-10 -mt-10 px-3 sm:-mt-14 sm:px-6 lg:-mt-20 lg:px-10">
            <Reveal variant="up" delay={0.2}>
              <div className="glass flex flex-col gap-5 rounded-card p-6 md:flex-row md:items-end md:justify-between md:p-8">
                <div>
                  <SplitText
                    as="h1"
                    text={title}
                    className="font-display text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.02] font-bold tracking-tight text-chalk"
                  />
                  {sub && <p className="mt-2 text-[1rem] text-fog">{sub}</p>}
                </div>
                {facts && (
                  <dl className="grid shrink-0 grid-cols-3 gap-6">
                    {facts.map((f) => (
                      <div key={f.label}>
                        <dd className="font-display text-[1.4rem] leading-none font-bold whitespace-nowrap text-chalk">
                          {f.value}
                        </dd>
                        <dt className="mt-1.5 text-[0.72rem] text-fog">{f.label}</dt>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
