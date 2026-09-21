"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn, localizeNumber } from "@/lib/utils";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import {
  FEEDBACK_LIMITS,
  maskPhone,
  normalisePhone,
  pickText,
  seedFeedback,
  type Feedback,
} from "@/lib/feedback";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/graphics/Icon";

const LOCAL_KEY = "jalibalat:feedback:v1";
// The static export has no API route; skip the round trip and go straight to
// browser storage. Inlined at build time by scripts/build-static.mjs.
const STATIC = process.env.NEXT_PUBLIC_STATIC_EXPORT === "1";
const ease = [0.16, 1, 0.3, 1] as const;

/**
 * The feedback wall: a form on one side, a two-row wall of review cards
 * gliding past on the other. Posts go to /api/feedback; when no shared store
 * is configured the visitor's own posts are kept in their browser, so they
 * survive a refresh either way. The seeds are always on the wall.
 */
export function FeedbackSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const [items, setItems] = useState<Feedback[]>([]);
  const [storage, setStorage] = useState<"redis" | "local">("local");
  const [justPosted, setJustPosted] = useState<Feedback | null>(null);

  // Load: shared store first, else whatever this browser saved earlier.
  useEffect(() => {
    let alive = true;
    (async () => {
      let shared: Feedback[] = [];
      let mode: "redis" | "local" = "local";
      try {
        if (STATIC) throw new Error("static");
        const res = await fetch("/api/feedback", { cache: "no-store" });
        const json = (await res.json()) as { storage: "redis" | "local"; items: Feedback[] };
        shared = json.items ?? [];
        mode = json.storage;
      } catch {
        /* offline or first build — fall through to local */
      }
      if (!alive) return;
      setStorage(mode);
      setItems(mode === "redis" ? shared : readLocal());
    })();
    return () => {
      alive = false;
    };
  }, []);

  const all = useMemo(() => [...items, ...seedFeedback], [items]);
  const average = useMemo(
    () => (all.reduce((s, f) => s + f.rating, 0) / Math.max(1, all.length)).toFixed(1),
    [all],
  );

  // Two rows, newest first, split alternately so both rows feel alive.
  const rows = useMemo(() => {
    const a: Feedback[] = [];
    const b: Feedback[] = [];
    all.forEach((f, i) => (i % 2 === 0 ? a : b).push(f));
    return [a, b];
  }, [all]);

  const onPosted = (item: Feedback, mode: "redis" | "local") => {
    setItems((prev) => [item, ...prev]);
    setJustPosted(item);
    if (mode === "local") writeLocal([item, ...readLocal()]);
  };

  return (
    <Section id="feedback">
      <div className="container-x">
        <div className="mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={t("feedbackEyebrow")} title={t("feedbackTitle")} lead={t("feedbackLead")} accent="aqua" />
          <Reveal variant="fade" delay={0.2}>
            <div className="flex items-center gap-3 rounded-card bg-white/80 px-5 py-3.5">
              <span className="font-display text-[2rem] leading-none font-bold text-chalk">
                {localizeNumber(average, locale)}
              </span>
              <span className="flex flex-col leading-tight">
                <Stars value={5} className="size-3.5" />
                <span className="mt-1 text-[0.72rem] text-fog">
                  {localizeNumber(all.length, locale)} {t("feedbackReviews")}
                </span>
              </span>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          {/* The form */}
          <Reveal variant="up" className="lg:col-span-5">
            <FeedbackForm locale={locale} storage={storage} onPosted={onPosted} />
          </Reveal>

          {/* The wall */}
          <div className="min-w-0 lg:col-span-7">
            <AnimatePresence>
              {justPosted && (
                <motion.div
                  key={justPosted.id}
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.7, ease }}
                  className="mb-3 md:mb-4"
                >
                  <FeedbackCard item={justPosted} locale={locale} featured />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col gap-3 md:gap-4">
              {rows.map((row, i) => (
                <Marquee key={i} speed={i === 0 ? 70 : 85} reverse={i === 1}>
                  {row.map((f) => (
                    <div key={f.id} className="me-3 w-[18rem] shrink-0 md:me-4 md:w-[20rem]">
                      <FeedbackCard item={f} locale={locale} />
                    </div>
                  ))}
                </Marquee>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function FeedbackCard({
  item,
  locale,
  featured = false,
}: {
  item: Feedback;
  locale: Locale;
  featured?: boolean;
}) {
  const t = getDictionary(locale);
  const date = new Date(item.createdAt);
  const fresh = Date.now() - date.getTime() < 60_000;

  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-card bg-white/85 p-5 backdrop-blur",
        featured && "ring-2 ring-gold bg-white",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <Stars value={item.rating} />
        {featured ? (
          <span className="rounded-full bg-gold px-2.5 py-1 text-[0.62rem] font-bold tracking-[0.14em] text-chalk uppercase">
            {t("feedbackYours")}
          </span>
        ) : (
          item.source === "user" &&
          fresh && (
            <span className="rounded-full bg-aqua/15 px-2.5 py-1 text-[0.62rem] font-bold tracking-[0.14em] text-aqua uppercase">
              {t("feedbackNew")}
            </span>
          )
        )}
      </div>
      <blockquote className="mt-3 flex-1 font-display text-[1rem] leading-snug font-semibold text-chalk">
        “{pickText(item.message, locale)}”
      </blockquote>
      <figcaption className="mt-4 flex items-center justify-between gap-3 text-[0.78rem] text-fog">
        <span dir={item.source === "user" ? "ltr" : undefined} className="font-semibold text-mist">
          {pickText(item.author, locale)}
        </span>
        <span>
          {fresh
            ? t("feedbackJustNow")
            : new Intl.DateTimeFormat(locale === "ar" ? "ar-SA" : "en-GB", {
                month: "short",
                year: "numeric",
              }).format(date)}
        </span>
      </figcaption>
    </figure>
  );
}

function Stars({ value, className = "size-4" }: { value: number; className?: string }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${value}/5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Icon
          key={n}
          name="star"
          className={cn(className, n <= value ? "text-gold" : "text-line-2")}
          filled={n <= value}
        />
      ))}
    </span>
  );
}

