module.exports = {
  extends: ['eslint:recommended', 'plugin:tailwindcss/recommended', 'prettier'],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['tailwindcss'],
};
