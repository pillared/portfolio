// website.config.ts

export interface SkillItem {
  name: string;
  icon: string;
  docs: string;
}

export interface ExperienceItem {
  id: number;
  company: string;
  title: string;
  role: string;
  timeline: string;
  description: string[];
}

export interface TechnicalSkills {
  id: string;
  name: string;
  items: SkillItem[];
}

export interface Biography {
  details: string;
}

export interface Skills {
  technical: TechnicalSkills[];
  interpersonal: string[];
}

export type Education = {
  id: string;
  name: string;
  location: string;
  educationType: string;
  degree: string;
  degreeCategory: string;
  major: string;
  concentration: string;
  years: string;
  relevantCoursework: string[];
  icon: string;
};

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  role: string;
  learnings: string;
  screenshots: string[]; // URLs to images or GIFs
  demoLink: string | null; // Could be null if no demo
  repoLink: string;
  blogPost: string;
  timeline: string;
  impact: string;
}

export interface WebsiteConfig {
  name: string;
  description: string;
  distinguishers: string[];
  biography: Biography;
  experience: ExperienceItem[];
  skills: Skills;
  education: Education[];
  projects: Project[];
  privacyPolicyUrl: string;
  termsOfUseUrl: string;
  email: string;
  copyright: string;
}
