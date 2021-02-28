module.exports = {
  plugins: ['react', '@typescript-eslint'],

  extends: [...['./rules/typescript'].map(require.resolve), 'prettier'],
}
