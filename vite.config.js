import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: "/sagarsuri/" , this project hosted on the Vercel That Because the comment out
  resolve: {
    alias: {
      assets: '/src/assets', // Use absolute path
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.mp3'],
  },
});
