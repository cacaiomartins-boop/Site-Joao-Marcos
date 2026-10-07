import { useState } from "react";
import { faq, whatsappLink } from "../data/clinic";
import Icon from "./Icon";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="duvidas" className="bg-beige py-14 md:py-20">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">{faq.eyebrow}</p>
          <h2 className="section-title mt-5">
            Perguntas <em className="text-rust">frequentes</em>
          </h2>
          <p className="mt-7 max-w-[26rem] text-[15.5px] leading-relaxed">{faq.intro}</p>
          <a
            href={whatsappLink("Olá! Tenho uma dúvida.")}
            target="_blank"
            rel="noreferrer"
            className="btn-outline mt-8 !px-8 !py-3"
          >
            {faq.cta}
          </a>
        </div>

        <div className="space-y-4">
          {faq.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-3xl border border-sand bg-cream">
                <button
                  className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-serif text-[1.1rem] text-ink">{f.q}</span>
                  <Icon name={isOpen ? "x" : "plus"} className="h-4 w-4 shrink-0 text-rust" />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mx-7 border-t border-sand pb-6 pt-5 text-[15px] leading-relaxed">
                      {f.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
