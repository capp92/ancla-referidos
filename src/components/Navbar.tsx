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

        <div className="flex items-center gap-3 md:gap-6">
          <nav className="hidden md:flex items-center gap-5" aria-label="Navegación principal">
            <a
              href="#como-funciona"
              className="text-[13px] font-medium transition-colors duration-150"
              style={{ color: "rgba(255,255,255,0.60)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.95)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.60)")}
            >
              Cómo funciona
            </a>
            <a
              href="#incentivos"
              className="text-[13px] font-medium transition-colors duration-150"
              style={{ color: "rgba(255,255,255,0.60)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.95)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.60)")}
            >
              Cuánto ganas
            </a>
          </nav>

          <Button href="#empezar" variant="cta" size="md" icon="arrow-right" iconPosition="right">
            Compartir link
          </Button>
        </div>
      </div>
    </header>
  );
}
