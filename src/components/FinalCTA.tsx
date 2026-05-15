import Button from "./Button";
import Eyebrow from "./Eyebrow";
import Icon from "./Icon";

const TRUST_ITEMS = [
  { text: "Regulado CMF", icon: "shield-check" as const },
  { text: "NCG 469", icon: "document" as const },
  { text: "Sin costo de cambio", icon: "zap" as const },
  { text: "48 horas", icon: "clock" as const },
];

export default function FinalCTA() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "var(--ancla-bg-dark)" }}
      aria-labelledby="finalcta-heading"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/brand/patterns/grid-dark.svg)",
          backgroundSize: "400px 400px",
          opacity: 0.5,
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(57,45,207,0.25) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto px-5 md:px-10 text-center">
        <Eyebrow tone="cta" icon="zap">
          Empieza hoy
        </Eyebrow>

        <h2
          id="finalcta-heading"
          className="font-extrabold leading-[1.04] tracking-[-0.025em] text-white mt-6 mb-5"
          style={{ fontSize: "clamp(34px, 5vw, 56px)" }}
        >
          Cada recomendación vale{" "}
          <span className="text-gradient-accent">hasta $30.000</span>
        </h2>

        <p
          className="leading-relaxed mb-10 max-w-lg mx-auto"
          style={{
            color: "var(--ancla-text-muted-dark)",
            fontSize: "clamp(16px, 1.5vw, 18px)",
          }}
        >
          Solo comparte tu link con quien pague seguro hipotecario. Nosotros hacemos el resto — y tú acumulas gift cards sin tope.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Button
            href="#empezar"
            variant="cta"
            size="lg"
            icon="whatsapp"
          >
            Compartir mi link
          </Button>
          <Button
            href="https://wa.me/56987928738"
            variant="outline-light"
            size="lg"
            icon="phone"
          >
            Hablar con Ancla
          </Button>
        </div>

        {/* Trust mini bar */}
        <div
          className="inline-flex flex-wrap justify-center items-center gap-x-5 gap-y-2 px-5 py-3 rounded-[12px]"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {TRUST_ITEMS.map(({ text, icon }) => (
            <span
              key={text}
              className="inline-flex items-center gap-1.5 text-[12px] font-medium"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              <Icon name={icon} size={13} className="opacity-80" />
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
