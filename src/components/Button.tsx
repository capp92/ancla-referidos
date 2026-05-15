import Link from "next/link";
import type { ReactNode } from "react";
import Icon, { type IconName } from "./Icon";

type ButtonVariant = "cta" | "outline-light" | "outline-dark" | "ghost-light";
type ButtonSize = "md" | "lg";

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconName;
  iconPosition?: "left" | "right";
  external?: boolean;
  className?: string;
  children: ReactNode;
};

const SIZES: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-[14px]",
  lg: "px-7 py-4 text-[15px]",
};

const VARIANTS: Record<ButtonVariant, string> = {
  cta:
    "text-white shadow-[0_8px_28px_rgba(255,131,34,0.35)] hover:shadow-[0_12px_32px_rgba(255,131,34,0.45)] active:scale-[0.98]",
  "outline-light":
    "bg-transparent text-white border-[1.5px] border-white/25 hover:border-white/60 hover:bg-white/5",
  "outline-dark":
    "bg-transparent text-[#392dcf] border-[1.5px] border-[#392dcf]/40 hover:border-[#392dcf] hover:bg-[#392dcf]/5",
  "ghost-light":
    "bg-transparent text-white/70 hover:text-white",
};

export default function Button({
  href,
  variant = "cta",
  size = "lg",
  icon,
  iconPosition = "left",
  external,
  className = "",
  children,
}: ButtonProps) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
    variant === "cta"
      ? "focus-visible:ring-[#ff8322] focus-visible:ring-offset-[#08071a]"
      : "focus-visible:ring-white/40 focus-visible:ring-offset-[#08071a]"
  }`;

  const ctaBg = variant === "cta" ? { background: "#ff8322" } : undefined;

  const content = (
    <>
      {icon && iconPosition === "left" && <Icon name={icon} size={18} />}
      <span>{children}</span>
      {icon && iconPosition === "right" && <Icon name={icon} size={18} />}
    </>
  );

  const classes = `${baseClasses} ${SIZES[size]} ${VARIANTS[variant]} ${className}`.trim();

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        style={ctaBg}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} style={ctaBg}>
      {content}
    </Link>
  );
}
