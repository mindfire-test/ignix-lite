import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'build.js',
      formats: ['es']
    },
    cssCodeSplit: false,
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild'
  }
})

