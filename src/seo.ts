import { useEffect } from "react";
import { faq } from "./data/clinic";
import { visiblePosts } from "./data/posts";

const SITE = "https://www.joaomarcos.com.br";
const NAME = "João Marcos Barboza";

type Meta = { title: string; description: string; path: string; noindex?: boolean };

function metaFor(path: string): Meta {
  if (path.startsWith("/publicacoes")) {
    const slug = path.split("/")[2];
    if (!slug) {
      return {
        title: `Publicações sobre psicanálise | ${NAME}`,
        description: `Textos e reflexões de ${NAME} sobre psicanálise, sofrimento psíquico e vida contemporânea.`,
        path: "/publicacoes",
      };
    }
    const post = visiblePosts.find((p) => p.slug === slug);
    if (!post) {
      return {
        title: `Texto não encontrado | ${NAME}`,
        description: "O texto procurado não foi encontrado.",
        path: `/publicacoes/${slug}`,
        noindex: true,
      };
    }
    return {
      title: `${post.title} | ${NAME}`,
      description: post.excerpt,
      path: `/publicacoes/${post.slug}`,
    };
  }
  return { title: "", description: "", path: "/" };
}

function setMeta(selector: string, attr: "content" | "href", value: string, create?: () => HTMLElement) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el && create) {
    el = create();
    document.head.appendChild(el);
  }
  el?.setAttribute(attr, value);
}

export function useSeo(path: string) {
  useEffect(() => {
    const m = metaFor(path);
    const url = SITE + (m.path === "/" ? "/" : m.path);

    if (m.path !== "/") {
      document.title = m.title;
      setMeta('meta[name="description"]', "content", m.description);
      setMeta('meta[property="og:title"]', "content", m.title);
      setMeta('meta[property="og:description"]', "content", m.description);
      setMeta('meta[name="twitter:title"]', "content", m.title);
      setMeta('meta[name="twitter:description"]', "content", m.description);
    }
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:url"]', "content", url);

    const robots = document.head.querySelector('meta[name="robots"]');
    if (m.noindex) {
      setMeta('meta[name="robots"]', "content", "noindex", () => {
        const el = document.createElement("meta");
        el.setAttribute("name", "robots");
        return el;
      });
    } else {
      robots?.remove();
    }

    const ldId = "ld-faq";
    document.getElementById(ldId)?.remove();
    if (m.path === "/") {
      const ld = document.createElement("script");
      ld.id = ldId;
      ld.type = "application/ld+json";
      ld.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      });
      document.head.appendChild(ld);
    }
  }, [path]);
}
