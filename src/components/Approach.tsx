import { approach, clinic } from "../data/clinic";
import Icon from "./Icon";

export default function Approach() {
  return (
    <section id="abordagem" className="bg-cream py-14 md:py-20">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="eyebrow">{approach.eyebrow}</p>
            <h2 className="section-title mt-5 max-w-[34rem]">
              Clareza também é uma forma de <em className="text-rust">cuidado</em>.
            </h2>
            <p className="mt-7 max-w-[36rem] text-[15.5px] leading-[1.7]">{approach.paragraph}</p>
            <blockquote className="quote-bar mt-8 max-w-[36rem] not-italic">
              {approach.quote}
            </blockquote>
          </div>
          <figure>
            <img
              src={clinic.images.office}
              alt="Consultório em Indaiatuba"
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
            <figcaption className="mt-3 text-right text-[11px] tracking-wide text-ink">
              {approach.officeCaption}
            </figcaption>
          </figure>
        </div>

        <div className="mt-12 grid gap-8 border-y border-sand py-10 md:grid-cols-3 md:gap-10">
          {approach.pillars.map((p) => (
            <div key={p.title}>
              <p className="font-serif text-[1.6rem] text-terra">{p.numeral}</p>
              <h3 className="mt-4 font-serif text-[1.2rem]">{p.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="flex flex-col rounded-3xl bg-forest p-7 text-cream md:p-9">
            <p className="text-[11px] uppercase tracking-[0.2em] text-sage">
              {approach.change.eyebrow}
            </p>
            <h3 className="mt-4 font-serif text-[1.5rem] text-cream">{approach.change.title}</h3>
            <ul className="mt-6 flex flex-1 flex-col justify-between gap-4">
              {approach.change.items.map((i) => (
                <li key={i} className="flex gap-3 font-serif text-[15px] text-cream/95">
                  <Icon name="tick" className="mt-1 h-4 w-4 shrink-0 text-sage" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-sand bg-beige p-7 md:p-9">
            <p className="text-[11px] uppercase tracking-[0.2em] text-rust">
              {approach.notThis.eyebrow}
            </p>
            <h3 className="mt-4 font-serif text-[1.5rem]">{approach.notThis.title}</h3>
            <ul className="mt-6 space-y-4">
              {approach.notThis.items.map((i) => (
                <li key={i} className="flex gap-3 text-[15px]">
                  <Icon name="x" className="mt-1 h-4 w-4 shrink-0 text-terra" />
                  {i}
                </li>
              ))}
            </ul>
            <div className="my-6 h-px bg-sand" />
            <p className="text-[12.5px] leading-relaxed">{approach.notThis.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
