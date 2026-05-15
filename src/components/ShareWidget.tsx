"use client";

import { useState, useEffect } from "react";

// ─── Utilidades RUT ──────────────────────────────────────────────────────────

function formatRut(raw: string): string {
  const clean = raw.replace(/[^0-9kK]/g, "").toUpperCase();
  if (clean.length <= 1) return clean;
  const dv = clean.slice(-1);
  const body = clean.slice(0, -1);
  let formatted = "";
  for (let i = body.length - 1, count = 0; i >= 0; i--, count++) {
    if (count > 0 && count % 3 === 0) formatted = "." + formatted;
    formatted = body[i] + formatted;
  }
  return `${formatted}-${dv}`;
}

function validateRut(rut: string): boolean {
  const clean = rut.replace(/\./g, "").replace(/-/g, "").toUpperCase();
  if (!/^\d{7,8}[0-9K]$/.test(clean)) return false;
  const body = clean.slice(0, -1);
  const dv = clean.slice(-1);
  let sum = 0, mul = 2;
  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body[i]) * mul;
    mul = mul === 7 ? 2 : mul + 1;
  }
  const rem = 11 - (sum % 11);
  const expected = rem === 11 ? "0" : rem === 10 ? "K" : String(rem);
  return dv === expected;
}

// ─── Utilidades teléfono ─────────────────────────────────────────────────────

function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("56") && digits.length >= 11) return digits;
  if (digits.startsWith("9") && digits.length === 9) return `56${digits}`;
  if (digits.length === 8) return `569${digits}`;
  return `56${digits}`;
}

function isValidPhone(raw: string): boolean {
  const d = raw.replace(/\D/g, "");
  return d.length >= 8 && d.length <= 11;
}

// ─── Link y mensaje ──────────────────────────────────────────────────────────

function buildReferralLink(rut: string): string {
  return `https://calcula.anclaseguros.cl/#utm_source=referido&utm_medium=${encodeURIComponent(rut)}`;
}

function buildWaMessage(referralLink: string): string {
  return `¡Llevo 1 año con Ancla y bajé mi dividendo!

Lo que hacen es cambiarte el seguro de incendio y sismo que viene amarrado al banco por uno más barato — con la misma cobertura. El banco no puede negarse, es un derecho que tienes por ley.

· 25–40% menos en tu seguro · Sin costo para ti · Regulados por la CMF

Calcula cuánto podrías ahorrar en 1 minuto en este link, y si te parece que el ahorro es atractivo, ¡te lo recomiendo 100%! Y de paso me llega una gift card 😄 ¡win win!

${referralLink}`;
}

// ─── Componente ──────────────────────────────────────────────────────────────

