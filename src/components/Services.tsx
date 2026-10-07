import { services, whatsappLink } from "../data/clinic";
import Icon from "./Icon";

export default function Services() {
  return (
    <section id="atendimento" className="bg-beige py-14 md:py-20">
      <div className="container-x">
        <p className="eyebrow">{services.eyebrow}</p>
        <h2 className="section-title mt-5">
          Formatos de <em className="text-rust">atendimento</em>
        </h2>
        <p className="mt-5 max-w-[34rem] text-[16px] leading-relaxed">{services.subtitle}</p>

        <div className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 md:-mx-6 md:px-6 lg:mx-0 lg:mt-10 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
          {services.items.map((s) => (
            <article
              key={s.title}
              className="flex min-w-[84%] snap-center flex-col rounded-3xl border border-sand border-t-terra bg-cream p-6 [border-top-width:2px] sm:min-w-[46%] lg:min-w-0 lg:p-7"
            >
              <div className="flex items-center justify-between text-[12.5px]">
                <span className="flex items-center gap-2">
                  <Icon name={s.icon} className="h-4 w-4 text-terra" /> {s.mode}
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="clock" className="h-4 w-4 text-body" /> {s.duration}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-[1.3rem]">{s.title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed">{s.text}</p>
              <ul className="mt-6 space-y-2.5 text-[13px]">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-terra" /> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <a
                  href={whatsappLink(`Olá! Gostaria de agendar: ${s.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-dark w-full"
                >
                  {services.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
