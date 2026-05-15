import Button from "./Button";
import Eyebrow from "./Eyebrow";
import Icon from "./Icon";
import WhatsAppPreview from "./WhatsAppPreview";
import ShareWidget from "./ShareWidget";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-10 md:pt-28 md:pb-14"
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

      {/* Glow brand */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--ancla-gradient-hero)" }}
        aria-hidden="true"
      />

      {/* Orbe cyan */}
      <div
        className="absolute pointer-events-none -bottom-32 -left-32 w-[520px] h-[520px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(43,211,245,0.10) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      {/* Orbe violeta */}
      <div
        className="absolute pointer-events-none -top-20 -right-32 w-[480px] h-[480px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(202,75,255,0.10) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">

          {/* ── Columna izquierda — Texto + widget ─────────── */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="flex justify-center lg:justify-start mb-5">
              <Eyebrow tone="cyan" icon="award">
                Programa de referidos
              </Eyebrow>
            </div>

            <h1
              id="hero-heading"
              className="font-extrabold leading-[1.02] tracking-[-0.025em] text-white mb-5"
              style={{ fontSize: "clamp(36px, 5.5vw, 62px)" }}
            >
              Recomienda Ancla.{" "}
              <span className="text-gradient-accent">Gana tu gift card.</span>
            </h1>

            <p
              className="font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 mb-7"
              style={{
                color: "var(--ancla-text-muted-dark)",
                fontSize: "clamp(15px, 1.4vw, 17px)",
              }}
            >
              Comparte tu link con alguien que pague seguro hipotecario.
              Si contrata con Ancla, ganas hasta{" "}
              <span className="text-white font-semibold">$30.000 en gift card Falabella</span>{" "}
              — sin tope de referidos.
            </p>

            {/* Share widget */}
            <div id="empezar" className="mb-6">
              <ShareWidget />
            </div>

            {/* Trust bar */}
            <ul
              className="flex flex-wrap justify-center lg:justify-start items-center gap-x-5 gap-y-2 text-[12px]"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              {[
                { icon: "zap", text: "Sin tope" },
                { icon: "shield-check", text: "Regulado CMF" },
                { icon: "users", text: "+1.000 clientes" },
                { icon: "clock", text: "48 horas" },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-center gap-1.5">
                  <Icon name={icon as "zap"} size={13} className="opacity-70" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Columna derecha — Imagen + WhatsApp overlay ─ */}
          <div
            className="hidden lg:block animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            {/* Contenedor: imagen full + chat superpuesto abajo-derecha */}
            <div className="relative" style={{ height: "520px" }}>

              {/* Foto gift card — recortada para mostrar a la mujer */}
              <div
                className="absolute inset-0 rounded-[24px] overflow-hidden"
                style={{ boxShadow: "0 20px 60px rgba(8,7,26,0.55)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/gift-card-hero.png"
                  alt="Mujer sosteniendo una gift card Falabella"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "30% center" }}
                  draggable={false}
                />
                {/* Gradiente inferior-derecho donde se asienta el chat */}
                <div
                  className="absolute bottom-0 right-0 w-3/4 h-2/5 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at bottom right, rgba(8,7,26,0.60) 0%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* WhatsApp preview — empieza en 3/4 de la imagen, más ancho */}
              <div
                className="absolute z-10"
                style={{
                  right: "-16px",
                  top: "62%",
                  width: "320px",
                  filter: "drop-shadow(0 16px 40px rgba(8,7,26,0.65))",
                }}
              >
                <WhatsAppPreview />
              </div>

            </div>
          </div>

          {/* Mobile: WhatsApp preview solo */}
          <div className="lg:hidden flex justify-center pt-2">
            <WhatsAppPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
