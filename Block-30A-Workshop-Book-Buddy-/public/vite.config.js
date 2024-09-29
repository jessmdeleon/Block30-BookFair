import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'index.html', // Use `.` if `vite.config.js` is in the same folder as `index.html`
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './index.html' // Adjust path relative to `vite.config.js`
    }
  }
});
