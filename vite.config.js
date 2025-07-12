// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    // Change this line from 'base: "/"' to an empty string
    base: '',
    plugins: [react()],
    server: {
      historyApiFallback: true,
    },
  };
});
