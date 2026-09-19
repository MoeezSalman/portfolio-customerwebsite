"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { services } from "@/content/services";
import { areas } from "@/content/areas";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/graphics/Icon";

type Fields = {
  name: string;
  phone: string;
  email: string;
  service: string;
  district: string;
  message: string;
};

const EMPTY: Fields = {
  name: "",
  phone: "",
  email: "",
  service: "",
  district: "",
  message: "",
};

/**
 * Quote request form.
 *
 * There is no server yet, so rather than fake a submission this composes the
 * enquiry into a WhatsApp message and hands off — which is how this business
 * actually takes work. To post to a real endpoint instead, replace the body of
 * `handoff()` with a fetch and keep the validation above it untouched.
 */
export function QuoteForm({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const searchParams = useSearchParams();

  const [values, setValues] = useState<Fields>({
    ...EMPTY,
    service: searchParams.get("service") ?? "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Fields) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!values.name.trim()) next.name = t("required");

    // Saudi mobile: 05XXXXXXXX, +9665XXXXXXXX or 9665XXXXXXXX.
    const digits = values.phone.replace(/[\s-]/g, "");
    if (!digits) next.phone = t("required");
    else if (!/^(?:\+?966|0)5\d{8}$/.test(digits)) next.phone = t("invalidPhone");

    if (!values.message.trim()) next.message = t("required");

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handoff = () => {
    const service = services.find((s) => s.slug === values.service);
    const district = areas.find((a) => a.id === values.district);

    const lines = [
      locale === "ar"
        ? `السلام عليكم ${site.name.ar}، أرغب في عرض سعر.`
        : `Hello ${site.name.en}, I'd like a quote.`,
      "",
      `${t("fieldName")}: ${values.name}`,
      `${t("fieldPhone")}: ${values.phone}`,
      values.email && `${t("fieldEmail")}: ${values.email}`,
      service && `${t("fieldService")}: ${service.title[locale]}`,
      district && `${t("fieldDistrict")}: ${district.name[locale]}`,
      "",
      values.message,
    ].filter(Boolean);

    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    handoff();
    setSent(true);
  };

  return (
    <div className="relative overflow-hidden rounded-card bg-white/80 p-6 backdrop-blur md:p-9">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center py-12 text-center"
          >
            <span className="grid size-16 place-items-center rounded-full bg-aqua/15 text-aqua">
              <Icon name="check" className="size-8" strokeWidth={2.4} />
            </span>
            <h3 className="mt-6 font-display text-[1.4rem] font-bold text-chalk">
              {t("sentTitle")}
            </h3>
            <p className="mt-3 max-w-sm leading-relaxed text-fog">{t("sentBody")}</p>
            <Button
              variant="outline"
              className="mt-8"
              onClick={() => {
                setValues(EMPTY);
                setSent(false);
              }}
            >
              {t("sendAnother")}
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            <Field
              label={t("fieldName")}
              value={values.name}
              onChange={set("name")}
              error={errors.name}
              autoComplete="name"
            />
            <Field
              label={t("fieldPhone")}
              value={values.phone}
              onChange={set("phone")}
              error={errors.phone}
              type="tel"
              dir="ltr"
              autoComplete="tel"
              placeholder="05XXXXXXXX"
            />
            <Field
              label={t("fieldEmail")}
              value={values.email}
              onChange={set("email")}
              type="email"
              dir="ltr"
              autoComplete="email"
              className="sm:col-span-2"
            />

            <Select
              label={t("fieldService")}
              value={values.service}
              onChange={set("service")}
              placeholder={t("selectPlaceholder")}
              options={services.map((s) => ({
                value: s.slug,
                label: s.title[locale],
              }))}
            />
            <Select
              label={t("fieldDistrict")}
              value={values.district}
              onChange={set("district")}
              placeholder={t("selectPlaceholder")}
              options={areas.map((a) => ({
                value: a.id,
                label: a.name[locale],
              }))}
            />

            <Field
              label={t("fieldMessage")}
              value={values.message}
              onChange={set("message")}
              error={errors.message}
              placeholder={t("fieldMessagePlaceholder")}
              textarea
              className="sm:col-span-2"
            />

            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
              <Button type="submit" size="lg" icon="whatsapp">
                {t("submit")}
              </Button>
              <p className="text-[0.82rem] text-fog">{t("orWhatsapp")}</p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ----------------------------- inputs ----------------------------- */

const inputBase =
  "w-full rounded-[1rem] border bg-white px-4 py-3.5 text-[0.95rem] text-chalk placeholder:text-fog/60 transition-colors duration-200 outline-none focus:border-chalk";

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  textarea = false,
  className,
  dir,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
  className?: string;
  dir?: "ltr" | "rtl";
  autoComplete?: string;
}) {
  const id = `f-${label.replace(/\s+/g, "-")}`;

  // Shared across both tags; kept separate so each stays properly typed.
  const common = {
    id,
    dir,
    value,
    placeholder,
    autoComplete,
    "aria-invalid": !!error,
    "aria-describedby": error ? `${id}-err` : undefined,
    className: cn(inputBase, error ? "border-red-400/70" : "border-line-2"),
  };

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-[0.8rem] font-medium text-mist">
        {label}
      </label>
      {textarea ? (
        <textarea
          {...common}
          rows={5}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input {...common} type={type} onChange={(e) => onChange(e.target.value)} />
      )}
      {error && (
        <span id={`${id}-err`} className="text-[0.78rem] text-red-400">
          {error}
        </span>
      )}
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
}) {
  const id = `s-${label.replace(/\s+/g, "-")}`;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[0.8rem] font-medium text-mist">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(inputBase, "border-line-2 appearance-none")}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-ink">
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
