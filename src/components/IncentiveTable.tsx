import Eyebrow from "./Eyebrow";
import Icon from "./Icon";

type Tier = {
  range: string;
  amount: string;
  description: string;
  highlight: boolean;
};

const TIERS: Tier[] = [
  {
    range: "Bajo 2.500 UF",
    amount: "$15.000",
    description: "Propiedades de valor estándar",
    highlight: false,
  },
  {
    range: "2.500 – 5.000 UF",
    amount: "$25.000",
    description: "Tramo más frecuente",
    highlight: false,
  },
  {
    range: "Sobre 5.000 UF",
    amount: "$30.000",
    description: "Premio máximo — propiedades de alto valor",
    highlight: true,
  },
];

export default function IncentiveTable() {
  return (
    <section
      id="incentivos"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "var(--ancla-bg-dark)" }}
      aria-labelledby="incentive-heading"
    >
      {/* Atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(57,45,207,0.18) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Eyebrow tone="cyan" icon="credit-card">
            ¿Cuánto ganas?
          </Eyebrow>
          <h2
            id="incentive-heading"
            className="font-bold leading-[1.08] tracking-[-0.02em] text-white mt-5 mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Tres tramos según el valor{" "}
            <span className="text-gradient-accent">de la propiedad referida</span>
          </h2>
          <p
            className="leading-relaxed"
            style={{
              color: "var(--ancla-text-muted-dark)",
              fontSize: "clamp(15px, 1.4vw, 17px)",
            }}
          >
            El tramo se determina por el valor asegurado de la propiedad de quien recomendaste — no de la tuya.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {TIERS.map((tier) => (
            <article
              key={tier.range}
              className="relative flex flex-col gap-6 p-7 lg:p-8 rounded-[20px] transition-all duration-300 hover:-translate-y-1"
              style={
                tier.highlight
                  ? {
                      background:
                        "linear-gradient(180deg, rgba(255,131,34,0.20) 0%, rgba(255,131,34,0.07) 100%)",
                      border: "1px solid rgba(255,131,34,0.45)",
                      boxShadow:
                        "0 12px 48px rgba(255,131,34,0.20), 0 0 0 1px rgba(255,131,34,0.12), inset 0 1px 0 rgba(255,131,34,0.15)",
                    }
                  : {
                      background: "rgba(255,255,255,0.035)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }
              }
            >
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.12em] whitespace-nowrap"
                    style={{
                      background: "linear-gradient(135deg, #ff8322, #ff6b00)",
                      color: "#ffffff",
                      boxShadow: "0 4px 16px rgba(255,131,34,0.45)",
                    }}
                  >
                    <Icon name="star" size={12} />
                    Gift card máxima
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-[14px] flex items-center justify-center"
                style={{
                  background: tier.highlight
                    ? "rgba(255,131,34,0.18)"
                    : "rgba(255,255,255,0.06)",
                  color: tier.highlight ? "#ff8322" : "rgba(255,255,255,0.65)",
                }}
              >
                <Icon name="home" size={22} />
              </div>

              {/* Range label */}
              <div>
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-1.5"
                  style={{ color: "rgba(255,255,255,0.50)" }}
                >
                  Valor asegurado
                </p>
                <p className="text-[18px] font-bold text-white leading-tight">
                  {tier.range}
                </p>
              </div>

              {/* Amount — protagonista */}
              <div className="flex-1 flex flex-col justify-end">
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-2"
                  style={{ color: "rgba(255,255,255,0.50)" }}
                >
                  Gift card Falabella
                </p>
                <p
                  className="font-extrabold leading-none tracking-[-0.02em]"
                  style={{
                    fontSize: tier.highlight ? "clamp(48px, 5.5vw, 64px)" : "clamp(40px, 4.5vw, 52px)",
                    color: tier.highlight ? "#ff8322" : "#ffffff",
                    textShadow: tier.highlight ? "0 0 40px rgba(255,131,34,0.35)" : "none",
                  }}
                >
                  {tier.amount}
                </p>
              </div>

              <p
                className="text-[13px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {tier.description}
              </p>
            </article>
          ))}
        </div>

        {/* No-limit callout */}
        <div
          className="flex flex-col sm:flex-row items-center gap-5 p-6 sm:p-7 rounded-[18px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(43,211,245,0.06) 0%, rgba(202,75,255,0.06) 100%)",
            border: "1px solid rgba(202,75,255,0.18)",
          }}
        >
          <div
            className="flex-shrink-0 w-14 h-14 rounded-[14px] flex items-center justify-center text-[32px] font-extrabold leading-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(43,211,245,0.15), rgba(202,75,255,0.15))",
              color: "#ca4bff",
              border: "1px solid rgba(202,75,255,0.25)",
            }}
            aria-hidden="true"
          >
            ∞
          </div>
          <div className="text-center sm:text-left">
            <p className="text-[17px] font-bold text-white mb-1">
              Sin tope de referidos
            </p>
            <p
              className="text-[14px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Puedes referir a cuantas personas quieras y acumular gift cards sin restricción. Cada referido que contrate suma una a tu cuenta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
