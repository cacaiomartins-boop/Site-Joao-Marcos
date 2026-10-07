import { useEffect, useState } from "react";
import { clinic, nav, whatsappLink } from "../data/clinic";
import Icon from "./Icon";

export default function Header({ solid: forceSolid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = forceSolid || scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-forest/95 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6 md:h-[88px]">
        <a href="/" className="shrink-0 leading-tight text-cream">
          <span className="block font-serif text-[1.15rem] md:text-[1.35rem]">{clinic.name}</span>
          <span className="block text-[9px] uppercase tracking-[0.12em] text-sage sm:text-[10px] sm:tracking-[0.18em]">
            {clinic.roleShort} · {clinic.crp}
          </span>
        </a>

        <nav className="hidden items-center gap-5 whitespace-nowrap text-[14px] text-cream/90 xl:flex xl:gap-6 2xl:gap-8">
          {nav.map((i) => (
            <a key={i.href} href={i.href} className="transition hover:text-white">
              {i.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
          className="btn-light ml-auto hidden shrink-0 whitespace-nowrap !px-6 !py-3 !text-[14px] lg:inline-flex xl:ml-0"
        >
          Agendar Consulta
        </a>

        <button
          className="text-cream xl:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "x" : "menu"} className="h-7 w-7" />
        </button>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-forest xl:hidden">
          <nav className="container-x flex flex-col gap-1 py-4 text-cream">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="border-b border-cream/10 py-3 text-[15px]"
              >
                {i.label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="btn-light mt-4"
            >
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
