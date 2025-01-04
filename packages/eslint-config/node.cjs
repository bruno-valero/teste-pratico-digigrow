/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    '@rocketseat/eslint-config/node',
    'plugin:vitest-globals/recommended',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-useless-constructor': 'off',
    'prettier/prettier': [
      'error',
      { singleQuote: true, semi: false, endOfLine: 'auto' },
    ],
    // "@typescript-eslint/ban-types": "error",
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-empty-object-type': 'off',
  },
  ignorePatterns: ['dist/**', 'build/**', 'turbo/**'],
}
