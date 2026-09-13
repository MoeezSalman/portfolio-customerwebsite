import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/graphics/Icon";

type Variant = "primary" | "outline" | "ghost" | "aqua";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2.5 rounded-full font-display font-semibold tracking-tight whitespace-nowrap transition-[transform,box-shadow,background-color,color] duration-300 ease-[var(--ease-expo)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-chalk text-ink hover:bg-gold hover:text-chalk shadow-[0_8px_24px_-12px_rgba(23,24,29,0.45)] hover:shadow-[0_12px_36px_-10px_rgba(184,134,43,0.55)]",
  aqua: "bg-aqua text-white hover:bg-aqua-2 hover:shadow-[0_12px_36px_-10px_rgba(15,138,123,0.5)]",
  outline:
    "border border-line-2 text-chalk hover:border-chalk hover:bg-chalk hover:text-ink",
  ghost: "text-fog hover:text-chalk hover:bg-black/[0.04]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.8rem]",
  md: "h-11 px-6 text-[0.9rem]",
  lg: "h-14 px-8 text-[1rem]",
};

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: IconName;
  /** Renders a trailing arrow that slides on hover. */
  arrow?: boolean;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  icon,
  arrow = false,
  external = false,
  type = "button",
  disabled,
  onClick,
  ...rest
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const inner = (
    <>
      {icon && <Icon name={icon} className="size-[1.15em]" strokeWidth={1.8} />}
      <span>{children}</span>
      {arrow && (
        <Icon
          name="arrow"
          className="flip-rtl size-[1.1em] transition-transform duration-300 ease-[var(--ease-expo)] group-hover/btn:translate-x-1"
          strokeWidth={1.9}
        />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...rest}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes} {...rest}>
      {inner}
    </button>
  );
}
