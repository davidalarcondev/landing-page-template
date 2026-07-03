import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://landing-page-template-4yf.pages.dev/",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [],
});
