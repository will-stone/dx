const { WARN } = require('./rules/_const')

module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },

  env: {
    es6: true,
  },

  plugins: [
    'import',
    'prettier',
    'simple-import-sort',
    'switch-case',
    'unicorn',
  ],

  extends: [
    ...[
      './rules/built-in',
      './rules/import',
      './rules/switch-case',
      './rules/unicorn',
    ].map(require.resolve),
    'prettier',
    'prettier/unicorn',
  ],

  rules: {
    'prettier/prettier': WARN,
  },
}
