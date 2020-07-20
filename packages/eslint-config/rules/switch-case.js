const { WARN, OFF } = require('./_const')

module.exports = {
  rules: {
    // Switches must have new lines between case groups
    'switch-case/newline-between-switch-case': [
      WARN,
      'always',
      { fallthrough: 'never' },
    ],

    // It can be useful for switch cases to have their own scope.
    'switch-case/no-case-curly': OFF,
  },
}
