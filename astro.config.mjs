import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://SEU_USUARIO.github.io', // Substitua SEU_USUARIO pelo seu username do GitHub
  base: '/odonto-vita', // Se o repositório não for username.github.io, use o nome do repositório
  integrations: [vue(), tailwind()],
});
