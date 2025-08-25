import { skillsData } from '@/data/skills';
import { projectsData } from '@/data/projects';
import { profileData } from '@/data/profile';
import type { SkillsData, ProjectsData, ProfileData } from '@/types/data';

export function getSkillsData(): SkillsData {
  return skillsData;
}

export function getProjectsData(): ProjectsData {
  return projectsData;
}

export function getProfileData(): ProfileData {
  return profileData;
}

export function getProjectsByCategory(category: string) {
  const { projects } = getProjectsData();
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
}

export function getFeaturedProjects() {
  const { projects } = getProjectsData();
  return projects.filter(project => project.featured);
}

export function getTotalProjectsCount() {
  const { projects } = getProjectsData();
  return projects.length;
}

export function getTotalTechnologiesCount() {
  const { categories, additionalTechnologies } = getSkillsData();
  const categorySkillsCount = categories.reduce((total, category) => total + category.skills.length, 0);
  return categorySkillsCount + additionalTechnologies.length;
}


