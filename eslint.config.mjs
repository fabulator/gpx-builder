// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig, globalIgnores } from 'eslint/config';
// eslint-disable-next-line import/no-extraneous-dependencies
import config from 'eslint-config-fabulator';

const ignores = globalIgnores([
  '**/dist/*',
  '*.json',
  'dev/*',
  '.idea/*',
  '.run/*',
]);

export default defineConfig([
  config,
  ignores,
  {
    languageOptions: {
      sourceType: 'module',
      parserOptions: {
        //projectService: true,
        tsconfigRootDir: import.meta.dirname,
        project: './tsconfig.eslint.json',
      },
    },
  },
]);
