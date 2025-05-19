import react from '@vitejs/plugin-react';

import path from 'node:path';
import { defineConfig } from 'vite';

import tailwindcss from '@tailwindcss/vite';

// import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   devOptions: {
    //     enabled: true
    //   },
    //   workbox: {
    //     clientsClaim: true,
    //     skipWaiting: true
    //   }
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
