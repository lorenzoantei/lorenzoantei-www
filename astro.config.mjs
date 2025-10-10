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
  },
  integrations: [
    mdx({
      components: {
        Swiper: './src/components/Swiper.astro',
      },
    }), 
    sitemap()
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});