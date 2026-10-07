// Todos os textos, preços, links e imagens do site ficam aqui.
// Edite este arquivo para mudar o conteúdo sem mexer nos componentes.

export const clinic = {
  name: "João Marcos Barboza",
  role: "Psicólogo Clínico & Psicanalista",
  roleShort: "Psicólogo e Psicanalista",
  sessionPrice: "R$ 170",
  crp: "CRP SP 06/162571",
  crpNumber: "06/162571",

  // WhatsApp (somente números, com 55 + DDD)
  whatsapp: "5564981141829",
  whatsappMessage: "Olá, João Marcos! Gostaria de agendar uma consulta.",

  // TROCAR pelos links reais dos perfis
  doctoraliaUrl:
    "https://www.doctoralia.com.br/joao-marcos-barboza/psicologo-psicanalista/indaiatuba#address-id=1055594&is-online-only=true&filters%5Bspecializations%5D%5B%5D=75&filters%5Bonline_only%5D%5B%5D=true",
  linktreeUrl: "https://linktr.ee/joaomarcosbarboza",
  conexaUrl: "https://www.conexasaude.com.br/psicologia-clinica/joao-barboza",
  rating: "5.0",
  reviewsCount: 25,

  address: {
    building: "Edifício Office Center II",
    street: "Rua Paul Harris 512",
    district: "Cidade Nova I",
    city: "Indaiatuba",
    state: "SP",
    cep: "13334-070",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+Paul+Harris+512+Cidade+Nova+I+Indaiatuba+SP",
    mapsEmbed:
      "https://www.google.com/maps?q=Rua+Paul+Harris+512,+Cidade+Nova+I,+Indaiatuba,+SP&output=embed",
  },

  images: {
    hero: "/img/consultorio.jpg",
    portrait: "/img/joao-marcos.jpg",
    office: "/img/consultorio.jpg",
  },
};

