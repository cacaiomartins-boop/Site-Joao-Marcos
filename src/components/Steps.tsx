import { steps } from "../data/clinic";

export default function Steps() {
  return (
    <section id="passo-a-passo" className="bg-forest py-20 text-cream md:py-28">
      <div className="container-x">
        <p className="text-[11px] uppercase tracking-[0.2em] text-sage">{steps.eyebrow}</p>
        <h2 className="section-title mt-5 text-cream">
          O percurso de início com <em className="text-sage">tranquilidade</em>
        </h2>
        <p className="mt-5 max-w-[34rem] text-[16px] leading-relaxed text-cream/85">
          {steps.subtitle}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          {steps.items.map((s, i) => (
            <div key={s.title} className="border-t border-cream/20 pt-6">
              <p className="font-serif text-[1.8rem] text-[#e08b4a]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-[1.15rem] text-cream">{s.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-cream/75">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
