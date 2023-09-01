module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    'standard',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:n/recommended',
    'plugin:promise/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'n', 'promise'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
      },
    ],
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
}