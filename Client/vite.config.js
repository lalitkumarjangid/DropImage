import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Customize build output directory if needed
  },
  server: {
    open: true, // Automatically open the app in the browser
    cors: {
      origin: '*', // Enable CORS for development if needed
      methods: ['GET', 'POST'],
    },
  },
});
