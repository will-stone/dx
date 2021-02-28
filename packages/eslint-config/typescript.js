module.exports = {
  plugins: ['@typescript-eslint'],

  extends: [
    ...['./javascript', './rules/typescript'].map(require.resolve),
    'prettier',
  ],
}
