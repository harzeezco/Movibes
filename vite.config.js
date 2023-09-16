import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  base: '/',
  publicDir: 'public', // The public directory in your project
  build: {
    publicPath: '/', // Set the public path to match the base directory
  },
})
