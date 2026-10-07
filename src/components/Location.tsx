import { clinic, location, whatsappLink } from "../data/clinic";
import Icon from "./Icon";

export default function Location() {
  const a = clinic.address;
  return (
    <section id="localizacao" className="bg-forest py-20 text-cream md:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-sage">{location.eyebrow}</p>
          <h2 className="section-title mt-5 text-cream">
            Comece por uma <em className="text-sage">conversa</em>
          </h2>
          <p className="mt-7 max-w-[32rem] text-[16px] leading-relaxed text-cream/85">
            {location.text}
          </p>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-light mt-8">
            {location.cta}
          </a>

          <div className="mt-10 space-y-6 border-t border-cream/15 pt-8">
            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/20 text-sage">
                <Icon name="pin" className="h-4 w-4" />
              </span>
              <div>
                <h3 className="font-serif text-[1.15rem] text-cream">{location.presencial.title}</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-cream/80">
                  {location.presencial.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/20 text-sage">
                <Icon name="monitor" className="h-4 w-4" />
              </span>
              <div>
                <h3 className="font-serif text-[1.15rem] text-cream">{location.online.title}</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-cream/80">
                  {location.online.text}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-cream text-body">
          <div className="p-7">
            <p className="text-[11px] uppercase tracking-[0.2em] text-rust">{location.mapLabel}</p>
            <h3 className="mt-3 font-serif text-[1.3rem]">
              {a.street}, {a.building.replace("Edifício", "Edifício")}
            </h3>
            <p className="mt-1 text-[12.5px]">
              {a.district} · {a.city}, {a.state} · CEP {a.cep}
            </p>
            <a
              href={a.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-[12.5px] text-terra"
            >
              {location.mapLink} <Icon name="external" className="h-3 w-3" />
            </a>
          </div>
          <iframe
            title="Mapa do consultório"
            src={a.mapsEmbed}
            className="h-[300px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
