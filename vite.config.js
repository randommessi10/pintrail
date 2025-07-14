import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 5173,
    proxy: {
      '/login': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/register': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/destinations': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/destinations/fetch': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/destinations/add': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/itineraries': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/itineraries/fetch': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/itineraries/create': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/itineraries/view': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/itineraries/remove': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/saved': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/saved/saving': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/saved/unsaving': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/saved/fetch': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/itineraries/options': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/itineraries/add': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
