import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://allanoliveira.github.io', // Substitua SEU_USUARIO pelo seu username do GitHub
  base: '/vita-odonto/', // Se o repositório não for username.github.io, use o nome do repositório
  integrations: [vue(), tailwind()],
});
