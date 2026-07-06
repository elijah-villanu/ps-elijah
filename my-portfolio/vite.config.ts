import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    watch: {
      usePolling: true,   // ← polls for file changes instead of relying on OS events
      interval: 1000,      // ← check every 100ms (lower = faster but more CPU)
    },
  },
  base: "/",
})
