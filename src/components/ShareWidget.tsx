"use client";

import { useState } from "react";
import Icon from "./Icon";

const REFERRAL_LINK =
  "https://calcula.anclaseguros.cl/#utm_source=referido&utm_medium=19.524.801-K&utm_campaign=+56987928738";

const WA_MESSAGE = `¡Hola!

¿Tienes un crédito hipotecario? Yo llevo más de 1 año con Ancla y me ayudaron a bajar mi dividendo mensual. Lo que hacen es cambiarte el seguro de incendio y sismo que viene amarrado al banco por uno más barato — con la misma cobertura. El banco no puede negarse, es un derecho que tienes por ley.

📉 Ahorro promedio: 25–40% menos en tu seguro hipotecario al año
💰 $300.000 de ahorro anual en promedio
🤝 Te atienden de inmediato y hacen todo el trámite por ti
🛡️ Regulada por la CMF (NCG 469) — 100% legal y sin riesgos
🔄 Sin costo de cambio, misma cobertura — o incluso mejor

Calcula cuánto podrías ahorrar en 1 minuto en este link, y si te parece que el ahorro es atractivo, ¡te lo recomiendo 100%! Y de paso me llega una gift card 😄 ¡win win!

${REFERRAL_LINK}`;

function normalizePhone(raw: string): string {
  // Elimina espacios, guiones, paréntesis, +, 56 al inicio
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("56") && digits.length >= 11) return digits;
  if (digits.startsWith("9") && digits.length === 9) return `56${digits}`;
  if (digits.length === 8) return `569${digits}`;
  return `56${digits}`;
}

export default function ShareWidget() {
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState(false);

  const digits = phone.replace(/\D/g, "");
  const isValid = digits.length >= 8 && digits.length <= 11;
  const showError = touched && phone.length > 0 && !isValid;

  function handleShare() {
    if (!phone.trim()) return;
    const normalized = normalizePhone(phone);
    const url = `https://wa.me/${normalized}?text=${encodeURIComponent(WA_MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && isValid) handleShare();
  }

  return (
    <div
      className="w-full rounded-[20px] p-5 md:p-6"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.10)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <p
        className="text-[13px] font-semibold mb-3.5"
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
        ¿A quién quieres recomendarle Ancla?
      </p>

      <div className="flex flex-col sm:flex-row gap-2.5">
        {/* Input */}
        <div className="flex-1 relative">
          <div
            className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none select-none"
            aria-hidden="true"
          >
            <span className="text-[13px] font-semibold" style={{ color: "rgba(8,7,26,0.45)" }}>
              🇨🇱 +56
            </span>
          </div>
          <input
            type="tel"
            inputMode="numeric"
            placeholder="9 1234 5678"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={() => setTouched(true)}
            onKeyDown={handleKeyDown}
            aria-label="Número de teléfono del contacto"
            className="w-full h-[50px] rounded-[12px] pl-[72px] pr-4 text-[15px] font-medium placeholder:font-normal transition-all duration-150 focus:outline-none"
            style={{
              background: "#f4f7fc",
              border: showError
                ? "1px solid rgba(220,60,50,0.50)"
                : "1px solid rgba(57,45,207,0.15)",
              color: "#08071a",
            }}
          />
          {showError && (
            <p
              className="absolute -bottom-5 left-0 text-[11px]"
              style={{ color: "rgba(220,60,50,0.90)" }}
            >
              Ingresa un número válido (8–11 dígitos)
            </p>
          )}
        </div>

        {/* Botón WhatsApp */}
        <button
          type="button"
          onClick={handleShare}
          disabled={!phone.trim() || !isValid}
          className="flex items-center justify-center gap-2.5 h-[50px] px-5 rounded-[12px] font-semibold text-[14px] transition-all duration-150 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
          style={{
            background: isValid && phone.trim()
              ? "linear-gradient(135deg, #25d366, #128c7e)"
              : "rgba(37,211,102,0.18)",
            color: isValid && phone.trim() ? "#ffffff" : "rgba(8,7,26,0.40)",
            boxShadow: isValid && phone.trim()
              ? "0 4px 18px rgba(37,211,102,0.30)"
              : "none",
          }}
          aria-label="Abrir WhatsApp con mensaje precargado"
        >
          {/* WhatsApp icon inline */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Enviar por WhatsApp
        </button>
      </div>

      {/* Hint */}
      <p
        className="text-[11px] mt-4 leading-relaxed"
        style={{ color: "rgba(255,255,255,0.30)" }}
      >
        Te lleva a WhatsApp con un mensaje listo para enviar. El link incluye tu código de referido.
      </p>
    </div>
  );
}
