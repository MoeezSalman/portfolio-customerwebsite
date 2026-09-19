import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * The Jalibalat logo: two marble slabs on a gold base with the bilingual
 * wordmark. Supplied by the client as one artwork, keyed off its black
 * background, so it sits on light and dark surfaces alike.
 * Source files: public/brand/logo.png (full) and mark.png (slabs only).
 */
export function Logo({
  className,
  size = "md",
  priority = false,
}: {
  className?: string;
  /** sm: header on phones · md: header · lg: footer */
  size?: "sm" | "md" | "lg";
  priority?: boolean;
  /** Kept for callers that still pass it — the artwork works on both surfaces. */
  light?: boolean;
  name?: string;
  tagline?: string;
}) {
  const h = { sm: "h-10", md: "h-11 md:h-14", lg: "h-16 md:h-20" }[size];

  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/brand/logo.png"
        alt="Jalibalat — جلي البلاط"
        width={1226}
        height={449}
        priority={priority}
        sizes="(max-width: 768px) 140px, 200px"
        className={cn("w-auto select-none", h)}
      />
    </span>
  );
}

/** Slabs-only mark for tight spots. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/mark.png"
      alt=""
      aria-hidden
      width={477}
      height={449}
      className={cn("size-9 w-auto select-none", className)}
    />
  );
}
