import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '7480-102-210-56-214.ngrok-free.app',
      'localhost'
    ]
  }
})