import Eyebrow from "./Eyebrow";

type Stat = {
  value: string;
  label: string;
  color: string;
};

const STATS: Stat[] = [
  { value: "+1.000", label: "clientes cambiaron su seguro con Ancla", color: "#2bd3f5" },
  { value: "25–40%", label: "de ahorro promedio con la misma cobertura", color: "#ca4bff" },
  { value: "$300.000", label: "ahorro promedio al año por cliente", color: "#2bd3f5" },
  { value: "48 hrs", label: "del primer contacto a la póliza activa", color: "#ca4bff" },
];


export default function SocialProof() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "var(--ancla-bg-brand)" }}
      aria-labelledby="proof-heading"
    >
      {/* Atmósfera sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(8,7,26,0.30) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Eyebrow tone="white" icon="shield-check">
            Por qué Ancla
          </Eyebrow>
          <h2
            id="proof-heading"
            className="font-bold leading-[1.08] tracking-[-0.02em] text-white mt-5 mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Cuando recomiendas Ancla,
            <br className="hidden sm:block" /> recomiendas algo que funciona
          </h2>
          <p
            className="leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.70)",
              fontSize: "clamp(15px, 1.4vw, 17px)",
            }}
          >
            Tu referido no solo contrata un seguro más barato — deja de pagar de más por el resto de su crédito hipotecario.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col gap-3 p-6 sm:p-7 rounded-[18px] text-center transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <span
                className="font-extrabold leading-none tracking-[-0.02em]"
                style={{
                  color: stat.color,
                  fontSize: "clamp(32px, 3.6vw, 48px)",
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-[13px] leading-snug"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
