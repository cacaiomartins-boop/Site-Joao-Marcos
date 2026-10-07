import { useEffect, useRef } from "react";
import { clinic, hero, whatsappLink } from "../data/clinic";
import Icon from "./Icon";

export default function Hero() {
  const bg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 900);
        if (bg.current) bg.current.style.transform = `translate3d(0, ${y * 0.22}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div ref={bg} className="absolute -inset-y-10 inset-x-0 will-change-transform">
        <img
          src={clinic.images.hero}
          alt=""
          className="h-full w-full animate-kenburns object-cover object-right opacity-60"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/85 to-forest/40" />

      <div className="container-x relative grid gap-10 pb-16 pt-32 md:pb-24 md:pt-44 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div>
          <p className="mb-6 animate-fade-up text-[11px] uppercase tracking-[0.22em] text-sage">
            {hero.eyebrow}
          </p>
          <h1 className="animate-fade-up text-[2.6rem] leading-[1.05] text-cream [animation-delay:150ms] md:text-[4rem]">
            Psicoterapia para <em className="text-sage">compreender</em> e transformar padrões
            emocionais
          </h1>
          <p className="mt-7 max-w-[34rem] animate-fade-up text-[17px] leading-relaxed text-cream/85 [animation-delay:300ms]">
            {hero.subtitle}
          </p>
          <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-x-8 gap-y-4 [animation-delay:450ms]">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-light">
              {hero.primaryCta}
            </a>
            <a href="#abordagem" className="inline-flex items-center gap-2 text-[15px] text-cream">
              {hero.secondaryCta} <Icon name="arrowDown" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:600ms]">
        <aside className="animate-float rounded-3xl bg-beige p-7 text-body shadow-2xl">
          <div className="flex items-center gap-3">
            <span className="text-[13px] tracking-widest text-terra">★★★★★</span>
            <span className="font-serif text-xl text-ink">{clinic.rating} de 5.0</span>
          </div>
          <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-body">
            {clinic.reviewsCount} opiniões verificadas · Doctoralia
          </p>
          <div className="my-5 h-px bg-sand" />
          <ul className="space-y-5">
            {hero.card.map((c) => (
              <li key={c.title} className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sand/60 text-body">
                  <Icon name={c.icon} className="h-4 w-4" />
                </span>
                <div className="text-[12.5px] leading-relaxed">
                  <p className="text-[14px] font-medium text-ink">{c.title}</p>
                  {c.link ? (
                    <a
                      href={clinic.address.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2"
                    >
                      {c.text} ↗
                    </a>
                  ) : (
                    <p>{c.text}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </aside>
        </div>
      </div>
    </section>
  );
}
