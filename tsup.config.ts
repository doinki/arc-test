import { defineConfig } from 'tsup';

export default defineConfig({
  bundle: true,
  clean: true,
  entry: ['src/index.ts'],
  format: 'esm',
  target: 'node22',
  treeshake: true,
});
