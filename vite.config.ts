// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'node:url';
import { componentTagger } from 'lovable-tagger';

export default defineConfig(({ mode }) => ({
  // necessário para GitHub Pages (project site): /<nome-do-repo>/
  base: mode === 'production' ? '/katia-lins-crafted-journeys/' : '/',
  server: { host: '::', port: 8080 },
  plugins: [react(), mode === 'development' && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}));
