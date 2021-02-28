module.exports = {
  plugins: ['react', 'react-hooks'],

  settings: {
    react: {
      version: 'detect',
    },
  },

  env: {
    browser: true,
  },

  extends: [
    'plugin:react/all',
    'plugin:jsx-a11y/recommended',
    ...['./rules/react'].map(require.resolve),
    'prettier',
  ],
}
