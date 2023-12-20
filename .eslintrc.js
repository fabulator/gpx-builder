module.exports = {
  env: {
    node: true,
  },
  extends: ['fabulator'],
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'canonical/filename-no-index': 'off',
  },
};
