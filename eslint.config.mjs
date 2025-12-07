import { defineConfig, globalIgnores } from 'eslint/config';
import config from 'eslint-config-fabulator';

const ignores = globalIgnores([
  '**/dist/*',
  '*.json',
  'es/*',
  'dist/*',
  '.idea/*',
]);

export default defineConfig([
  config,
  ignores,
  {
    languageOptions: {
      sourceType: 'module',
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: './tsconfig.eslint.json',
      },
    },
  },
]);
