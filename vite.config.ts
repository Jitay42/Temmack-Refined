import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: '.', // Since index.html is in root, not public
  publicDir: 'public', // Vite's default folder for static assets like logo.png, team.json
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // allows cleaner imports like @/components/Header
    },
  },
  build: {
    outDir: 'dist', // output folder for your build
    emptyOutDir: true, // clears dist folder before each build
  },
  server: {
    port: 5173,
    open: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
