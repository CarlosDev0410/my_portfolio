import type { Project, ProjectsData } from '@/types/data';

const projects: Project[] = [
  {
    id: 1,
    title: "gerador de Etiquetas ZPL",
    description: "Pagina de geração de etiquetas ZPL para Vendas e Logistica Reversa com API da Wake Commerce",
    image: "/projects/label-generator.png",
    technologies: ["NextJS", "Axios", "Typescript"],
    category: "fullstack",
    liveUrl: "https://gerador-etiqueta.vercel.app/",
    githubUrl: "https://github.com/CarlosDev0410/label_generator",
    featured: true
  },
  {
    id: 2,
    title: "Gerador de Planilha Oferta Relâmpago",
    description: "Script com GUI criado para automatizar o processo de extração de dados do BD. Demanda otimizada de 10min para 10seg",
    image: "/projects/image (1).png",
    technologies: ["Python", "Tkinter", "SQL"],
    category: "backend",
    liveUrl: "https://github.com/CarlosDev0410/Auto-Extract-Data-Offer",
    githubUrl: "https://github.com/CarlosDev0410/Auto-Extract-Data-Offer",
    featured: true
  },
  {
    id: 3,
    title: "ETL de dados automatizado",
    description: "Script de extração, leitura e tratamento dos dados de um ERP para um database PostgreSQL no Supabase.",
    image: "/projects/backend.png",
    technologies: ["Python", "PostgreSQL", "Supabase", "SqlAlchemy"],
    category: "backend",
    liveUrl: "#",
    githubUrl: "https://github.com/CarlosDev0410/pipeline-dados-powerbi",
    featured: false
  },
  {
    id: 4,
    title: "Bewear Ecommerce",
    description: "Ecommerce Bewear criado durante o bootcamp da full stack club. Desenvolvido com tecnologias Full-stack e integração com gateway de pagamento.",
    image: "/projects/construct.png",
    technologies: ["Next.js", "Node.JS", "Neon.DB", "Drizzle"],
    category: "frontend",
    liveUrl: "#",
    githubUrl: "https://github.com/CarlosDev0410/bewear-bootcamp",
    featured: false
  },
];

export const projectsData: ProjectsData = {
  projects,
  filters: [
    { id: 'all', label: 'Todos' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ]
};
