/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// Packages that should not be bundled into the library output.
// Consumers must provide react / react-dom themselves (peerDependencies).
const external = [/^react/, /^react-dom/, /^react-jsx/];

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      entryRoot: 'src',
      outDir: 'dist',
      include: ['src'],
      exclude: [
        'src/**/*.stories.tsx',
        'src/**/*.stories.ts',
        'src/stories',
        'src/App.tsx',
        'src/main.tsx',
        'src/assets',
        // Storybook-only documentation components — not part of the public API
        'src/components/Colors',
        'src/components/LayoutGrid',
        'src/components/ShadowsBorders',
        'src/components/Typography',
      ],
    }),
  ],
  build: {
    lib: {
      entry: resolve(dirname, 'src/index.ts'),
      name: 'DesignSystem',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: { external },
    copyPublicDir: false,
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        }
      }
    }]
  }
});