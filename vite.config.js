import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Phase 1: build only the progressive Vue layer.
// The current GitHub Pages site continues serving the root index.html unchanged.
export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    outDir: 'dist/vue',
    emptyOutDir: true,
    lib: {
      entry: fileURLToPath(new URL('./src/vue/entry.js', import.meta.url)),
      formats: ['es'],
      fileName: () => 'sunoboom-vue.js',
      cssFileName: 'sunoboom-vue'
    }
  }
});
