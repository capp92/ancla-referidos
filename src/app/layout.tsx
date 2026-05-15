import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Programa de Referidos — Ancla Seguros",
  description:
    "Comparte tu link con conocidos que pagan seguro hipotecario. Si contratan con Ancla, ganas una gift card de Falabella. Sin tope de referidos.",
  openGraph: {
    title: "Recomienda Ancla. Gana tu gift card.",
    description:
      "Refiere a alguien que pague seguro hipotecario. Si contrata con Ancla, ganas hasta $30.000 en gift card Falabella.",
    siteName: "Ancla Seguros",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={plusJakartaSans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
