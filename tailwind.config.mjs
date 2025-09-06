import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx,md}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
