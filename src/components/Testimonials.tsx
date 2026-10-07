import { clinic, testimonials } from "../data/clinic";
import Icon from "./Icon";

export default function Testimonials() {
  const cols = [
    testimonials.items.filter((_, i) => i % 2 === 0),
    testimonials.items.filter((_, i) => i % 2 === 1),
  ];

  const Card = ({ t }: { t: (typeof testimonials.items)[number] }) => (
    <figure className="rounded-3xl bg-cream p-6 md:p-7">
      <div className="flex items-center justify-between text-[12px] text-body">
        <span className="tracking-widest text-sage">★★★★★</span>
        <span>{t.date}</span>
      </div>
      <blockquote className="mt-4 text-[14px] leading-[1.7] text-ink">“{t.text}”</blockquote>
      <figcaption className="mt-5 flex items-center justify-between gap-3 border-t border-sand pt-4">
        <div className="text-[12px] leading-snug">
          <p className="font-serif text-[13px] font-medium tracking-wide text-ink">{t.author}</p>
          <p>{t.detail}</p>
        </div>
        <span className="shrink-0 rounded-full bg-beige px-3 py-1.5 text-center text-[10.5px] leading-tight">
          {testimonials.verified}
        </span>
      </figcaption>
    </figure>
  );

  return (
    <section id="depoimentos" className="bg-sand py-14 md:py-20">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">{testimonials.eyebrow}</p>
          <h2 className="section-title mt-5">
            O que dizem os <em className="block text-rust">pacientes</em>
          </h2>
          <p className="mt-8 text-[15px] tracking-widest text-terra">★★★★★</p>
          <p className="font-serif text-[4.5rem] leading-none text-terra">{clinic.rating}</p>
          <p className="mt-3 text-[11px] uppercase tracking-[0.2em]">
            {clinic.reviewsCount} avaliações no Doctoralia
          </p>
          <p className="mt-7 max-w-[22rem] text-[14.5px] leading-relaxed">{testimonials.intro}</p>
          <div className="mt-8 flex flex-col items-start gap-3">
            {[
              { label: "Doctoralia", href: clinic.doctoraliaUrl },
              { label: "Conexa Saúde", href: clinic.conexaUrl },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="btn-outline !px-6 !py-3 !text-[14px]"
              >
                {testimonials.moreLabel} · {l.label}
                <Icon name="external" className="ml-2 h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 md:hidden">
            {testimonials.items.map((t) => (
              <div key={t.author} className="min-w-[88%] snap-center">
                <Card t={t} />
              </div>
            ))}
          </div>
          <div className="hidden gap-5 md:grid md:grid-cols-2">
            {cols.map((col, ci) => (
              <div key={ci} className={`flex flex-col gap-5 ${ci === 1 ? "md:mt-10" : ""}`}>
                {col.map((t) => (
                  <Card key={t.author} t={t} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
