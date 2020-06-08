const { ERROR, WARN, OFF } = require('./_const')

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
    // this _would_ prefer using default export over named export, but it
    // causes too many issues and it soon becomes tiresome with some tools
    // requiring defaults and others forbidding them or requiring a certain
    // named export.
    'import/prefer-default-export': OFF,
  },
}
