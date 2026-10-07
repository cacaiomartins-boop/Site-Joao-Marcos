import { help } from "../data/clinic";
import Icon from "./Icon";

export default function Help() {
  return (
    <section id="ajuda" className="bg-beige py-20 md:py-28">
      <div className="container-x">
        <p className="eyebrow">{help.eyebrow}</p>
        <h2 className="section-title mt-5">
          Precisa de ajuda <em className="text-rust">agora</em>?
        </h2>
        <p className="mt-6 max-w-[38rem] text-[16px] leading-relaxed">{help.intro}</p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {help.items.map((it) => (
            <div key={it.title} className="flex flex-col rounded-3xl border border-sand bg-cream p-7">
              <h3 className="font-serif text-[1.15rem]">{it.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed">{it.text}</p>
              {(it.contact || it.href) && (
                <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
                  {it.tel && (
                    <a
                      href={`tel:${it.tel}`}
                      className="font-serif text-[1.8rem] leading-none text-terra"
                    >
                      {it.contact}
                    </a>
                  )}
                  {it.href && (
                    <a
                      href={it.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[13px] text-rust"
                    >
                      Acessar site <Icon name="external" className="h-3 w-3" />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}

          {help.emergency.href && (
            <a
              href={help.emergency.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col rounded-3xl bg-forest p-7 text-cream"
            >
              <h3 className="font-serif text-[1.15rem] text-cream">{help.emergency.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-cream/80">{help.emergency.text}</p>
              <span className="mt-auto pt-6 text-[13px] text-sage">Abrir material ↗</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
