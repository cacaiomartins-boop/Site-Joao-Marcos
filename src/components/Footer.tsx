import { clinic, footer, footerNav } from "../data/clinic";

export default function Footer() {
  const a = clinic.address;
  return (
    <footer className="bg-forest pb-6 pt-10 text-cream/80">
      <div className="container-x">
        <div className="grid gap-6 text-[13px] leading-relaxed md:grid-cols-3 md:gap-10">
          <div>
            <p className="font-serif text-[1.25rem] text-cream">{clinic.name}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-sage">
              {footer.tagline}
            </p>
            <p className="mt-2 text-[12.5px]">Registro {clinic.crp} ativo</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-sage">
              {footer.presencialTitle}
            </p>
            <p className="mt-2">
              Rua Paul Harris 512, {a.building} · {a.district}, {a.city} - {a.state}{" "}
              <a href={a.mapsUrl} target="_blank" rel="noreferrer" className="text-sage">
                {footer.mapLink} ↗
              </a>
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-sage">{footer.onlineTitle}</p>
            <p className="mt-2">{footer.onlineText}</p>
          </div>
        </div>

        <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-cream/15 pt-5 text-[12.5px]">
          {footerNav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="transition hover:text-white"
              {...(n.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {n.label}
              {n.href.startsWith("http") && " ↗"}
            </a>
          ))}
        </nav>

        <div className="mt-4 flex flex-col gap-1 text-[11.5px] text-cream/55 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} · {clinic.name} · {clinic.crp}
          </p>
          <p className="font-serif italic">“{footer.motto}”</p>
        </div>
      </div>
    </footer>
  );
}
