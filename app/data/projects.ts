export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  tags: string[];
  imageBg: string;
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: "loja-19",
    title: "Loja 19",
    category: "E-Commerce",
    client: "Loja 19",
    description: "Plataforma de comércio eletrónico completa, otimizada para alta conversão, integração com pagamentos digitais (MB WAY / Multibanco) e gestão intuitiva.",
    tags: ["Next.js", "Stripe / Multibanco", "Tailwind CSS"],
    imageBg: "from-cyan-500/20 to-blue-600/20",
  },
  {
    id: "icm-auto",
    title: "ICM Auto",
    category: "Stands de Automóveis",
    client: "ICM Auto",
    description: "Portal dinâmico para stand automóvel com sistema de filtragem avançada de viaturas, galeria imersiva e formulários para marcação de testes.",
    tags: ["React", "Framer Motion", "SEO Otimizado"],
    imageBg: "from-blue-500/20 to-indigo-600/20",
  },
];