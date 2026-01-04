import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/EEGSS/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        events: resolve(__dirname, 'events.html')
      }
    }
  }
})