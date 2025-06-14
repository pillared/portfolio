// website.config.ts

export interface SkillItem {
  name: string;
  icon: string;
  docs: string;
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

export interface WebsiteConfig {
  name: string;
  description: string;
  distinguishers: string[];
  biography: Biography;
  skills: Skills;
  education: Education[];
  privacyPolicyUrl: string;
  termsOfUseUrl: string;
  email: string;
  copyright: string;
}
