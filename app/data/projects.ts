export interface Project {
  id: string | number;
  title: string;
  category: string;
  client: string;
  description: string;
  tags: string[];
  image?: string;
  imageBg?: string;
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Loja 19 - E-Commerce",
    category: "E-Commerce",
    client: "Loja 19",
    description:
      "Plataforma de comércio eletrónico completa com integração de pagamentos e painel de gestão de produtos.",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "TypeScript"],
    image: "/projects/loja19.jpg",
    link: "https://loja19domercado.pt",
  },
  {
    id: 2,
    title: "ICM Auto - Portal Automóvel",
    category: "Portal Web",
    client: "ICM Auto",
    description:
      "Stand virtual com motor de busca avançado, filtros em tempo real e sistema de reservas de test-drive.",
    tags: ["Next.js", "React", "Tailwind CSS", "API REST"],
    image: "/projects/icmauto.jpg",
    link: "https://icmauto-mirx.vercel.app",
  },
  {
    id: 3,
    title: "Nortecargo - Empresa de Mudanças",
    category: "Portal Web",
    client: "Nortecargo",
    description:
      "Site com formulário de contacto e orçamento automatizado a pedido do cliente.",
    tags: ["Next.js", "React", "Tailwind CSS", "API REST"],
    image: "/projects/nortecargo.jpg",
    link: "https://www.nortecargo.com",
  },
  {
    id: 4,
    title: "Clínica Demo",
    category: "Clínica / Saúde",
    client: "Clínica Demo",
    description:
      "Site demo de clínica médica com especialidades, staff, serviços e marcação de consultas — projecto na Vercel.",
    tags: ["Landing", "UI médica", "Reservas"],
    image: "/projects/clinica.jpg",
    link: "https://clinicademo.vercel.app",
  },
  {
    id: 5,
    title: "RuiParts - Peças Automóvel",
    category: "Catálogo B2B",
    client: "RuiParts",
    description:
      "Catálogo e área de cliente para peças automóvel: pesquisa, encomendas, histórico e painel de gestão.",
    tags: ["Next.js", "React", "Dashboard", "Catálogo"],
    image: "/projects/ruiparts.jpg",
    link: "https://ruiparts-mmui.vercel.app",
  },
];
