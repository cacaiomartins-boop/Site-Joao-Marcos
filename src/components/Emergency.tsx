import { footer, help } from "../data/clinic";
import Icon from "./Icon";

export default function Emergency() {
  const phones = help.items.filter((i) => i.tel);
  const others = help.items.filter((i) => !i.tel);

  return (
    <section id="ajuda" className="bg-beige py-14 md:py-16">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <p className="eyebrow">{help.eyebrow}</p>
            <h2 className="section-title mt-4">
              Precisa de ajuda <em className="text-rust">agora</em>?
            </h2>
            <p className="mt-4 max-w-[30rem] text-[15px] leading-relaxed">{help.intro}</p>
            <p className="mt-3 max-w-[30rem] text-[13px] leading-relaxed text-body/80">
              {footer.crisisText}
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {phones.map((p) => (
                <div key={p.title} className="rounded-2xl bg-forest p-5 text-cream">
                  <a
                    href={`tel:${p.tel}`}
                    className="block font-serif text-[2.6rem] leading-none text-sage"
                  >
                    {p.contact}
                  </a>
                  <p className="mt-2 font-serif text-[1rem] text-cream">{p.title}</p>
                  <p className="mt-1 text-[12.5px] leading-snug text-cream/70">{p.text}</p>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-[12.5px] text-sage"
                    >
                      Acessar site <Icon name="external" className="h-3 w-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>

            <ul className="divide-y divide-sand rounded-2xl border border-sand bg-cream">
              {others.map((o) => (
                <li key={o.title} className="px-5 py-3.5 text-[13px] leading-snug">
                  <span className="font-serif text-[14.5px] text-ink">{o.title}</span>
                  <span className="block text-body">{o.text}</span>
                  {o.href && (
                    <a href={o.href} target="_blank" rel="noreferrer" className="text-rust">
                      Acessar ↗
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {help.emergency.href && (
              <a
                href={help.emergency.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-terra/40 bg-cream p-5"
              >
                <p className="font-serif text-[1.05rem] text-ink">{help.emergency.title}</p>
                <p className="mt-1 text-[13px]">{help.emergency.text}</p>
                <span className="mt-2 inline-block text-[13px] text-rust">Abrir material ↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
