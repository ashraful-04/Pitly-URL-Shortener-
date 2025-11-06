import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  publicDir: 'public', // ensures assets from public (like _redirects) are copied
  // Hook: manually copy _redirects file after build
  buildEnd() {
    try {
      copyFileSync('public/_redirects', 'dist/_redirects')
      console.log('✅ _redirects file copied successfully!')
    } catch (err) {
      console.error('⚠️ Failed to copy _redirects:', err)
    }
  },
})
