import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { testimonials } from "@/content/testimonials";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Figure } from "@/components/graphics/Figure";
import { Icon } from "@/components/graphics/Icon";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/** Three clients, three floors. The photo is the floor they are talking about. */
export function TestimonialsSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <Section>
      <div className="container-x">
        <SectionHeading
          eyebrow={t("sectionTestimonials")}
          title={t("sectionTestimonialsTitle")}
          accent="aqua"
          className="mb-8 md:mb-10"
        />

        <RevealGroup as="ul" className="grid gap-3 md:grid-cols-3 md:gap-4" stagger={0.08}>
          {testimonials.map((tm) => (
            <RevealItem key={tm.id} as="li" className="group overflow-hidden rounded-card bg-ink-2">
              <div className="relative aspect-[4/3]">
                <Figure
                  slot={tm.media}
                  locale={locale}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="absolute inset-0"
                  imgClassName="transition-transform duration-[900ms] ease-[var(--ease-expo)] group-hover:scale-[1.06]"
                />
                <span
                  className="absolute top-4 start-4 flex items-center gap-1 rounded-full bg-white/85 px-3 py-1.5 backdrop-blur"
                  aria-label={`${tm.rating}/5`}
                >
                  {Array.from({ length: tm.rating }).map((_, k) => (
                    <Icon key={k} name="star" className="size-3 text-gold" filled />
                  ))}
                </span>
              </div>
              <figure className="p-5 md:p-6">
                <blockquote className="font-display text-[1.1rem] leading-snug font-semibold text-chalk md:text-[1.2rem]">
                  “{tm.quote[locale]}”
                </blockquote>
                <figcaption className="mt-4 text-[0.85rem] text-fog">
                  <span className="font-semibold text-mist">{tm.name[locale]}</span> · {tm.role[locale]}
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
