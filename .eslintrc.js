/* eslint-disable */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "import/extensions": [{ "js": "always"}],
    "linebreak-style": ["error", "windows"],
  },
  ignorePatterns: ['*.html'],
};