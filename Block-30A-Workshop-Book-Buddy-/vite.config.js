import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'Block-30A-Workshop-Book-Buddy-', 
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'Block-30A-Workshop-Book-Buddy-/index.html' 
    }
  }
});
