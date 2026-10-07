import { about, clinic, whatsappLink } from "../data/clinic";

export default function About() {
  return (
    <section id="sobre" className="bg-sand py-14 md:py-20">
      <div className="container-x grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-[480px] lg:mx-0">
          <div className="absolute -left-4 -top-4 h-[88%] w-[92%] rounded-[2rem] bg-sage" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <img
              src={clinic.images.portrait}
              alt={clinic.name}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-6 left-5 right-5 rounded-2xl bg-beige/95 p-5 shadow-xl backdrop-blur">
            <p className="font-serif text-[1.1rem] text-ink">{clinic.name}</p>
            <p className="text-[12.5px]">{clinic.role}</p>
            <div className="my-3 h-px bg-sand" />
            <p className="text-[11.5px] leading-snug">{about.cardNote}</p>
          </div>
        </div>

        <div className="mt-6 lg:mt-0">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="section-title mt-5">
            Uma trajetória com rigor clínico e <em className="text-rust">sensibilidade</em> humana
          </h2>
          <div className="mt-7 space-y-4 text-[15.5px] leading-[1.7] text-ink/90">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <blockquote className="quote-bar mt-8">“{about.quote}”</blockquote>

          <p className="mt-8 text-[11px] uppercase tracking-[0.18em] text-body">
            {about.badgesTitle}
          </p>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {about.badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-sand bg-beige px-4 py-2 text-[12.5px] text-ink"
              >
                {b}
              </span>
            ))}
          </div>

          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-dark mt-9">
            {about.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
