import Link from "next/link";
import { defaultLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";
import { Figure } from "@/components/graphics/Figure";

/**
 * Rendered for unknown locales and unknown slugs alike. It cannot read the
 * route params, so it falls back to the default locale.
 */
export default function NotFound() {
  const l = defaultLocale;
  const t = getDictionary(l);

  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden pt-28 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora" />
        <div className="grid-lines mask-fade-y absolute inset-0 opacity-40" />
      </div>

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="font-display text-[clamp(5rem,16vw,11rem)] leading-none font-bold text-line-2">
            404
          </p>
          <h1 className="mt-4 font-display text-[clamp(1.6rem,4vw,2.6rem)] font-bold text-chalk">
            {t("notFoundTitle")}
          </h1>
          <p className="mt-5 max-w-md leading-relaxed text-fog">{t("notFoundBody")}</p>

          <div className="mt-10 flex flex-wrap gap-3.5">
            <Button href={localePath(l, "/")} size="lg" arrow>
              {t("goHome")}
            </Button>
            <Button href={localePath(l, "/contact")} variant="outline" size="lg">
              {t("footerContact")}
            </Button>
          </div>

          <ul className="mt-14 flex max-w-xl flex-wrap gap-2.5">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={localePath(l, `/services/${s.slug}`)}
                  className="inline-flex rounded-full border border-line-2 px-4 py-2 text-[0.82rem] text-fog transition-colors hover:border-chalk hover:bg-chalk hover:text-ink"
                >
                  {s.title[l]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Figure
          slot={services[0].media}
          locale={l}
          className="aspect-[4/5] rounded-[2rem] lg:col-span-5"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>
    </section>
  );
}
