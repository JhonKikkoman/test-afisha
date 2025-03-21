import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  server: { port: 3000 },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'src/css/images/**/*', dest: 'src/css/images' },
        { src: 'src/css/icons/**/*', dest: 'src/css/icons' },
      ],
    }),
  ],
  assetsInclude: ['**/*.svg'],
});
