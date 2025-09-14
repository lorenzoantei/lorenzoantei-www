import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://lorenzoantei.it",
  output: "static",
  i18n: {
    locales: ["en", "it"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true
    }
  },
  integrations: [
    mdx({
      components: {
        // Importa il component Swiper
        Swiper: './src/components/Swiper.astro',
      },
    }), 
    sitemap()
  ],
  redirects: {
    "/": "/en",
  },

  vite: {
    plugins: [tailwindcss()],
  },
});