const { ERROR, WARN } = require('./_const')

module.exports = {
  rules: {
    /**
     * WARN
     */

    // There must be a line's space between imports and code
    'import/newline-after-import': WARN,

    // Sort all the imports!
    'simple-import-sort/sort': WARN,

    /**
     * ERROR
     */

    // Reports funny business with exports,
    // like repeated exports of names or defaults
    'import/export': ERROR,

    // When there is only a single export from a module,
    // prefer using default export over named export.
    'import/prefer-default-export': ERROR,
  },
}
