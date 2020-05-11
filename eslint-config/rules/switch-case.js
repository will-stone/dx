const { WARN } = require('./_const')

module.exports = {
  rules: {
    // Switches must have new lines between case groups
    'switch-case/newline-between-switch-case': [
      WARN,
      'always',
      { fallthrough: 'never' },
    ],
  },
}
