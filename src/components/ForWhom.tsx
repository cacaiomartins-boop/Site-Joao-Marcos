import { forWhom } from "../data/clinic";

export default function ForWhom() {
  return (
    <section className="bg-beige py-14 md:py-20">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start lg:pr-6">
          <p className="eyebrow">{forWhom.eyebrow}</p>
          <h2 className="section-title mt-5">
            Quando algo se repete e você <em className="text-rust">não entende</em> por quê
          </h2>
          <p className="mt-7 text-[15.5px] leading-relaxed">{forWhom.intro}</p>
          <blockquote className="quote-bar mt-8">“{forWhom.quote}”</blockquote>
        </div>

        <ol>
          {forWhom.items.map((it, i) => (
            <li
              key={it.title}
              className={`py-7 ${i > 0 ? "border-t border-sand" : ""} ${i === 0 ? "pt-0" : ""}`}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-[1.7rem] text-terra">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-[1.35rem]">{it.title}</h3>
              </div>
              <p className="mt-2 pl-[3.25rem] text-[15px] leading-relaxed">{it.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
