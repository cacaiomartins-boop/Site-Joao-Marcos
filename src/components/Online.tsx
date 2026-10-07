import { online, whatsappLink } from "../data/clinic";
import Icon from "./Icon";

export default function Online() {
  return (
    <section id="online" className="bg-forest py-20 text-cream md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-[44rem] text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-sage">{online.eyebrow}</p>
          <h2 className="section-title mt-5 text-cream">
            A proximidade da escuta, onde quer que você <em className="text-sage">esteja</em>
          </h2>
          <p className="mt-7 text-[16px] leading-relaxed text-cream/85">{online.text}</p>
        </div>

        <div className="mt-10 grid gap-4 md:mt-12 lg:grid-cols-3 lg:gap-6">
          {online.cards.map((c) => (
            <div key={c.title} className="flex flex-col rounded-3xl border border-sage/30 p-5 md:p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/20 text-sage">
                <Icon name={c.icon} className="h-4 w-4" />
              </span>
              <h3 className="mt-4 font-serif text-[1.2rem] text-cream">{c.title}</h3>
              <p className="mt-3 mb-6 text-[14px] leading-relaxed text-cream/75">{c.text}</p>
              <p className="mt-auto border-t border-sage/25 pt-5 text-[11px] uppercase tracking-[0.12em] text-sage">
                {c.tag}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={whatsappLink("Olá! Gostaria de tirar dúvidas sobre o atendimento online.")}
            target="_blank"
            rel="noreferrer"
            className="btn-light"
          >
            {online.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