export default function ShareWidget() {
  const [rut, setRut] = useState("");
  const [phone, setPhone] = useState("");
  const [rutTouched, setRutTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [copied, setCopied] = useState(false);
  const [supportsContacts, setSupportsContacts] = useState(false);

  useEffect(() => {
    setSupportsContacts(
      typeof navigator !== "undefined" &&
        "contacts" in navigator &&
        "ContactsManager" in window
    );
  }, []);

  const rutValid = validateRut(rut);
  const phoneValid = isValidPhone(phone);
  const showRutError = rutTouched && rut.length > 0 && !rutValid;
  const showPhoneError = phoneTouched && phone.length > 0 && !phoneValid;
  const referralLink = rutValid ? buildReferralLink(rut) : null;

  async function handlePickContact() {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const contacts = await (navigator as any).contacts.select(["tel"], { multiple: false });
      if (contacts?.length && contacts[0].tel?.length) {
        const cleaned = contacts[0].tel[0].replace(/\s+/g, "").replace(/^\+56/, "");
        setPhone(cleaned);
        setPhoneTouched(false);
      }
    } catch { /* cancelado */ }
  }

  function handleShare() {
    if (!rutValid || !phoneValid) return;
    const link = buildReferralLink(rut);
    const url = `https://wa.me/${normalizePhone(phone)}?text=${encodeURIComponent(buildWaMessage(link))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  async function handleCopyLink() {
    if (!referralLink) return;
    await navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div
      className="w-full rounded-[20px] p-5 md:p-6"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.10)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <p className="text-[13px] font-bold text-white mb-1">
        🔗 Genera tu link de referido
      </p>
      <p className="text-[11px] mb-4" style={{ color: "rgba(255,255,255,0.38)" }}>
        Ingresa tu RUT y listo — tu link queda personalizado.
      </p>

      {/* RUT */}
      <div className="mb-4">
        <label className="block text-[12px] font-semibold mb-1.5" htmlFor="rut-input"
          style={{ color: "rgba(255,255,255,0.55)" }}>
          Tu RUT
        </label>
        <div className="relative">
          <input
            id="rut-input"
            type="text"
            inputMode="text"
            placeholder="19.524.801-K"
            value={rut}
            maxLength={12}
            onChange={(e) => setRut(formatRut(e.target.value))}
            onBlur={() => setRutTouched(true)}
            onKeyDown={(e) => { if (e.key === "Enter" && rutValid) handleShare(); }}
            aria-label="Tu RUT"
            className="w-full h-[48px] rounded-[12px] px-4 text-[15px] font-medium placeholder:font-normal transition-all duration-150 focus:outline-none"
            style={{
              background: "#f4f7fc",
              border: showRutError
                ? "1.5px solid rgba(220,60,50,0.60)"
                : rutValid
                ? "1.5px solid rgba(43,211,245,0.55)"
                : "1px solid rgba(57,45,207,0.15)",
              color: "#08071a",
              paddingRight: rutValid ? "40px" : "16px",
            }}
          />
          {rutValid && (
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] font-bold"
              style={{ color: "#2bd3f5" }} aria-hidden="true">✓</span>
          )}
        </div>
        {showRutError && (
          <p className="text-[11px] mt-1.5" style={{ color: "rgba(220,60,50,0.90)" }}>
            RUT inválido — revisa el dígito verificador
          </p>
        )}
      </div>

      {/* Celular del referido */}
      <div className="mb-4">
        <label className="block text-[12px] font-semibold mb-1.5" htmlFor="phone-input"
          style={{ color: "rgba(255,255,255,0.55)" }}>
          Celular de quien quieres referir
        </label>
        <div className="relative">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
            <span className="text-[13px] font-semibold" style={{ color: "rgba(8,7,26,0.45)" }}>🇨🇱 +56</span>
          </div>
          <input
            id="phone-input"
            type="tel"
            inputMode="numeric"
            placeholder="9 1234 5678"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={() => setPhoneTouched(true)}
            aria-label="Celular de la persona a referir"
            className="w-full h-[48px] rounded-[12px] pl-[72px] text-[15px] font-medium placeholder:font-normal transition-all duration-150 focus:outline-none"
            style={{
              background: "#f4f7fc",
              border: showPhoneError
                ? "1.5px solid rgba(220,60,50,0.60)"
                : phoneValid
                ? "1.5px solid rgba(37,211,102,0.55)"
                : "1px solid rgba(57,45,207,0.15)",
              color: "#08071a",
              paddingRight: phoneValid ? "40px" : "16px",
            }}
          />
          {phoneValid && (
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] font-bold"
              style={{ color: "#25d366" }} aria-hidden="true">✓</span>
          )}
        </div>
        {showPhoneError && (
          <p className="text-[11px] mt-1.5" style={{ color: "rgba(220,60,50,0.90)" }}>
            Ingresa un número válido (8–11 dígitos)
          </p>
        )}

        {/* Botón de contactos — solo en dispositivos que lo soporten */}
        {supportsContacts && (
          <button
            type="button"
            onClick={handlePickContact}
            className="mt-2 w-full flex items-center justify-center gap-2 h-[42px] rounded-[10px] font-semibold text-[13px] transition-all duration-150 active:scale-[0.98]"
            style={{
              background: "rgba(57,45,207,0.12)",
              border: "1px solid rgba(57,45,207,0.25)",
              color: "rgba(43,211,245,0.90)",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
            </svg>
            Elegir desde mis contactos
          </button>
        )}
      </div>

      {/* Preview link */}
      {referralLink && (
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-[9px] mb-4"
          style={{
            background: "rgba(43,211,245,0.07)",
            border: "1px solid rgba(43,211,245,0.18)",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2bd3f5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" aria-hidden="true">
            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
          </svg>
          <p className="flex-1 text-[11px] font-medium truncate" style={{ color: "rgba(255,255,255,0.60)" }}>
            calcula.anclaseguros.cl/#…{rut}
          </p>
          <button type="button" onClick={handleCopyLink}
            className="flex-shrink-0 text-[11px] font-semibold transition-colors"
            style={{ color: copied ? "#2bd3f5" : "rgba(255,255,255,0.40)" }}>
            {copied ? "¡Copiado!" : "Copiar"}
          </button>
        </div>
      )}

      {/* Botones */}
      <div className="flex gap-2.5">
        <button
          type="button"
          onClick={handleShare}
          className="flex-1 flex items-center justify-center gap-2 h-[48px] rounded-[12px] font-semibold text-[14px] transition-all duration-150 active:scale-[0.97]"
          style={{
            background: "linear-gradient(135deg, #25d366, #128c7e)",
            color: "#ffffff",
            boxShadow: "0 4px 16px rgba(37,211,102,0.28)",
            opacity: !rutValid || !phoneValid ? 0.50 : 1,
          }}
          aria-label="Compartir por WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Compartir por WhatsApp
        </button>

        {rutValid && (
          <button
            type="button"
            onClick={handleCopyLink}
            className="flex items-center justify-center gap-1.5 h-[48px] px-4 rounded-[12px] font-semibold text-[13px] transition-all duration-150 active:scale-[0.97] whitespace-nowrap"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: copied ? "#2bd3f5" : "rgba(255,255,255,0.65)",
            }}
          >
            {copied ? (
              <><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>¡Listo!</>
            ) : (
              <><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>Copiar</>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
