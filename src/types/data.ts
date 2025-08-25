export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface SkillsData {
  categories: SkillCategory[];
  additionalTechnologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack';
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface ProjectFilter {
  id: string;
  label: string;
}

export interface ProjectsData {
  projects: Project[];
  filters: ProjectFilter[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  avatar: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

export interface Metrics {
  experience: number;
  projectsCount: number;
  technologiesCount: number;
  companiesWorked: number;
}

export interface ExperienceItem {
  title: string;
  description: string;
}

export interface EducationItem {
  title: string;
  description: string;
}

export interface ProfileData {
  personal: PersonalInfo;
  metrics: Metrics;
  experience: ExperienceItem[];
  education: EducationItem[];
}
