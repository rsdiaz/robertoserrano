import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import turbolinks from "@astrojs/turbolinks";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://robertoserrano.dev',
  base: '/robertoserrano.pro',
  integrations: [react(), tailwind(), turbolinks(), partytown(), sitemap(), mdx()],
})