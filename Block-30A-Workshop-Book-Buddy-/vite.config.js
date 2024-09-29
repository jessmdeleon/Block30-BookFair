import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'src/main.jsx'  // Make sure this points to your JavaScript entry point file
    }
  }
})
