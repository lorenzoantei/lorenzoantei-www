import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://lorenzoantei.it",
  output: "server",            // richiesto per i18n
  i18n: {
    locales: ["en", "it"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false // L’inglese non avrà /en/ nel percorso
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

  vite: {
    plugins: [tailwindcss()],
  },
});