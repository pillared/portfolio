// lib/stores/useConfigStore.ts
import { create } from "zustand";
import { WebsiteConfig } from "@/lib/config/types";
import { PROJECT_DIR } from "../config/constants";

interface ConfigState {
  config: WebsiteConfig;
  loading: boolean;
  fetchConfig: () => Promise<void>;
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
      const response = await fetch(`${PROJECT_DIR}/website.config.json`);

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
