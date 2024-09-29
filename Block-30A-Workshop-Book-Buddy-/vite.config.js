import { defineConfig } from 'vite'

export default defineConfig({
  root: './', // Make sure this points to the correct directory containing index.html
  build: {
    rollupOptions: {
      input: 'index.html' // Ensure this matches the path to your index.html
    }
  }
})
