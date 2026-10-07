import { trustBar } from "../data/clinic";
import Icon from "./Icon";

export default function TrustBar() {
  return (
    <section className="border-b border-sand/70 bg-cream">
      <div className="container-x grid grid-cols-1 gap-6 py-9 sm:grid-cols-2 lg:grid-cols-4">
        {trustBar.map((t) => (
          <div key={t.title} className="flex items-center gap-4">
            <Icon name={t.icon} className="h-6 w-6 shrink-0 text-body" />
            <div>
              <p className="text-[14px] font-medium text-ink">{t.title}</p>
              <p className="text-[12.5px] text-body">{t.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
