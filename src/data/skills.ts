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
        { name: "MongoDB", level: 0 },
        { name: "REST APIs", level: 0 },
        { name: "GraphQL", level: 0 }
      ]
    },
    {
      title: "Ferramentas",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Vercel", level: 85 },
        { name: "Figma", level: 60 },
        { name: "VS Code", level: 95 }
      ]
    }
  ],
  additionalTechnologies: [
    "Python",
    "Java",
    "PHP",
    "Laravel",
    "Vue.js",
    "Angular",
    "Sass",
    "Webpack",
    "Jest",
    "Cypress",
    "Redis",
    "Firebase"
  ]
};
