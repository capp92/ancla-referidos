import Button from "./Button";
import Eyebrow from "./Eyebrow";
import Icon from "./Icon";
import WhatsAppPreview from "./WhatsAppPreview";
import ShareWidget from "./ShareWidget";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
      style={{ background: "var(--ancla-bg-dark)" }}
      aria-labelledby="hero-heading"
    >
      {/* Grid oficial Ancla */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/brand/patterns/grid-dark.svg)",
          backgroundSize: "400px 400px",
          opacity: 0.7,
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, #000 35%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, #000 35%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      {/* Glow brand desde arriba */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--ancla-gradient-hero)" }}
        aria-hidden="true"
      />

      {/* Orbe cyan bottom-left */}
      <div
        className="absolute pointer-events-none -bottom-32 -left-32 w-[520px] h-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(43,211,245,0.10) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      {/* Orbe violeta top-right */}
      <div
        className="absolute pointer-events-none -top-20 -right-32 w-[480px] h-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(202,75,255,0.10) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Columna izquierda — Texto */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="flex justify-center lg:justify-start mb-6">
              <Eyebrow tone="cyan" icon="award">
                Programa de referidos
              </Eyebrow>
            </div>

            <h1
              id="hero-heading"
              className="font-extrabold leading-[1.02] tracking-[-0.025em] text-white mb-6"
              style={{ fontSize: "clamp(40px, 6vw, 68px)" }}
            >
              Recomienda Ancla.{" "}
              <span className="text-gradient-accent">Gana tu gift card.</span>
            </h1>

            <p
              className="font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 mb-9"
              style={{
                color: "var(--ancla-text-muted-dark)",
                fontSize: "clamp(16px, 1.6vw, 19px)",
              }}
            >
              Comparte tu link con alguien que pague seguro hipotecario.
              Si contrata con Ancla, ganas hasta{" "}
              <span className="text-white font-semibold">$30.000 en gift card Falabella</span>{" "}
              — sin tope de referidos.
            </p>

            {/* Share widget */}
            <div id="empezar" className="mb-8">
              <ShareWidget />
            </div>

            {/* Secondary CTA */}
            <div className="flex justify-center lg:justify-start">
              <Button
                href="#como-funciona"
                variant="outline-light"
                size="md"
                icon="chevron-down"
                iconPosition="right"
              >
                Ver cómo funciona
              </Button>
            </div>

            {/* Trust bar inline */}
            <ul
              className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-2.5 text-[13px]"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              {[
                { icon: "zap", text: "Sin tope" },
                { icon: "shield-check", text: "Regulado CMF" },
                { icon: "users", text: "+1.000 clientes" },
                { icon: "clock", text: "48 horas" },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-center gap-1.5">
                  <Icon name={icon as "zap"} size={14} className="opacity-75" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna derecha — WhatsApp Preview */}
          <div
            className="hidden lg:flex justify-center items-center animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            <WhatsAppPreview />
          </div>

          {/* Mobile: WhatsApp preview compacto debajo */}
          <div className="lg:hidden flex justify-center pt-2">
            <WhatsAppPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
