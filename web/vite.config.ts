import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(import.meta.url);

export default defineConfig({
  plugins: [tsconfigPaths(),
    storybookTest({
      configDir: path.join(dirname, '.storybook'),
    })],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
  test: {
    projects: [{
      extends: true,
      plugins: [],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium',
          }],
        },
        setupFiles: ['.storybook/vitest.setup.ts'],
      },
    }],
  },
});
