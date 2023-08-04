module.exports = {
  extends: [
    'next/core-web-vitals',
    'turbo',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: [
    '**/node_modules/**',
    '**/dist/**',
    '**/generated/**',
    '**/.next/**',
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/sort-type-constituents': 'error',
    'newline-before-return': 'error',
    'object-shorthand': 'error',
    'prefer-template': 'error',
    curly: 'error',
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        multiline: 'last',
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: true,
        locale: 'auto',
      },
    ],
  },
};