export const whatsappLink = (message: string = clinic.whatsappMessage) =>
  `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;

export const nav = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Abordagem", href: "/#abordagem" },
  { label: "Atendimento", href: "/#atendimento" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Dúvidas", href: "/#duvidas" },
  { label: "Publicações", href: "/publicacoes" },
];

export const footerNav = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Abordagem", href: "/#abordagem" },
  { label: "Passo a passo", href: "/#passo-a-passo" },
  { label: "Modalidades", href: "/#atendimento" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Dúvidas", href: "/#duvidas" },
  { label: "Publicações", href: "/publicacoes" },
  { label: "Emergência", href: "/#ajuda" },
  { label: "Localização", href: "/#localizacao" },
  { label: "Linktree", href: "https://linktr.ee/joaomarcosbarboza" },
];

export const hero = {
  eyebrow: "Acolhimento · Presencial & Online",
  subtitle:
    "Espaço de escuta analítica e conexão humana em Indaiatuba e teleconsulta para todo o Brasil. Um trabalho focado no detalhe de cada história sem fórmulas prontas.",
  primaryCta: "Marcar primeira sessão",
  secondaryCta: "Conhecer a abordagem",
  card: [
    {
      icon: "pin",
      title: "Consultório Presencial",
      text: "Edifício Office Center II · Rua Paul Harris 512, Cidade Nova I, Indaiatuba",
      link: true,
    },
    {
      icon: "monitor",
      title: "Teleconsulta Online",
      text: "Para jovens, adultos e idosos em todo o Brasil e brasileiros no exterior.",
    },
    {
      icon: "badge",
      title: "Registro Profissional Ativo",
      text: "CRP SP 06/162571 · Conselho Regional de Psicologia de São Paulo",
    },
  ],
};

export const trustBar = [
  { icon: "badge", title: "Registro CRP SP", text: "06/162571 Ativo" },
  { icon: "star", title: "Nota 5.0 Estrelas", text: "25 opiniões no Doctoralia" },
  { icon: "pin", title: "Consultório Físico", text: "Cidade Nova I, Indaiatuba" },
  { icon: "monitor", title: "Atendimento Online", text: "Brasil e exterior via vídeo" },
];

export const forWhom = {
  eyebrow: "01 — Para quem é",
  intro:
    "A clínica psicanalítica acolhe o sofrimento psíquico singular. Não se trata de seguir manuais prontos de comportamento, mas de investigar o que está por trás das angústias, dores e bloqueios do cotidiano.",
  quote:
    "Valorizar os detalhes de cada história humana fazendo do encontro um a um transformações de dentro para fora.",
  items: [
    {
      title: "Ansiedade e Angústia Constante",
      text: "Sensação frequente de aceleração, preocupação desmedida com o futuro, tensão muscular e aquela sensação contínua de aperto no peito sem causa aparente.",
    },
    {
      title: "Depressão e Falta de Sentido",
      text: "Desânimo prolongado, esgotamento psíquico, perda de interesse nas atividades antes prazerosas e uma sensação profunda de vazio ou paralisia.",
    },
    {
      title: "Dificuldades nos Relacionamentos",
      text: "Padrões repetitivos em vínculos afetivos, dependência emocional, medo de rejeição ou conflitos recorrentes na convivência com parceiros e família.",
    },
    {
      title: "Estresse e Sobrecarga Emocional",
      text: "Pressões do trabalho, exaustão física e mental, dificuldade em estabelecer limites e irritabilidade decorrente de rotinas exaustivas.",
    },
    {
      title: "Traumas Psicológicos e Bloqueios",
      text: "Marcas de acontecimentos dolorosos do passado que continuam operando no presente através de medos, inibições ou crises súbitas de pânico.",
    },
    {
      title: "Processos de Luto e Transições",
      text: "Enfrentamento de perdas de entes queridos, términos de relações, mudanças de país ou cidade e reconfigurações complexas de projeto de vida.",
    },
  ],
};

export const about = {
  eyebrow: "02 — Sobre mim",
  paragraphs: [
    "Sou psicólogo clínico e Psicanalista, graduado pela Universidade Federal de Goiás (UFG) e pós-graduado em psicanálise e sintomas contemporâneos pela PUC. Atendo adultos em clínica presencial em Indaiatuba e no ambiente online para todo o Brasil e brasileiros no exterior. Meu ofício é a conexão e o encontro humano.",
    "Aprimoro desde 2014 minha atuação com a psicanálise, abordagem na qual acredito por valorizar os detalhes de cada história humana. Fazemos do encontro um a um transformações de dentro para fora através da escuta e da fala, proporcionando melhorias com a vida vivida, sem imposição de manuais ou receitas de conduta.",
    "Oferecer suporte e contribuir para a construção de uma vida mais satisfatória me envolve e me cativa. Se você sentir o desejo de iniciar um percurso psicanalítico, meu papel será te ajudar a sustentar essa investigação com ética e cuidado.",
  ],
  quote:
    "A escuta analítica não desafia a necessidade de ultrapassar limites, mas ajuda a reconhecer o tamanho correto das coisas e das opiniões sobre nós.",
  badgesTitle: "Formação & Especializações",
  badges: [
    "Pós-Graduação Clínica Psicanalítica (PUC)",
    "Graduação em Psicologia (UFG)",
    "Psicanálise Lacaniana (Unicamp)",
    "Psicanálise, Gênero e Sexualidade (USP)",
    "Estudos Psicanalíticos (ACP Campinas)",
  ],
  cardNote: "Pós-graduado em Psicanálise e Sintomas Contemporâneos · PUC",
  cta: "Agendar uma conversa",
};

export const approach = {
  eyebrow: "03 — Como trabalho",
  paragraph:
    "O processo analítico funciona pela livre associação e pela fala sem censura. Não existem temas proibidos, pensamentos errados ou julgamentos morais. É na articulação da sua própria voz que os nós emocionais se desatam.",
  quote:
    "Sem cartilhas pré-moldadas: cada sessão respeita o tempo, a linguagem e a subjetividade singular do sujeito.",
  officeCaption: "Consultório — Indaiatuba, SP",
  pillars: [
    {
      numeral: "i.",
      title: "Escuta Analítica e Atenta",
      text: "Uma atenção suspensa voltada aos detalhes da narrativa, às repetições e aos lapsos, revelando o que opera além da consciência imediata.",
    },
    {
      numeral: "ii.",
      title: "Investigação Singular",
      text: "Reconhecimento da história pessoal sem encaixar você em categorias rasas. A psicanálise questiona o sofrimento para abrir novos sentidos.",
    },
    {
      numeral: "iii.",
      title: "Sustentação do Desejo",
      text: "Construção gradual de autonomia e maturidade psíquica para tomar decisões, flexibilizar cobranças e posicionar-se com mais firmeza na própria vida.",
    },
  ],
  change: {
    eyebrow: "Transformação",
    title: "O que costuma mudar",
    items: [
      "Compreensão genuína da origem de sintomas e ansiedades.",
      "Interrupção de ciclos destrutivos nos relacionamentos.",
      "Ressignificação de cobranças internas e limites pessoais.",
      "Maior estabilidade e serenidade para lidar com frustrações.",
    ],
  },
  notThis: {
    eyebrow: "Rigor ético",
    title: "O que este trabalho não é",
    items: [
      'Não é aconselhamento diretivo nem manual de "faça isso ou aquilo".',
      "Não faz promessas milagrosas de cura em número fixo de dias.",
      "Não utiliza jargões desnecessários nem técnicas motivacionais rasas.",
    ],
    note: "Este trabalho faz sentido para quem busca um processo aprofundado de autoconhecimento e responsabilidade sobre a própria existência.",
  },
};

export const steps = {
  eyebrow: "04 — Passo a passo",
  subtitle: "Como funciona desde a primeira mensagem até o desenvolvimento do tratamento.",
  items: [
    {
      title: "Primeiro contato",
      text: "Envio de mensagem para tirar dúvidas preliminares e checar a compatibilidade de agenda para atendimento presencial ou online.",
    },
    {
      title: "Horário e formato",
      text: "Definição da modalidade mais adequada à sua rotina (no consultório em Indaiatuba ou por videochamada segura).",
    },
    {
      title: "Primeira sessão",
      text: "Encontro inicial para acolher a queixa principal, conhecer sua história e alinhar o funcionamento das análises. Duração de aproximadamente 45 minutos.",
    },
    {
      title: "Continuidade",
      text: "Estabelecimento da frequência semanal das sessões, preservando a constância necessária para a elaboração psíquica contínua.",
    },
  ],
};

export const services = {
  eyebrow: "05 — Modalidades de atendimento",
  subtitle: "Serviços particulares estruturados com atenção aos detalhes do perfil no Doctoralia.",
  items: [
    {
      icon: "pin",
      mode: "Presencial",
      duration: "45 min",
      title: "Primeira Consulta Presencial",
      text: "Atendimento individual no consultório em Indaiatuba, em ambiente preparado para escuta e sigilo absoluto.",
      bullets: [
        "Público: Adultos e jovens",
        "Edifício Office Center II, Indaiatuba",
        "Emissão de recibo para reembolso",
      ],
    },
    {
      icon: "monitor",
      mode: "Online",
      duration: "45 min",
      title: "Primeira Consulta Online",
      text: "Sessão por videochamada diretamente para o seu espaço, com o mesmo rigor ético e profundidade do presencial.",
      bullets: [
        "Público: Jovens, adultos e idosos",
        "Disponível para todo o território nacional",
        "Emissão de recibo para reembolso",
      ],
    },
    {
      icon: "globe",
      mode: "Exterior",
      duration: "45 min",
      title: "Psicanálise para o Exterior",
      text: "Atendimento em língua materna para brasileiros residentes fora do país, com flexibilidade de fusos horários.",
      bullets: [
        "Público: Brasileiros expatriados",
        "Sessões conduzidas em Português",
        "Pagamento facilitado",
      ],
    },
  ],
  cta: "Agendar",
};

export const testimonials = {
  eyebrow: "06 — Depoimentos reais",
  intro:
    "Avaliações autênticas registradas na plataforma Doctoralia por pacientes que realizaram consultas presenciais ou online.",
  items: [
    {
      date: "1 de outubro de 2026",
      text: "Um excelente profissional! O Psicólogo e Psicanalista João Marcos se mostrou aberto, compreensivo e empático ao me acolher e também pude notar a sua capacidade e conhecimento na área para realizarmos o início dessa jornada que é a terapia. Ele está sempre atento e conectado as minhas palavras, houve uma sincronia e confiança e isso é fundamental para o tratamento. Recomendo este profissional.",
      author: "A.C.B.B.",
      detail: "Edifício Office Center II · Presencial",
    },
    {
      date: "21 de abril de 2026",
      text: "João é excepcional, o melhor que já encontrei!! Trabalha com uma mistura de delicadeza, ética e precisão, o que torna atendimento extremamente seguro e eficaz. Cada sessão foi profunda e transformadora, trazendo resultados reais e, ao mesmo tempo, reflexões que permanecem. É o tipo de trabalho que impacta de forma duradoura e estável.",
      author: "L.O.P",
      detail: "Edifício Office Center II · Presencial",
    },
    {
      date: "1 de novembro de 2024",
      text: "Excelente profissional! O João é muito atencioso e transmite uma sensação de acolhimento e segurança desde o primeiro encontro. Sempre demonstra empatia e é muito cuidadoso ao conduzir cada sessão, ajudando a entender e a enfrentar questões pessoais de forma prática e respeitosa. Sinto que evoluí muito com seu acompanhamento e recomendo a todos que procuram um psicólogo comprometido com o bem-estar dos pacientes.",
      author: "Alex Martins Vieira",
      detail: "Atendimento Online",
    },
    {
      date: "3 de fevereiro de 2024",
      text: "O João Marcos é um profissional ético, humano e faz com excelência aquilo que se propõe! Utiliza dos melhores métodos para auxiliar o seu paciente! Ele é flexível, atento às necessidades e sempre se coloca à disposição para dar suporte em situações pontuais! Ele se tornou a parte mais importante da minha rede de apoio! O melhor terapeuta para a vida!",
      author: "Adilson Roberto",
      detail: "Atendimento Online",
    },
  ],
  verified: "Avaliação verificada",
  moreLabel: "Ver mais avaliações",
};

export const online = {
  eyebrow: "07 — Em vídeo e teleatendimento",
  text: "A adaptação ao atendimento virtual demonstrou que a potência da psicanálise independe da distância geográfica. As sessões online preservam rigorosamente o mesmo sigilo profissional, os mesmos parâmetros éticos do CFP e a profundidade de um encontro presencial.",
  cards: [
    {
      icon: "check",
      title: "Plataforma Segura e Criptografada",
      text: "Link individual e exclusivo enviado antes de cada consulta, garantindo ambiente protegido e livre de interferências.",
      tag: "Privacidade integral",
    },
    {
      icon: "globe",
      title: "Flexibilidade Global de Fusos",
      text: "Comodidade para rotinas dinâmicas ou quem reside em outras cidades, estados e países, com adaptação aos fusos horários.",
      tag: "Brasil & Exterior",
    },
    {
      icon: "check",
      title: "Rigor Ético e Respaldo do CFP",
      text: "Atendimento regulamentado conforme as diretrizes do Conselho Federal de Psicologia e com recibos para reembolso.",
      tag: "Conselho de Psicologia",
    },
  ],
  cta: "Tirar dúvidas sobre atendimento online",
};

export const faq = {
  eyebrow: "08 — Esclarecimentos",
  intro:
    "Dúvidas comuns sobre o início das sessões, convênios médicos, sigilo e o funcionamento do processo psicanalítico.",
  cta: "Perguntar",
  items: [
    {
      q: "Como funciona a primeira consulta?",
      a: "A primeira consulta é uma conversa inicial dedicada a acolher o motivo que levou você a buscar ajuda. É o momento de expor suas angústias e entender como o método psicanalítico funciona na prática, estabelecendo o vínculo inicial de confiança e combinando os detalhes práticos de horários.",
    },
    {
      q: "Qual a frequência e duração das sessões?",
      a: "As sessões têm duração aproximada de 45 minutos e, em geral, acontecem uma vez por semana. A frequência é combinada em conjunto, de acordo com cada caso e com a constância necessária para a elaboração do processo.",
    },
    {
      q: "Você aceita plano de saúde ou convênio?",
      a: "O atendimento é particular. Ao final de cada sessão é emitido um recibo, que pode ser utilizado para solicitar reembolso junto ao seu plano de saúde, conforme as regras do seu convênio.",
    },
    {
      q: "Como é resguardado o sigilo profissional?",
      a: "O sigilo é um princípio do Código de Ética Profissional do Psicólogo e vale tanto no consultório quanto no atendimento online, que acontece por link individual e exclusivo, em ambiente seguro e criptografado.",
    },
    {
      q: "Existe diferença de eficácia entre o online e o presencial?",
      a: "Os dois formatos mantêm o mesmo rigor ético e a mesma profundidade de escuta. A escolha depende da sua rotina, da sua localização e do ambiente em que você se sente mais à vontade para falar.",
    },
    {
      q: "Qual o valor da consulta?",
      a: "O valor da primeira consulta é de R$ 170, tanto no consultório quanto online, com emissão de recibo para reembolso. Outras informações sobre formato e horários combinamos no primeiro contato.",
    },
    {
      q: "Quanto tempo dura um processo psicanalítico?",
      a: "Não há um prazo fixo. O tempo do processo é singular e depende da história, da demanda e do ritmo de cada pessoa. Por isso não há promessas de cura em número fixo de dias: o trabalho é construído sessão a sessão.",
    },
  ],
};

export const location = {
  eyebrow: "09 — Atendimento e localização",
  text: "Seja presencialmente em Indaiatuba ou através de teleconsulta online, o primeiro passo é entrar em contato para combinarmos o melhor formato e horário.",
  cta: "Agendar Consulta",
  mapLabel: "Localização do consultório",
  mapLink: "Abrir no Google Maps",
  presencial: {
    title: "Consultório Presencial",
    lines: ["Edifício Office Center II", "Rua Paul Harris 512, Cidade Nova I", "Indaiatuba - SP, CEP 13334-070"],
  },
  online: {
    title: "Atendimento Online",
    text: "Teleconsulta individual para todo o Brasil e brasileiros no exterior via videochamada segura e criptografada.",
  },
};

export const footer = {
  tagline: "Psicólogo Clínico & Psicanalista",
  presencialTitle: "Consultório Presencial",
  onlineTitle: "Atendimento Online",
  onlineText: "Sessões por vídeo para adultos em todo o Brasil e brasileiros no exterior.",
  mapLink: "Ver no mapa",
  crisisTitle: "Em caso de crise ou urgência",
  crisisText:
    "Procure o CVV (Centro de Valorização da Vida) pelo número 188, atendimento gratuito e 24 horas, ou o SAMU pelo número 192.",
  motto: "Ofício da conexão e do encontro humano",
};

export const help = {
  eyebrow: "10 — Rede de apoio e emergência",
  intro:
    "Se você ou alguém próximo está em sofrimento intenso ou em risco, procure ajuda imediata. Estes serviços são públicos e gratuitos.",
  items: [
    {
      title: "CVV — Centro de Valorização da Vida",
      text: "Apoio emocional e prevenção do suicídio, gratuito e 24 horas, por telefone, chat e e-mail.",
      contact: "188",
      tel: "188",
      href: "https://www.cvv.org.br",
    },
    {
      title: "SAMU",
      text: "Atendimento médico de urgência e emergência, 24 horas.",
      contact: "192",
      tel: "192",
      href: "",
    },
    {
      title: "UPA 24h / Pronto-socorro",
      text: "Em situação de risco imediato, procure a unidade de urgência mais próxima.",
      contact: "",
      tel: "",
      href: "",
    },
    {
      title: "UBS — Unidade Básica de Saúde",
      text: "Porta de entrada do SUS, com acolhimento e encaminhamento para a rede de saúde mental.",
      contact: "",
      tel: "",
      href: "",
    },
    {
      title: "CAPS — Centro de Atenção Psicossocial",
      text: "Serviço do SUS para sofrimento psíquico intenso e persistente.",
      contact: "",
      tel: "",
      href: "",
    },
  ],
  // Material do João sobre o que fazer em emergências (preencher o link quando ele enviar)
  emergency: {
    title: "O que fazer em uma situação de emergência",
    text: "Orientações sobre como agir diante de uma crise, incluindo risco de suicídio.",
    href: "",
  },
};
