import Logo from "./Logo";
import Icon from "./Icon";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const PROGRAM_LINKS: FooterLink[] = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "¿Cuánto ganas?", href: "#incentivos" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Cotiza tu ahorro", href: "https://calcula.anclaseguros.cl/#utm_source=referido&utm_medium=19.524.801-K&utm_campaign=+56987928738", external: true },
];

const CONTACT_LINKS: FooterLink[] = [
  { label: "WhatsApp", href: "https://wa.me/56987928738", external: true },
  { label: "hola@anclaseguros.cl", href: "mailto:hola@anclaseguros.cl" },
  { label: "anclaseguros.cl", href: "https://anclaseguros.cl", external: true },
];

function FooterLinkItem({ link }: { link: FooterLink }) {
  const isExternal = link.external ?? /^https?:\/\//.test(link.href);
  return (
    <a
      href={link.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="text-[14px] transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:underline"
      style={{ color: "rgba(255,255,255,0.50)" }}
    >
      {link.label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      className="pt-16 md:pt-20 pb-10"
      style={{
        background: "var(--ancla-bg-dark)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 md:gap-12 mb-12">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Logo size={28} />
            <p
              className="text-[14px] leading-relaxed max-w-[280px]"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              Corredora de seguros hipotecarios. Cambia tu seguro, paga menos, sin complicarte.
            </p>
            <div
              className="inline-flex items-center gap-2 text-[12px] font-medium mt-2"
              style={{ color: "rgba(43,211,245,0.85)" }}
            >
              <Icon name="shield-check" size={14} />
              Regulado CMF · NCG 469
            </div>
          </div>

          {/* Program links */}
          <div>
            <h3
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-5"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              Programa
            </h3>
            <ul className="flex flex-col gap-3">
              {PROGRAM_LINKS.map((link) => (
                <li key={link.label}>
                  <FooterLinkItem link={link} />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-5"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              Contacto
            </h3>
            <ul className="flex flex-col gap-3">
              {CONTACT_LINKS.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <Icon
                    name={link.label === "WhatsApp" ? "whatsapp" : link.label.includes("@") ? "mail" : "arrow-right"}
                    size={14}
                    className="opacity-40"
                  />
                  <FooterLinkItem link={link} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{ height: "1px", background: "rgba(255,255,255,0.06)" }}
          aria-hidden="true"
        />

        {/* Legal */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6">
          <p
            className="text-[11px] leading-relaxed max-w-xl"
            style={{ color: "rgba(255,255,255,0.32)" }}
          >
            Ancla Seguros SpA · RUT 77.XXX.XXX-X · Regulado por la Comisión para el Mercado Financiero (CMF) bajo NCG 469.
            Los montos de ahorro son referenciales y dependen del valor asegurado de cada propiedad.
          </p>
          <p
            className="text-[11px] flex-shrink-0"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            © {new Date().getFullYear()} Ancla Seguros
          </p>
        </div>
      </div>
    </footer>
  );
}
