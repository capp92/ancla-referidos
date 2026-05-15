/**
 * Mock visual de WhatsApp — tema claro, compacto y horizontal.
 * Muestra cómo se ve el mensaje de referido que un cliente le envía a un amigo.
 */
export default function WhatsAppPreview() {
  return (
    <div
      className="relative w-full animate-float"
      style={{
        filter:
          "drop-shadow(0 20px 48px rgba(8,7,26,0.32)) drop-shadow(0 4px 12px rgba(57,45,207,0.10))",
      }}
    >
      <div
        className="rounded-[20px] overflow-hidden"
        style={{ border: "1px solid rgba(0,0,0,0.07)" }}
        role="img"
        aria-label="Vista previa de mensaje de WhatsApp con el link de referido"
      >
        {/* Header verde WhatsApp */}
        <div
          className="flex items-center gap-2.5 px-4 py-2.5"
          style={{ background: "#075e54" }}
        >
          <div
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold text-white"
            style={{ background: "#128c7e" }}
            aria-hidden="true"
          >
            P
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-semibold text-white leading-tight">Pablo</div>
            <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.72)" }}>en línea</div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.23 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
        </div>

        {/* Chat — fondo beige WhatsApp */}
        <div
          className="px-3 py-3 space-y-2"
          style={{ background: "#e5ddd5" }}
        >
          {/* Recibido */}
          <div className="flex">
            <div
              className="max-w-[78%] px-3 py-1.5 rounded-[10px] rounded-tl-[4px]"
              style={{ background: "#ffffff", color: "#111b21" }}
            >
              <p className="text-[12px] leading-snug">Oye, ¿qué es esto? 😅</p>
              <p className="text-[9.5px] text-right mt-0.5" style={{ color: "rgba(0,0,0,0.40)" }}>10:23</p>
            </div>
          </div>

          {/* Enviado — mensaje de referido compacto */}
          <div className="flex justify-end">
            <div
              className="max-w-[92%] px-3 py-2 rounded-[10px] rounded-tr-[4px]"
              style={{ background: "#d9fdd3", color: "#111b21" }}
            >
              <p className="text-[12px] font-medium mb-1 leading-snug">
                ¡Llevo 1 año con Ancla y bajé mi dividendo! 🏠
              </p>
              <p className="text-[11.5px] mb-1.5 leading-snug" style={{ color: "#3b4a54" }}>
                Cambian tu seguro hipotecario por uno más barato — misma cobertura, sin trámites.
              </p>
              <p className="text-[11px]" style={{ color: "#3b4a54" }}>📉 25–40% menos · 💰 $300K/año · 🛡️ CMF</p>

              {/* Link preview */}
              <div className="mt-1.5 rounded-[6px] overflow-hidden" style={{ background: "rgba(0,0,0,0.055)" }}>
                <div className="h-[3px]" style={{ background: "#25d366" }} />
                <div className="px-2 py-1">
                  <p className="text-[11px] font-semibold" style={{ color: "#111b21" }}>Cotiza gratis 👉 calcula.anclaseguros.cl</p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-1 mt-1">
                <span className="text-[9.5px]" style={{ color: "rgba(0,0,0,0.45)" }}>10:24</span>
                <svg width="13" height="9" viewBox="0 0 18 11" fill="none" aria-hidden="true">
                  <path d="M2 6l3 3 7-7M9 9l7-7" stroke="#53bdeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Respuesta */}
          <div className="flex">
            <div
              className="max-w-[80%] px-3 py-1.5 rounded-[10px] rounded-tl-[4px]"
              style={{ background: "#ffffff", color: "#111b21" }}
            >
              <p className="text-[12px] leading-snug">Uf, eso es mucho ahorro 👀 ¡lo cotizo!</p>
              <p className="text-[9.5px] text-right mt-0.5" style={{ color: "rgba(0,0,0,0.40)" }}>10:26</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
