import type { ProjectsData } from '@/types/data';

export const projectsData: ProjectsData = {
  projects: [
    {
      id: 1,
      title: "Tela de Login do Instagram",
      description: "Clone da tela de login do Instagram, criado como projeto de treinamento das tecnologias base do desenvolvimento web.",
      image: "/projects/Tela-Insta.png",
      technologies: ["HMTL5", "CSS3", "JavaScript"],
      category: "frontend",
      liveUrl: "https://login-instagram-gray.vercel.app/",
      githubUrl: "https://github.com/CarlosDev0410/Login-Instagram",
      featured: true
    },
    {
      id: 2,
      title: "Landing Page Seal World",
      description: "Landing page criada com as tecnologias base do desenvolvimento Web. Manipulação de videos na pagina, background e estilização moderna.",
      image: "/projects/seal-word.png",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      category: "frontend",
      liveUrl: "https://sela-world.vercel.app/",
      githubUrl: "https://github.com/CarlosDev0410/Projeto-Seal.World",
      featured: true
    },
    {
      id: 3,
      title: "ETL de dados automatizado",
      description: "Script de estração, leitura e tratamento dos dados de um ERP para um database PostgreSQL no Supabase.",
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
  ],
  filters: [
    { id: "all", label: "Todos" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" }
  ]
};
