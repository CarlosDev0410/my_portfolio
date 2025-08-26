import type { SkillsData } from '@/types/data';

export const skillsData: SkillsData = {
  categories: [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 20 },
        { name: "TypeScript", level: 20 },
        { name: "Next.js", level: 50 },
        { name: "Tailwind CSS", level: 60 },
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 70 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 40 },
        { name: "Express", level: 10 },
        { name: "PostgreSQL", level: 70 },
        { name: "Python", level: 40 },
        { name: "REST APIs", level: 10 },
        { name: "GraphQL", level: 10 }
      ]
    },
    {
      title: "Ferramentas",
      skills: [
        { name: "Git", level: 90 },
        { name: "Supabase", level: 90 },
        { name: "Cursor", level: 65 },
        { name: "Vercel", level: 85 },
        { name: "Railway", level: 60 },
        { name: "VS Code", level: 95 }
      ]
    }
  ],
  additionalTechnologies: [
    "Looker Studio",
    "PowerBI",
    "Marketplaces",
    "ERP",
    "Dbeaver",
    "OpenAI",
    "Gemini",
    "Claude AI",
    "Terminal CLI",
    "Prisma",
    "Cypress",
    "Redis"
  ]
};
