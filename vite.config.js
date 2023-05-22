// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import commonjs from 'vite-plugin-commonjs';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        "index": resolve(__dirname, 'index.html'),
        "class1-1": resolve(__dirname, 'src/slides/html/class1-1.html'),
        "class1-2": resolve(__dirname, 'src/slides/html/class1-2.html'),
        "class1-3": resolve(__dirname, 'src/slides/html/class1-3.html'),
        "class1-4": resolve(__dirname, 'src/slides/html/class1-4.html'),
        "class1-5": resolve(__dirname, 'src/slides/html/class1-5.html'),
      },
    },
  },
  plugins: [
    commonjs(),
  ],
})

  