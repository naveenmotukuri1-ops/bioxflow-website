// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.bioxflow.co.uk',
  // Keep normal HTML spacing between words and inline links.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()]
  }
});