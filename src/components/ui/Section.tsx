import Link from "next/link";
import { cn } from "@/lib/utils";
import { localePath, type Locale } from "@/i18n/config";
import { Icon } from "@/components/graphics/Icon";

/** One rhythm for every section. Sections never carry borders. */
export function Section({
  children,
  className,
  id,
  tight = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** No vertical padding — for full-bleed photo bands. */
  tight?: boolean;
}) {
  return (
    <section id={id} className={cn("relative", !tight && "section-y", className)}>
      {children}
    </section>
  );
}

export type Crumb = { label: string; href?: string };

/** Breadcrumb trail used by every inner-page hero. */
export function Crumbs({
  locale,
  crumbs,
  light = false,
  className,
}: {
  locale: Locale;
  crumbs: Crumb[];
  light?: boolean;
  className?: string;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex flex-wrap items-center gap-2 text-[0.78rem]",
        light ? "text-white/70" : "text-fog",
        className,
      )}
    >
      <Link
        href={localePath(locale, "/")}
        className={cn("transition-colors", light ? "hover:text-white" : "hover:text-chalk")}
      >
        {locale === "ar" ? "الرئيسية" : "Home"}
      </Link>
      {crumbs.map((c) => (
        <span key={c.label} className="flex items-center gap-2">
          <Icon name="chevron" className={cn("flip-rtl size-3", light ? "text-white/40" : "text-line-2")} />
          {c.href ? (
            <Link
              href={c.href}
              className={cn("transition-colors", light ? "hover:text-white" : "hover:text-chalk")}
            >
              {c.label}
            </Link>
          ) : (
            <span className={light ? "text-white" : "text-mist"}>{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
