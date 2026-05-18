import Eyebrow from "./Eyebrow";
import Icon, { type IconName } from "./Icon";

type Step = {
  number: string;
  icon: IconName;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    icon: "whatsapp",
    title: "Comparte tu link",
    description:
      "Después de renovar tu póliza recibes un link personalizado por WhatsApp. Reenvíaselo a cualquier persona que tenga un crédito hipotecario.",
  },
  {
    number: "02",
    icon: "calculator",
    title: "Tu referido cotiza",
    description:
      "La persona hace clic, llega a la calculadora de Ancla y ve exactamente cuánto puede ahorrar al cambiar su seguro.",
  },
  {
    number: "03",
    icon: "users",
    title: "Ancla gestiona todo",
    description:
      "Contactamos al referido, lo asesoramos y gestionamos el cambio de seguro de principio a fin — sin que tú hagas nada más.",
  },
  {
    number: "04",
    icon: "award",
    title: "Ganas tu gift card",
    description:
      "Si tu referido contrata su póliza, te notificamos por WhatsApp y enviamos la gift card Falabella según el tramo correspondiente.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-16 md:py-24"
      style={{ background: "var(--ancla-bg-light)" }}
      aria-labelledby="how-heading"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Eyebrow tone="brand">4 pasos simples</Eyebrow>
          <h2
            id="how-heading"
            className="font-bold leading-[1.08] tracking-[-0.02em] mt-5 mb-4"
            style={{
              color: "var(--ancla-text-light)",
              fontSize: "clamp(28px, 4vw, 44px)",
            }}
          >
            Así de fácil funciona
          </h2>
          <p
            className="leading-relaxed"
            style={{
              color: "var(--ancla-text-muted-light)",
              fontSize: "clamp(16px, 1.4vw, 18px)",
            }}
          >
            Solo necesitas compartir tu link. Nosotros hacemos el resto.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step, i) => (
            <article
              key={step.number}
              className="relative group flex flex-col gap-5 p-7 rounded-[18px] bg-white transition-all duration-300 hover:-translate-y-1"
              style={{
                border: "1px solid rgba(57,45,207,0.10)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: "var(--shadow-hover)" }}
                aria-hidden="true"
              />

              {/* Connector */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-12 left-full w-5 z-10"
                  style={{
                    height: "1px",
                    background:
                      "linear-gradient(to right, rgba(57,45,207,0.18), transparent)",
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Number + Icon row */}
              <div className="flex items-start justify-between relative">
                <div
                  className="w-12 h-12 rounded-[14px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: "rgba(57,45,207,0.07)",
                    color: "var(--ancla-brand)",
                  }}
                >
                  <Icon name={step.icon} size={22} />
                </div>
                <span
                  className="text-[42px] font-extrabold leading-none tracking-tight"
                  style={{ color: "rgba(57,45,207,0.10)" }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="relative">
                <h3
                  className="text-[17px] font-bold mb-2 leading-snug tracking-[-0.01em]"
                  style={{ color: "var(--ancla-text-light)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[14px] leading-relaxed"
                  style={{ color: "var(--ancla-text-muted-light)" }}
                >
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
