import type { ProfileData } from '@/types/data';

export const profileData: ProfileData = {
  personal: {
    name: "Carlos Eduardo",
    title: "Desenvolvedor Full Stack Jr",
    description: "Sou um desenvolvedor Jr apaixonado por tecnologia e inovação. Estudante de desenvolvimento web moderno, sempre buscando aprender novas tecnologias e criar soluções eficientes que impactam positivamente a vida das pessoas.",
    avatar: "/user.jpg",
    githubUrl: "https://github.com/CarlosDev0410",
    linkedinUrl: "https://linkedin.com/in/carlos-eduardo-souza-dev-jr/",
    email: "carloseduardo.dev2022@gmail.com"
  },
  metrics: {
    experience: 1,
    projectsCount: 5,
    technologiesCount: 10,
    companiesWorked: 0
  },
  experience: [
    {
      title: "Analista de suporte em sistemas",
      description: "Experiência com projetos pessoais em desenvolvimento frontend e backend"
    },
    {
      title: "Desenvolvimento web com nextJS",
      description: "Desenvolvimento de soluções para diversos tipos de negócios"
    },
    {
      title: "Analista de Ecommerce",
      description: "Experiência em equipes distribuídas e metodologias ágeis"
    }
  ],
  education: [
    {
      title: "Analise e desenvolvimento de sistemas",
      description: "Formação Tecnologo em Análise e Desenvolvimento de Sistemas"
    },
    {
      title: "Certificações em tecnologias web",
      description: "Certificações em NextJS, React, Node.js e outras tecnologias"
    },
    {
      title: "Cursos especializados online",
      description: "Aprendizado contínuo através de plataformas online"
    }
  ]
};
