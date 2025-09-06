import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx({
      components: {
        // Importa il component Swiper
        Swiper: './src/components/Swiper.astro',
      },
    }), 
    sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});