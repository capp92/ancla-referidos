"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import Button from "./Button";
import Icon from "./Icon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,7,26,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-10 flex items-center justify-between h-[68px]">
        <Logo size={38} />

        <div className="flex items-center gap-3 md:gap-5">
          <span
            className="hidden md:inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase"
            style={{ color: "rgba(43,211,245,0.85)" }}
          >
            <Icon name="shield-check" size={12} />
            Regulado CMF
          </span>

          <Button href="#empezar" variant="cta" size="md" icon="arrow-right" iconPosition="right">
            Compartir link
          </Button>
        </div>
      </div>
    </header>
  );
}
