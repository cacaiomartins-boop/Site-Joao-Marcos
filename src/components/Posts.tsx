import { clinic, whatsappLink } from "../data/clinic";
import { postDate, visiblePosts, type Post } from "../data/posts";

function PostCard({ p, wide = false }: { p: Post; wide?: boolean }) {
  const meta = (
    <div className="flex flex-wrap items-center gap-3 text-[12px]">
      {p.source && (
        <span className="rounded-full bg-forest px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-cream">
          {p.source}
        </span>
      )}
      <span className="text-body">
        {postDate(p)}
        {p.draft && " · exemplo"}
      </span>
    </div>
  );
  const cta = (
    <span className="text-[13.5px] font-medium text-rust">
      {p.link ? `Ler${p.source ? ` na ${p.source}` : ""} ↗` : "Ler texto →"}
    </span>
  );

  return (
    <a
      href={p.link ?? `/publicacoes/${p.slug}`}
      {...(p.link ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`group rounded-3xl border border-sand bg-beige p-7 transition hover:-translate-y-1 hover:shadow-lg md:p-8 ${
        wide ? "md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14 lg:p-10" : "flex flex-col"
      }`}
    >
      <div>
        {meta}
        <h3 className={`mt-5 font-serif leading-snug text-ink ${wide ? "text-[1.8rem] md:text-[2.3rem]" : "text-[1.4rem]"}`}>
          {p.title}
        </h3>
      </div>
      <div className={wide ? "mt-4 lg:mt-0" : "mt-3 flex flex-1 flex-col"}>
        <p className={`leading-relaxed ${wide ? "text-[16px]" : "text-[14.5px]"}`}>{p.excerpt}</p>
        <div className={wide ? "mt-5" : "mt-auto pt-6"}>{cta}</div>
      </div>
    </a>
  );
}

export function PostsPage() {
  const list = visiblePosts;
  return (
    <section className="bg-cream pb-20 pt-32 md:pt-40">
      <div className="container-x">
        <p className="eyebrow">Publicações</p>
        <h1 className="section-title mt-5 max-w-[36rem]">
          Textos e <em className="text-rust">reflexões</em>
        </h1>
        <p className="mt-6 max-w-[34rem] text-[16px] leading-relaxed">
          Artigos e escritos de {clinic.name} sobre psicanálise, sofrimento psíquico e vida
          contemporânea.
        </p>

        {list.length === 0 ? (
          <p className="mt-12 rounded-3xl border border-sand bg-beige p-8 text-[15px]">
            Em breve, novos textos por aqui.
          </p>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <PostCard key={p.slug} p={p} wide={list.length === 1 || (list.length % 3 === 1 && i === 0)} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function PostPage({ slug }: { slug: string }) {
  const post = visiblePosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="bg-cream pb-24 pt-32 md:pt-40">
        <div className="container-x">
          <h1 className="section-title">Texto não encontrado</h1>
          <a href="/publicacoes" className="btn-dark mt-8">
            Ver todas as publicações
          </a>
        </div>
      </section>
    );
  }

  return (
    <article className="bg-cream pb-24 pt-32 md:pt-40">
      <div className="container-x max-w-[760px]">
        <a href="/publicacoes" className="text-[13px] text-rust">
          ← Todas as publicações
        </a>
        <p className="mt-8 text-[12px] text-body">{postDate(post)}</p>
        <h1 className="mt-3 font-serif text-[2.2rem] leading-[1.1] md:text-[3rem]">{post.title}</h1>
        <div className="mt-10 space-y-5 text-[17px] leading-[1.8] text-ink/90">
          {post.body.map((par, i) => (
            <p key={i}>{par}</p>
          ))}
        </div>
        <div className="mt-14 rounded-3xl bg-beige p-8">
          <p className="font-serif text-[1.3rem] text-ink">Quer conversar sobre isso?</p>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-dark mt-5">
            Agendar uma conversa
          </a>
        </div>
      </div>
    </article>
  );
}

export function PostsTeaser() {
  const latest = visiblePosts.filter((p) => !p.draft).slice(0, 4);
  if (latest.length === 0) return null;
  return (
    <section id="publicacoes" className="bg-cream py-14 md:py-20">
      <div className="container-x grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow">Publicações</p>
          <h2 className="section-title mt-5">
            Textos e <em className="text-rust">reflexões</em>
          </h2>
          <p className="mt-6 max-w-[28rem] text-[15.5px] leading-relaxed">
            Artigos e escritos de {clinic.name} sobre psicanálise, sofrimento psíquico e vida
            contemporânea.
          </p>
          <a href="/publicacoes" className="btn-outline mt-7 !px-7 !py-3">
            Ver todas as publicações
          </a>
        </div>

        <div className={`grid gap-5 ${latest.length > 1 ? "md:grid-cols-2" : ""}`}>
          {latest.map((p) => (
            <PostCard key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
