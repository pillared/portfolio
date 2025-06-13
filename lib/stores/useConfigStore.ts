// lib/stores/useConfigStore.ts
import { create } from "zustand";
import { WebsiteConfig } from "@/lib/config/types";

interface ConfigState {
  config: WebsiteConfig;
  loading: boolean;
  fetchConfig: () => Promise<void>;
}

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
  educationType: string;
  degree: string;
  degreeCategory: string;
  major: string;
  concentration: string;
  years: string;
  relevantCoursework: string[];
};

export interface WebsiteConfig {
  name: string;
  description: string;
  distiguishers: string[];
  biography: Biography;
  skills: Skills;
  education: Education[];
  privacyPolicyUrl: string;
  termsOfUseUrl: string;
  email: string;
  copyright: string;
}

const defaultConfig: WebsiteConfig = {
  name: "",
  description: "",
  distinguishers: [],
  biography: { details: "" },
  skills: {
    technical: [],
    interpersonal: [],
  },
  education: [],
  privacyPolicyUrl: "",
  termsOfUseUrl: "",
  email: "",
  copyright: "",
};

export const useConfigStore = create<ConfigState>((set) => ({
  config: defaultConfig,
  loading: false,

  fetchConfig: async () => {
    set({ loading: true });
    try {
      const response = await fetch("/website.config.json");

      if (response.status === 404) {
        set({ loading: false });
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to retrieve configuration overrides.");
      }

      const config: WebsiteConfig = await response.json();
      set({ config, loading: false });
    } catch (error) {
      console.error("Zustand config fetch error:", error);
      set({ loading: false });
    }
  },
}));
