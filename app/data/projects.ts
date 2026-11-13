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
    description: "Plataforma de comércio eletrónico completa com integração de pagamentos e painel de gestão de produtos.",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "TypeScript"],
    image: "/loja19.jpg",
    link: "https://loja19domercado.pt"
  },
  {
    id: 2,
    title: "ICM Auto - Portal Automóvel",
    category: "Portal Web",
    client: "ICM Auto",
    description: "Stand virtual com motor de busca avançado, filtros em tempo real e sistema de reservas de test-drive.",
    tags: ["Next.js", "React", "Tailwind CSS", "API REST"],
    image: "",
    link: "https://exemplo.com"
  },
  {
    id: 3,
    title: "Nortecargo - Empresa de Mudanças",
    category: "Portal Web",
    client: "Nortecargo",
    description: "Site com Formulário de contacto automatizado a pedido do cliente",
    tags: ["Next.js", "React", "Tailwind CSS", "API REST"],
    image: "",
    link: "https://www.nortecargo.com"
  }
];