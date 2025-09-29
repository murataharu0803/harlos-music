import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
  ],
  build: {
    outDir: '../build',
    emptyOutDir: true,
  },
  esbuild: {
    supported: {
      'top-level-await': true
    },
  }
})
