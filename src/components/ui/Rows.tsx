import Link from "next/link";
import { cn, formatDate, localizeNumber } from "@/lib/utils";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { Service } from "@/content/services";
import type { Project } from "@/content/projects";
import type { Post } from "@/content/posts";
import { Icon, type IconName } from "@/components/graphics/Icon";
import { Figure } from "@/components/graphics/Figure";
import { Reveal } from "@/components/motion/Reveal";

/* ------------------------------------------------------------------
   Editorial layout primitives.

   The site deliberately avoids card grids. These are the alternatives:
   ruled rows, inline stat strips, alternating photo/text bands, and
   columns divided by hairlines rather than boxes.
------------------------------------------------------------------- */

/** One numbered service line. Hover reveals the arrow; no box, just a rule. */
export function ServiceRow({
  service,
  index,
  locale,
  className,
}: {
  service: Service;
  index: number;
  locale: Locale;
  className?: string;
}) {
  const t = getDictionary(locale);
  return (
    <Link
      href={localePath(locale, `/services/${service.slug}`)}
      className={cn(
        "group grid grid-cols-[3rem_1fr_auto] items-center gap-5 border-t border-line py-6 transition-colors duration-300 hover:bg-black/[0.025] md:grid-cols-[4rem_minmax(0,1.1fr)_minmax(0,1.4fr)_auto] md:gap-8 md:py-7",
        className,
      )}
    >
      <span className="font-display text-[0.85rem] font-semibold text-fog tabular-nums">
        {localizeNumber(String(index + 1).padStart(2, "0"), locale)}
      </span>

      <span className="flex items-center gap-3.5">
        <span
          className={cn(
            "hidden size-9 shrink-0 place-items-center rounded-full border sm:grid",
            service.accent === "gold"
              ? "border-gold/40 text-gold"
              : "border-aqua/40 text-aqua",
          )}
        >
          <Icon name={service.icon as IconName} className="size-4" />
        </span>
        <span className="font-display text-[1.15rem] leading-snug font-bold text-chalk transition-colors group-hover:text-gold md:text-[1.35rem]">
          {service.title[locale]}
        </span>
      </span>

      <span className="col-span-3 -mt-2 text-[0.92rem] leading-relaxed text-fog md:col-span-1 md:mt-0 md:pe-6">
        {service.short[locale]}
      </span>

      <span className="col-start-3 row-start-1 flex items-center gap-4 md:col-start-4">
        <span className="hidden text-[0.78rem] whitespace-nowrap text-mist lg:inline">
          {service.startingFrom[locale]}
        </span>
        <span className="grid size-10 place-items-center rounded-full border border-line-2 text-fog transition-all duration-300 group-hover:border-chalk group-hover:bg-chalk group-hover:text-ink">
          <Icon name="arrow" className="flip-rtl size-4" />
        </span>
      </span>
      <span className="sr-only">{t("viewService")}</span>
    </Link>
  );
}

/** Photo on one side, story on the other. Alternate `flip` down a list. */
export function ProjectRow({
  project,
  locale,
  flip = false,
  priority = false,
  className,
}: {
  project: Project;
  locale: Locale;
  flip?: boolean;
  priority?: boolean;
  className?: string;
}) {
  const t = getDictionary(locale);
  return (
    <article
      className={cn(
        "grid items-center gap-8 border-t border-line py-12 md:grid-cols-12 md:gap-12 md:py-16",
        className,
      )}
    >
      <Reveal
        variant="scale"
        className={cn("md:col-span-7", flip && "md:order-2")}
      >
        <Link
          href={localePath(locale, `/projects/${project.slug}`)}
          className="group block"
        >
          <Figure
            slot={project.media}
            locale={locale}
            priority={priority}
            className="aspect-[16/10] rounded-2xl [&_img]:transition-transform [&_img]:duration-[1.4s] [&_img]:ease-[var(--ease-expo)] group-hover:[&_img]:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
        </Link>
      </Reveal>

      <Reveal variant="up" delay={0.08} className="md:col-span-5">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.72rem] font-semibold tracking-[0.18em] text-fog uppercase">
          <span className="text-gold">{project.sector[locale]}</span>
          <span aria-hidden>·</span>
          <span>{project.district[locale]}</span>
          <span aria-hidden>·</span>
          <span>{project.year}</span>
        </p>

        <h3 className="mt-4 font-display text-[clamp(1.4rem,2.4vw,1.9rem)] leading-tight font-bold text-chalk">
          <Link
            href={localePath(locale, `/projects/${project.slug}`)}
            className="transition-colors hover:text-gold"
          >
            {project.title[locale]}
          </Link>
        </h3>

        <p className="mt-4 leading-relaxed text-fog">{project.summary[locale]}</p>

        <StatStrip
          className="mt-7"
          items={project.metrics.map((m) => ({
            value: m.value[locale],
            label: m.label[locale],
          }))}
          accent={project.accent}
        />

        <Link
          href={localePath(locale, `/projects/${project.slug}`)}
          className="group mt-7 inline-flex items-center gap-2.5 font-display text-[0.9rem] font-semibold text-chalk"
        >
          {t("viewProject")}
          <span className="grid size-8 place-items-center rounded-full border border-line-2 transition-all duration-300 group-hover:border-chalk group-hover:bg-chalk group-hover:text-ink">
            <Icon name="arrow" className="flip-rtl size-3.5" />
          </span>
        </Link>
      </Reveal>
    </article>
  );
}

