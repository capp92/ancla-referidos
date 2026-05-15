import type { ReactNode } from "react";
import Icon, { type IconName } from "./Icon";

type EyebrowTone = "cyan" | "violet" | "brand" | "cta" | "white";

const TONES: Record<EyebrowTone, { bg: string; color: string; border: string }> = {
  cyan: {
    bg: "rgba(43,211,245,0.10)",
    color: "#2bd3f5",
    border: "rgba(43,211,245,0.22)",
  },
  violet: {
    bg: "rgba(202,75,255,0.10)",
    color: "#ca4bff",
    border: "rgba(202,75,255,0.22)",
  },
  brand: {
    bg: "rgba(57,45,207,0.08)",
    color: "#392dcf",
    border: "rgba(57,45,207,0.18)",
  },
  cta: {
    bg: "rgba(255,131,34,0.10)",
    color: "#ff8322",
    border: "rgba(255,131,34,0.25)",
  },
  white: {
    bg: "rgba(255,255,255,0.10)",
    color: "rgba(255,255,255,0.92)",
    border: "rgba(255,255,255,0.18)",
  },
};

type EyebrowProps = {
  tone?: EyebrowTone;
  icon?: IconName;
  children: ReactNode;
};

export default function Eyebrow({ tone = "cyan", icon, children }: EyebrowProps) {
  const t = TONES[tone];
  return (
    <span
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em]"
      style={{
        background: t.bg,
        color: t.color,
        border: `1px solid ${t.border}`,
      }}
    >
      {icon && <Icon name={icon} size={12} />}
      {children}
    </span>
  );
}
