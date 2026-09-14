import Image from "next/image";
import { cn } from "@/lib/utils";
import type { MediaSlot } from "@/lib/media";
import type { Locale } from "@/i18n/config";
import { Plate } from "./Plate";

/**
 * Renders a media slot: a real photograph if one has been supplied,
 * otherwise the generated plate. Callers never need to know which.
 */
export function Figure({
  slot,
  locale,
  className,
  imgClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: {
  slot: MediaSlot;
  locale: Locale;
  className?: string;
  /** Applied to the <img> itself — for hover zooms and the like. */
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const alt = slot.alt[locale];

  return (
    <div className={cn("relative overflow-hidden bg-ink-2", className)}>
      {slot.src ? (
        <Image
          src={slot.src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imgClassName)}
        />
      ) : (
        <>
          <Plate id={slot.id} kind={slot.kind} />
          {/* The alt text still needs to reach assistive tech. */}
          <span className="sr-only">{alt}</span>
        </>
      )}
    </div>
  );
}
