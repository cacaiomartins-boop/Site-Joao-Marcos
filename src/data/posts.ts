// Publicações (blog). Para adicionar um texto novo, copie um item abaixo e preencha.
// - slug: parte do endereço (ex.: "sindrome-do-impostor" -> /publicacoes/sindrome-do-impostor)
// - date: AAAA-MM-DD
// - body: lista de parágrafos
// - link: (opcional) se o texto foi publicado em outro lugar (revista, site), o card abre esse link
// - draft: true = aparece só na prévia local, nunca no site publicado

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
  link?: string;
  source?: string; // ex.: "Revista Ave Maria"
  dateLabel?: string; // sobrescreve a data exibida, ex.: "Maio de 2021"
  draft?: boolean;
};

export const posts: Post[] = [
  {
    slug: "sindrome-do-impostor",
    title: "Síndrome do impostor",
    date: "2021-05-01",
    excerpt: "Reportagem sobre síndrome do impostor publicada na Revista Ave Maria, edição de maio de 2021.",
    body: [],
    link: "https://revistaavemaria.com.br/banca/maio-2021#fb0=62",
    source: "Revista Ave Maria",
    dateLabel: "Maio de 2021",
  },
  {
    slug: "exemplo",
    title: "Exemplo de texto publicado",
    date: "2026-10-06",
    excerpt: "Este é um exemplo para mostrar como as publicações aparecem. Ele não aparece no site publicado.",
    body: [
      "Este é um texto de exemplo, visível apenas na prévia local. Substitua pelos textos reais do João Marcos.",
      "Cada parágrafo é um item da lista body em src/data/posts.ts.",
    ],
    draft: true,
  },
];

export const visiblePosts = posts
  .filter((p) => !p.draft || import.meta.env.DEV)
  .sort((a, b) => b.date.localeCompare(a.date));

export const formatDate = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const postDate = (p: Post) => p.dateLabel ?? formatDate(p.date);
