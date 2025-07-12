// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: '/',
    plugins: [react()],
    build: {
      // Add this build option
      rollupOptions: {
        output: {
          manualChunks(id) {
            // Group React and its dependencies into a 'react-vendor' chunk
            if (
              id.includes('node_modules') &&
              (id.includes('react') ||
                id.includes('react-dom') ||
                id.includes('i18next'))
            ) {
              return 'react-vendor';
            }
            // You can add more rules here for other large libraries if needed
            // e.g., if you had a large mapping library, a separate 'map-vendor' chunk
          },
        },
      },
    },
  };
});
