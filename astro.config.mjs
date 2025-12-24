import { defineConfig } from "astro/config";
import path from "path";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://gustavo-garozzo.vercel.app/", // Change this to your production domain
  integrations: [sitemap()],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});
