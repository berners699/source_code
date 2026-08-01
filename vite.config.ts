import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { youwareVitePlugin } from '@youware/vite-plugin-react'
import path from 'node:path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [youwareVitePlugin(), react()],
  server: {
    host: '127.0.0.1',
    port: 5174,
  },
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
