/**
 * Mock visual de WhatsApp — tema claro, mostrando cómo se ve el mensaje
 * de referido que un cliente le envía a un amigo.
 */
export default function WhatsAppPreview() {
  return (
    <div
      className="relative w-full max-w-[340px] mx-auto animate-float"
      style={{
        filter:
          "drop-shadow(0 24px 48px rgba(8,7,26,0.28)) drop-shadow(0 6px 16px rgba(57,45,207,0.10))",
      }}
    >
      {/* Glow sutil detrás */}
      <div
        className="absolute inset-0 -z-10 rounded-[28px] opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(57,45,207,0.35) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <div
        className="rounded-[24px] overflow-hidden"
        style={{ border: "1px solid rgba(0,0,0,0.08)" }}
        role="img"
        aria-label="Vista previa de mensaje de WhatsApp con el link de referido"
      >
        {/* Header WhatsApp verde */}
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{ background: "#075e54" }}
        >
          {/* Avatar del contacto */}
          <div
            className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-bold text-white"
            style={{ background: "#128c7e" }}
            aria-hidden="true"
          >
            P
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[14px] font-semibold text-white leading-tight">
              Pablo
            </div>
            <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.72)" }}>
              en línea
            </div>
          </div>
          {/* Ícono teléfono */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.80)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.23 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
        </div>

        {/* Chat — fondo beige claro WhatsApp */}
        <div
          className="px-3 py-4 space-y-2"
          style={{
            background: "#e5ddd5",
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b3a89e' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        >
          {/* Burbuja recibida — el amigo pregunta */}
          <div className="flex">
            <div
              className="max-w-[82%] px-3 py-2 rounded-[10px] rounded-tl-[4px] text-[12.5px] leading-snug"
              style={{ background: "#ffffff", color: "#111b21" }}
            >
              <p>Oye! Me mandaste algo raro 😅</p>
              <p className="text-[10px] mt-1 text-right" style={{ color: "rgba(0,0,0,0.40)" }}>
                10:23
              </p>
            </div>
          </div>

          {/* Burbuja enviada — el mensaje de referido */}
          <div className="flex justify-end">
            <div
              className="max-w-[90%] px-3 py-2.5 rounded-[10px] rounded-tr-[4px] text-[12px] leading-snug"
              style={{ background: "#d9fdd3", color: "#111b21" }}
            >
              <p className="font-medium mb-1.5">¡Hola! ¿Tienes un crédito hipotecario?</p>
              <p className="mb-2" style={{ color: "#3b4a54" }}>
                Yo llevo más de 1 año con Ancla y me bajaron el dividendo mensual. Cambian tu seguro hipotecario por uno más barato — misma cobertura, sin trámites.
              </p>
              <p style={{ color: "#3b4a54" }}>📉 25–40% menos al año</p>
              <p style={{ color: "#3b4a54" }}>💰 $300.000 de ahorro promedio</p>
              <p style={{ color: "#3b4a54" }}>🛡️ 100% legal, CMF</p>

              {/* Link preview */}
              <div
                className="mt-2 rounded-[6px] overflow-hidden text-[11px]"
                style={{ background: "rgba(0,0,0,0.06)" }}
              >
                <div
                  className="h-1"
                  style={{ background: "#25d366" }}
                />
                <div className="px-2 py-1.5">
                  <p className="font-semibold" style={{ color: "#111b21" }}>
                    Cotiza tu ahorro gratis 👇
                  </p>
                  <p className="truncate" style={{ color: "#667781" }}>
                    calcula.anclaseguros.cl
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-1 mt-1.5">
                <span className="text-[10px]" style={{ color: "rgba(0,0,0,0.45)" }}>
                  10:24
                </span>
                {/* Doble check azul — leído */}
                <svg width="14" height="10" viewBox="0 0 18 11" fill="none" aria-hidden="true">
                  <path d="M2 6l3 3 7-7M9 9l7-7" stroke="#53bdeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Respuesta del amigo */}
          <div className="flex pt-0.5">
            <div
              className="max-w-[75%] px-3 py-2 rounded-[10px] rounded-tl-[4px] text-[12.5px] leading-snug"
              style={{ background: "#ffffff", color: "#111b21" }}
            >
              <p>Uf, eso es harto ahorro 👀 lo cotizo!</p>
              <p className="text-[10px] mt-1 text-right" style={{ color: "rgba(0,0,0,0.40)" }}>
                10:26
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
