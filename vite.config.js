// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        "index": resolve(__dirname, 'index.html'),
        "class1-1": resolve(__dirname, 'src/slides/html/class1-1.html'),
      },
    },
  },
})

  