import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://valentinnicheglod.github.io',
  base: '/lift-construcciones',
  integrations: [tailwind({
    nesting: true
  })]
});