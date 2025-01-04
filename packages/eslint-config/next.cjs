/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@rocketseat/eslint-config/next', 'next/typescript'],
  plugins: ['simple-import-sort', '@next/eslint-plugin-next'],
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
  ignorePatterns: ['dist/**', 'turbo/**'],
}
