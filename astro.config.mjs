import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://hnlt.me",
  integrations: [
    sitemap({
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
  outDir: "./dist",
  server: {
    port: 4321,
    host: true,
  },
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
});
