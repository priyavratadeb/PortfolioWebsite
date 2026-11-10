import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite"
import { fileURLToPath, URL } from "node:url"

// https://vite.dev/config/
export default defineConfig({
  // CHANGE #5 (also): replaced `__dirname` (gives a warning in newer Vite) with a standard URL.
  // CHANGE #5: relative base path so the built site works on GitHub Pages
  // (and anywhere else) without having to type your repo name here.
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