function FeedbackForm({
  locale,
  storage,
  onPosted,
}: {
  locale: Locale;
  storage: "redis" | "local";
  onPosted: (item: Feedback, mode: "redis" | "local") => void;
}) {
  const t = getDictionary(locale);
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const clean = message.trim();
    if (clean.length < FEEDBACK_LIMITS.minMessage) return setError(t("feedbackTooShort"));
    const intl = normalisePhone(phone);
    if (!intl) return setError(t("invalidPhone"));

    setState("sending");
    let item: Feedback | null = null;
    let mode: "redis" | "local" = storage;
    try {
      if (STATIC) throw new Error("static");
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: clean, phone: intl, rating }),
      });
      const json = (await res.json()) as { ok: boolean; field?: string; storage?: "redis" | "local"; item?: Feedback };
      if (res.status === 429) {
        setState("idle");
        return setError(t("feedbackTooMany"));
      }
      if (json.ok && json.item) {
        item = json.item;
        mode = json.storage ?? storage;
      }
    } catch {
      /* offline: keep it locally below */
    }
    if (!item) {
      item = {
        id: `l-${Date.now().toString(36)}`,
        message: clean,
        author: maskPhone(intl),
        rating,
        createdAt: new Date().toISOString(),
        source: "user",
      };
      mode = "local";
    }
    onPosted(item, mode);
    setState("done");
    setMessage("");
    setPhone("");
    window.setTimeout(() => setState("idle"), 4000);
  };

  const shown = hover || rating;

  return (
    <form
      onSubmit={submit}
      className="relative flex h-full flex-col gap-5 overflow-hidden rounded-card bg-chalk p-6 text-white md:p-8"
    >
      {/* Soft gold glow in the corner */}
      <div className="pointer-events-none absolute -end-16 -top-16 size-56 rounded-full bg-gold/25 blur-3xl" />

      <div className="relative">
        <h3 className="font-display text-[1.5rem] leading-tight font-bold">{t("feedbackFormTitle")}</h3>
        <p className="mt-1.5 text-[0.9rem] text-white/65">{t("feedbackFormLead")}</p>
      </div>

      {/* Stars */}
      <div className="relative">
        <span className="block text-[0.68rem] font-semibold tracking-[0.16em] text-white/60 uppercase">
          {t("feedbackRating")}
        </span>
        <div className="mt-2 flex items-center gap-1.5" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <motion.button
              key={n}
              type="button"
              aria-label={`${n} ${t("ratingLabel")}`}
              aria-pressed={rating === n}
              onMouseEnter={() => setHover(n)}
              onClick={() => setRating(n)}
              whileHover={{ scale: 1.25, rotate: -8 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="grid size-10 place-items-center rounded-full"
            >
              <Icon
                name="star"
                filled={n <= shown}
                className={cn(
                  "size-7 transition-colors duration-200",
                  n <= shown ? "text-gold-3 drop-shadow-[0_0_10px_rgba(230,207,154,0.7)]" : "text-white/30",
                )}
              />
            </motion.button>
          ))}
          <span className="ms-2 font-display text-[1.1rem] font-bold text-gold-3">
            {localizeNumber(shown, locale)}
            <span className="text-[0.8rem] font-medium text-white/50">/{localizeNumber(5, locale)}</span>
          </span>
        </div>
      </div>

      <label className="relative block">
        <span className="block text-[0.68rem] font-semibold tracking-[0.16em] text-white/60 uppercase">
          {t("feedbackMessage")}
        </span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, FEEDBACK_LIMITS.maxMessage))}
          rows={3}
          placeholder={t("feedbackMessagePlaceholder")}
          className="mt-2 w-full resize-none rounded-[1rem] border border-white/15 bg-white/10 px-4 py-3 text-[0.95rem] text-white placeholder:text-white/40 outline-none transition-colors focus:border-gold-3/70 focus:bg-white/15"
        />
        <span className="mt-1 block text-end text-[0.7rem] text-white/40">
          {localizeNumber(message.length, locale)}/{localizeNumber(FEEDBACK_LIMITS.maxMessage, locale)}
        </span>
      </label>

      <label className="relative block">
        <span className="block text-[0.68rem] font-semibold tracking-[0.16em] text-white/60 uppercase">
          {t("feedbackPhone")}
        </span>
        <input
          type="tel"
          inputMode="tel"
          dir="ltr"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="05X XXX XXXX"
          className="mt-2 w-full rounded-[1rem] border border-white/15 bg-white/10 px-4 py-3 text-[0.95rem] text-white placeholder:text-white/40 outline-none transition-colors focus:border-gold-3/70 focus:bg-white/15 rtl:text-end"
        />
        <span className="mt-1.5 block text-[0.72rem] text-white/45">{t("feedbackPhoneNote")}</span>
      </label>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-full bg-red-400/15 px-4 py-2 text-[0.82rem] text-red-200"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={state !== "idle"}
        layout
        whileTap={{ scale: 0.97 }}
        className={cn(
          "relative mt-auto inline-flex h-12 items-center justify-center gap-2.5 overflow-hidden rounded-full px-6 font-display text-[0.95rem] font-semibold transition-colors duration-500",
          state === "done" ? "bg-aqua text-white" : "bg-gold text-chalk hover:bg-white",
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {state === "done" ? (
            <motion.span
              key="done"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2"
            >
              <Icon name="check" className="size-4" strokeWidth={2.8} />
              {t("feedbackThanks")}
            </motion.span>
          ) : (
            <motion.span
              key={state}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2"
            >
              {state === "sending" ? t("feedbackSending") : t("feedbackSubmit")}
              {state === "idle" && <Icon name="arrow" className="flip-rtl size-4" strokeWidth={2.2} />}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  );
}

function readLocal(): Feedback[] {
  try {
    const raw = window.localStorage.getItem(LOCAL_KEY);
    const parsed = raw ? (JSON.parse(raw) as Feedback[]) : [];
    return Array.isArray(parsed) ? parsed.slice(0, FEEDBACK_LIMITS.maxShown) : [];
  } catch {
    return [];
  }
}

function writeLocal(items: Feedback[]) {
  try {
    window.localStorage.setItem(LOCAL_KEY, JSON.stringify(items.slice(0, FEEDBACK_LIMITS.maxShown)));
  } catch {
    /* private mode or full storage — the post still shows this session */
  }
}
