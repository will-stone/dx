module.exports = {
  env: {
    node: true,
  },

  plugins: ['node'],

  extends: ['./rules/node'].map(require.resolve),
}
