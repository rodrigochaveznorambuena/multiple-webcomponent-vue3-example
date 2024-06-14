import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    }),
    {
      name: 'copy-html-plugin',
      closeBundle: () => {
        if (mode === 'production') {
          return;
        }
        const srcHtmlPath = resolve(__dirname, 'index.dist.html');
        const destDir = resolve(__dirname, 'dist');
        const destHtmlPath = resolve(destDir, 'index.html');

        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true });
        }

        fs.copyFileSync(srcHtmlPath, destHtmlPath);
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        'dinamic-form': resolve(__dirname, 'src/main.dinamic-form.ts'),
        'simple-form': resolve(__dirname, 'src/main.simple-form.ts'),
      },
      output: {
        format: 'es',
        dir: 'dist',
        entryFileNames: '[name].js',
      },
    },
  },
}));
