import type { ProjectsData } from '@/types/data';

export const projectsData: ProjectsData = {
  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com React, Node.js e PostgreSQL. Inclui sistema de pagamentos, gestão de estoque e painel administrativo.",
      image: "/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "fullstack",
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/user/ecommerce",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicação de gerenciamento de tarefas com drag-and-drop, notificações em tempo real e colaboração em equipe.",
      image: "/projects/taskapp.jpg",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      category: "frontend",
      liveUrl: "https://taskapp-demo.com",
      githubUrl: "https://github.com/user/taskapp",
      featured: true
    },
    {
      id: 3,
      title: "API REST Documentation",
      description: "Documentação interativa de API REST com Swagger, testes automatizados e exemplos de uso.",
      image: "/projects/api-docs.jpg",
      technologies: ["Express", "Swagger", "Jest", "Docker"],
      category: "backend",
      liveUrl: "https://api-docs-demo.com",
      githubUrl: "https://github.com/user/api-docs",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Portfolio pessoal responsivo com animações, modo escuro e otimização SEO.",
      image: "/projects/portfolio.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      liveUrl: "https://portfolio-demo.com",
      githubUrl: "https://github.com/user/portfolio",
      featured: false
    },
    {
      id: 5,
      title: "Real-time Chat App",
      description: "Aplicação de chat em tempo real com salas, mensagens privadas e upload de arquivos.",
      image: "/projects/chat.jpg",
      technologies: ["React", "Socket.io", "MongoDB", "AWS S3"],
      category: "fullstack",
      liveUrl: "https://chat-demo.com",
      githubUrl: "https://github.com/user/chat-app",
      featured: true
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "Dashboard de previsão do tempo com gráficos interativos e dados em tempo real.",
      image: "/projects/weather.jpg",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
      category: "frontend",
      liveUrl: "https://weather-demo.com",
      githubUrl: "https://github.com/user/weather-app",
      featured: false
    }
  ],
  filters: [
    { id: "all", label: "Todos" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" }
  ]
};
