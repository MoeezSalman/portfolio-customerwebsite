import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { equipment, equipmentCategories } from "@/content/equipment";
import { getService } from "@/content/services";
import { PageHero, Section } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Machine } from "@/components/graphics/Machine";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/equipment">): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return {
    title: ar ? "معداتنا" : "Equipment",
    description: ar
      ? "المعدات التي نستخدمها فعليًا: جلاخات كوكبية، كاميرات فحص مصارف، كاميرات حرارية، أجهزة ضغط عالٍ، وأكثر — مع المواصفات الكاملة."
      : "The machinery we actually run: planetary grinders, CCTV drain cameras, thermal imagers, hydro jetters and more — with full specifications.",
    alternates: { canonical: `/${locale}/equipment` },
  };
}

export default async function EquipmentPage({
  params,
}: PageProps<"/[locale]/equipment">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);
  const heroMedia = getService("iron-works")!.media;

  return (
    <>
      <PageHero
        locale={l}
        accent="aqua"
        eyebrow={t("sectionEquipment")}
        title={t("sectionEquipmentTitle")}
        crumbs={[{ label: l === "ar" ? "معداتنا" : "Equipment" }]}
        media={heroMedia}
        caption={`${equipment.length} ${l === "ar" ? "معدة" : "machines"}`}
        lead={
          l === "ar"
            ? "كثير من الشركات تعِد بنتائج لا تستطيع معداتها تحقيقها. هذه قائمتنا الكاملة بالمواصفات — اسأل أي مقاول آخر عن نفس القائمة قبل أن توقّع."
            : "Plenty of companies promise results their equipment cannot physically deliver. Here is our full list with specifications — ask any other contractor for the same before you sign."
        }
      >
        <Reveal variant="fade" delay={0.28}>
          <nav className="mt-10 flex flex-wrap gap-2.5">
            {equipmentCategories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="rounded-full border border-line-2 px-4 py-2 text-[0.82rem] text-mist transition-colors hover:border-chalk hover:bg-chalk hover:text-ink"
              >
                {c.label[l]}
              </a>
            ))}
          </nav>
        </Reveal>
      </PageHero>

      {equipmentCategories.map((cat, ci) => {
        const items = equipment.filter((e) => e.category === cat.id);
        if (items.length === 0) return null;

        return (
          <Section
            key={cat.id}
            id={cat.id}
            className={`scroll-mt-24 border-t border-line ${ci % 2 === 1 ? "bg-ink-2/50" : ""}`}
          >
            <div className="container-x grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <SectionHeading
                    eyebrow={`${String(ci + 1).padStart(2, "0")} / ${String(
                      equipmentCategories.length,
                    ).padStart(2, "0")}`}
                    title={cat.label[l]}
                    accent={ci % 2 === 0 ? "gold" : "aqua"}
                  />
                  <p className="mt-4 text-[0.85rem] text-fog">
                    {items.length} {l === "ar" ? "معدات" : "machines"}
                  </p>
                </div>
              </div>

              {/* Manifest rows: line-art | name + role | detail | specs */}
              <div className="lg:col-span-8">
                {items.map((item, i) => (
                  <Reveal
                    key={item.id}
                    variant="up"
                    delay={i * 0.04}
                    as="article"
                    className="grid gap-5 border-t border-line py-8 md:grid-cols-[7rem_1fr] md:gap-8"
                  >
                    <div className="size-28 text-mist">
                      <Machine
                        glyph={item.glyph}
                        accent={i % 2 === 0 ? "gold" : "aqua"}
                      />
                    </div>
                    <div className="grid gap-5 md:grid-cols-[1fr_11rem] md:gap-8">
                      <div>
                        <h3 className="font-display text-[1.15rem] font-bold text-chalk">
                          {item.name[l]}
                        </h3>
                        <p className="mt-1 text-[0.88rem] font-medium text-gold">
                          {item.role[l]}
                        </p>
                        <p className="mt-3 text-[0.92rem] leading-relaxed text-fog">
                          {item.detail[l]}
                        </p>
                      </div>
                      <dl className="flex flex-col gap-2.5 border-s border-line ps-5 md:ps-6">
                        {item.specs.map((s) => (
                          <div key={s.label.en}>
                            <dt className="text-[0.64rem] tracking-wide text-fog uppercase">
                              {s.label[l]}
                            </dt>
                            <dd
                              dir={l === "ar" ? "rtl" : "ltr"}
                              className="mt-0.5 font-display text-[0.85rem] font-semibold text-mist"
                            >
                              {s.value[l]}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </Reveal>
                ))}
                <div className="border-t border-line" />
              </div>
            </div>
          </Section>
        );
      })}

      <CtaSection locale={l} media={getService("floor-polishing")!.media} />
    </>
  );
}
