import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/01-fundamentos-reactjs-ts',
  plugins: [react()],
  server: {
    port: 3000,
  }
})
