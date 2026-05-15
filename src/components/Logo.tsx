import Link from "next/link";

type LogoProps = {
  /** Altura del logo en píxeles (mantiene proporción automáticamente) */
  size?: number;
};

/**
 * Logo oficial Ancla — SVG completo con isotipo + wordmark "ANCLA SEGUROS".
 * Colores embebidos: isotipo cyan/violeta, texto blanco. Diseñado para fondos oscuros.
 */
export default function Logo({ size = 28 }: LogoProps) {
  // Proporción original del SVG: 96.190811mm × 26.247494mm ≈ 3.665:1
  const width = Math.round(size * (96.190811 / 26.247494));

  return (
    <Link
      href="https://anclaseguros.cl"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08071a] rounded-sm transition-opacity hover:opacity-85"
      aria-label="Ancla Seguros — ir al sitio principal"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logos/logo-ancla-full.svg"
        alt="Ancla Seguros"
        width={width}
        height={size}
        style={{ height: size, width: "auto" }}
        draggable={false}
      />
    </Link>
  );
}
