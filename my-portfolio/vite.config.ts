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
    // Only listen on localhost; set to true to reach the WSL server by its IP if localhost forwarding breaks
    host: false,
    // Polls for changes instead of OS file checks (running on WSL)
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
  base: "/",
})
