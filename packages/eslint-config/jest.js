module.exports = {
  env: {
    jest: true,
  },

  plugins: ['jest'],

  extends: [
    'plugin:jest/recommended',
    ...['./rules/jest'].map(require.resolve),
  ],
}