/** Compact journal entry: small thumbnail, category, title, excerpt. */
export function PostRow({
  post,
  locale,
  className,
}: {
  post: Post;
  locale: Locale;
  className?: string;
}) {
  const t = getDictionary(locale);
  return (
    <Link
      href={localePath(locale, `/blog/${post.slug}`)}
      className={cn(
        "group grid gap-5 border-t border-line py-7 transition-colors duration-300 hover:bg-black/[0.025] sm:grid-cols-[11rem_1fr] sm:gap-8 md:py-8",
        className,
      )}
    >
      <Figure
        slot={post.media}
        locale={locale}
        className="aspect-[16/10] rounded-xl sm:aspect-[4/3] [&_img]:transition-transform [&_img]:duration-[1.2s] group-hover:[&_img]:scale-105"
        sizes="(max-width: 640px) 100vw, 176px"
      />
      <span className="flex flex-col">
        <span className="flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.16em] text-fog uppercase">
          <span className="text-gold">{post.category[locale]}</span>
          <span aria-hidden>·</span>
          <span>{formatDate(post.date, locale)}</span>
          <span aria-hidden>·</span>
          <span>
            {post.readingMinutes} {t("minRead")}
          </span>
        </span>
        <span className="mt-3 font-display text-[1.15rem] leading-snug font-bold text-chalk transition-colors group-hover:text-gold md:text-[1.3rem]">
          {post.title[locale]}
        </span>
        <span className="mt-2.5 line-clamp-2 text-[0.92rem] leading-relaxed text-fog">
          {post.excerpt[locale]}
        </span>
      </span>
    </Link>
  );
}

/** Large lead entry for the top of the journal — photo with the text beside it. */
export function PostLead({ post, locale }: { post: Post; locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <Link
      href={localePath(locale, `/blog/${post.slug}`)}
      className="group grid items-center gap-8 md:grid-cols-12 md:gap-12"
    >
      <Figure
        slot={post.media}
        locale={locale}
        priority
        className="aspect-[16/10] rounded-2xl md:col-span-7 [&_img]:transition-transform [&_img]:duration-[1.4s] group-hover:[&_img]:scale-[1.04]"
        sizes="(max-width: 768px) 100vw, 58vw"
      />
      <span className="md:col-span-5">
        <span className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.18em] text-fog uppercase">
          <span className="text-gold">{post.category[locale]}</span>
          <span aria-hidden>·</span>
          <span>
            {post.readingMinutes} {t("minRead")}
          </span>
        </span>
        <span className="mt-4 block font-display text-[clamp(1.5rem,2.8vw,2.2rem)] leading-tight font-bold text-chalk transition-colors group-hover:text-gold">
          {post.title[locale]}
        </span>
        <span className="mt-4 block leading-relaxed text-fog">{post.excerpt[locale]}</span>
        <span className="mt-6 block text-[0.8rem] text-fog">{formatDate(post.date, locale)}</span>
      </span>
    </Link>
  );
}

/** Inline figures separated by hairlines — replaces metric cards. */
export function StatStrip({
  items,
  accent = "gold",
  size = "md",
  className,
}: {
  items: { value: string; label: string }[];
  accent?: "gold" | "aqua";
  size?: "md" | "lg";
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "flex flex-wrap divide-x divide-line rtl:divide-x-reverse",
        className,
      )}
    >
      {items.map((s) => (
        <div key={s.label} className="flex flex-col pe-6 ps-6 first:ps-0 last:pe-0">
          <dd
            className={cn(
              "font-display font-bold",
              size === "lg" ? "text-[2.2rem] leading-none" : "text-[1.15rem] leading-tight",
              accent === "gold" ? "text-gold" : "text-aqua",
            )}
          >
            {s.value}
          </dd>
          <dt
            className={cn(
              "mt-1.5 text-fog",
              size === "lg" ? "text-[0.85rem]" : "text-[0.72rem] leading-tight",
            )}
          >
            {s.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}

/** Icon + title + body columns, separated by a rule above — not boxes. */
export function FeatureColumns({
  items,
  columns = 4,
  className,
}: {
  items: { icon?: IconName; index?: string; title: string; body: string }[];
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-x-10 gap-y-10",
        columns === 4 && "sm:grid-cols-2 lg:grid-cols-4",
        columns === 3 && "md:grid-cols-3",
        columns === 2 && "sm:grid-cols-2",
        className,
      )}
    >
      {items.map((f, i) => (
        <Reveal key={f.title} variant="up" delay={i * 0.06} as="div">
          <div className="border-t border-chalk/80 pt-6">
            {f.icon && (
              <span className="grid size-10 place-items-center rounded-full border border-gold/40 text-gold">
                <Icon name={f.icon} className="size-5" />
              </span>
            )}
            {f.index && (
              <span className="font-display text-[2.2rem] leading-none font-bold text-line-2">
                {f.index}
              </span>
            )}
            <h3 className="mt-5 font-display text-[1.05rem] leading-snug font-bold text-chalk">
              {f.title}
            </h3>
            <p className="mt-3 text-[0.92rem] leading-relaxed text-fog">{f.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Plain text link row with an arrow, used for "more" lists under features. */
export function LinkRow({
  href,
  title,
  meta,
  className,
}: {
  href: string;
  title: string;
  meta?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center justify-between gap-6 border-t border-line py-5 transition-colors hover:bg-black/[0.025]",
        className,
      )}
    >
      <span className="flex min-w-0 flex-col gap-1">
        <span className="truncate font-display text-[1.05rem] font-semibold text-chalk transition-colors group-hover:text-gold">
          {title}
        </span>
        {meta && <span className="text-[0.8rem] text-fog">{meta}</span>}
      </span>
      <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line-2 text-fog transition-all duration-300 group-hover:border-chalk group-hover:bg-chalk group-hover:text-ink">
        <Icon name="arrow" className="flip-rtl size-3.5" />
      </span>
    </Link>
  );
}
