import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
  const base = mode === 'production' && isGitHubPages ? '/portfolio/' : '/';

  return {
    plugins: [react(), tailwindcss()],
    base,
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      open: true,
    },
    preview: {
      host: '0.0.0.0',
      port: 3000,
      open: true,
    },
  };
});
