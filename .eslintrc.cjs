/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    'eslint:recommended',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    'vue/no-deprecated-slot-attribute': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
  },
  ignorePatterns: [
    'coverage',
    'dist',
  ],
};
