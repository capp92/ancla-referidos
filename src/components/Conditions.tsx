"use client";

import { useState } from "react";
import Eyebrow from "./Eyebrow";
import Icon, { type IconName } from "./Icon";

type Condition = {
  icon: IconName;
  question: string;
  answer: string;
};

const CONDITIONS: Condition[] = [
  {
    icon: "users",
    question: "¿Quién puede participar?",
    answer:
      "Clientes actuales de Ancla Seguros.",
  },
  {
    icon: "clock",
    question: "¿Cuándo recibo la gift card?",
    answer:
      "Una vez que la persona paga y contrata su seguro con Ancla, te notificaremos por WhatsApp para gestionar la entrega de la gift Card de Falabella.",
  },
  {
    icon: "whatsapp",
    question: "¿Qué tiene que hacer mi referido?",
    answer:
      "Hacer click en tu link, cotizar su ahorro en la calculadora, dejar sus datos y contratar su nuevo seguro con Ancla. Nosotros gestionamos todo el proceso de cambio.",
  },
  {
    icon: "credit-card",
    question: "¿Cómo se calcula el monto?",
    answer:
      "Según el valor asegurado de la propiedad de tu referido: bajo 2.500 UF = $15.000 · 2.500 a 5.000 UF = $25.000 · sobre 5.000 UF = $30.000. El tramo es de la propiedad de quien recomendaste, no de la tuya.",
  },
  {
    icon: "zap",
    question: "¿Hay un límite de referidos?",
    answer:
      "No. Puedes referir a cuantas personas quieras y acumular gift cards sin restricción. Cada referido que contrate suma una gift card independiente a tu cuenta. Además, al ser un nuevo cliente de Ancla, también podrá participar en el programa de referidos.",
  },
  {
    icon: "award",
    question: "¿La persona que recomendé también recibe algo?",
    answer:
      "Directamente no, pero su beneficio es real: cambia su seguro y comienza a ahorrar entre 25% y 40% al año en su prima — con la misma cobertura que tiene hoy.",
  },
  {
    icon: "shield-check",
    question: "¿Es legal cambiar el seguro hipotecario?",
    answer:
      "Sí. La NCG 469 de la CMF permite a cualquier persona con un crédito hipotecario cambiar libremente su seguro de incendio y sismo a otra compañía. Es un derecho regulado y sin costo.",
  },
  {
    icon: "document",
    question: "¿Qué pasa si mi referido se arrepiente?",
    answer:
      "Si el referido no firma o desiste antes de contratar, no se entrega gift card — pero tampoco hay penalización para ti. Puedes seguir refiriendo a otras personas con el mismo link.",
  },
];

function ConditionItem({ item, isOpen, onToggle }: { item: Condition; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="rounded-[16px] transition-all duration-200"
      style={{
        background: "#ffffff",
        border: isOpen
          ? "1px solid rgba(57,45,207,0.25)"
          : "1px solid rgba(57,45,207,0.10)",
        boxShadow: isOpen ? "var(--shadow-card)" : "0 1px 0 rgba(57,45,207,0.04)",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-4 p-5 md:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#392dcf]/40 rounded-[16px]"
      >
        <div
          className="flex-shrink-0 w-11 h-11 rounded-[12px] flex items-center justify-center transition-colors"
          style={{
            background: isOpen ? "rgba(57,45,207,0.10)" : "rgba(57,45,207,0.06)",
            color: "var(--ancla-brand)",
          }}
        >
          <Icon name={item.icon} size={20} />
        </div>
        <h3
          className="flex-1 text-[15px] md:text-[16px] font-bold leading-snug tracking-[-0.01em]"
          style={{ color: "var(--ancla-text-light)" }}
        >
          {item.question}
        </h3>
        <div
          className="flex-shrink-0 transition-transform duration-300"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            color: "var(--ancla-brand)",
          }}
        >
          <Icon name="chevron-down" size={20} />
        </div>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: isOpen ? "320px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p
          className="px-5 md:px-6 pb-5 md:pb-6 pl-[80px] md:pl-[88px] text-[14px] leading-relaxed"
          style={{ color: "var(--ancla-text-muted-light)" }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function Conditions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-16 md:py-24"
      style={{ background: "var(--ancla-bg-light)" }}
      aria-labelledby="conditions-heading"
    >
      <div className="max-w-4xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Eyebrow tone="brand" icon="search">
            Preguntas frecuentes
          </Eyebrow>
          <h2
            id="conditions-heading"
            className="font-bold leading-[1.08] tracking-[-0.02em] mt-5 mb-4"
            style={{
              color: "var(--ancla-text-light)",
              fontSize: "clamp(28px, 4vw, 44px)",
            }}
          >
            Todo lo que necesitas saber
          </h2>
          <p
            className="leading-relaxed"
            style={{
              color: "var(--ancla-text-muted-light)",
              fontSize: "clamp(15px, 1.4vw, 17px)",
            }}
          >
            Sin letra chica. Sin condiciones escondidas.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {CONDITIONS.map((item, i) => (
            <ConditionItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
