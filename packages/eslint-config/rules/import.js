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

    // All the rules, off for now until I know whether I need them
    'import/default': OFF,
    'import/dynamic-import-chunkname': OFF,
    'import/exports-last': OFF,
    'import/extensions': OFF,
    'import/first': OFF,
    'import/group-exports': OFF,
    'import/max-dependencies': OFF,
    'import/named': OFF,
    'import/namespace': OFF,
    'import/no-absolute-path': OFF,
    'import/no-amd': OFF,
    'import/no-anonymous-default-export': OFF,
    'import/no-commonjs': OFF,
    'import/no-cycle': OFF,
    'import/no-default-export': OFF,
    'import/no-deprecated': OFF,
    'import/no-duplicates': OFF,
    'import/no-dynamic-require': OFF,
    'import/no-extraneous-dependencies': OFF,
    'import/no-internal-modules': OFF,
    'import/no-mutable-exports': OFF,
    'import/no-named-as-default': OFF,
    'import/no-named-as-default-member': OFF,
    'import/no-named-default': OFF,
    'import/no-named-export': OFF,
    'import/no-namespace': OFF,
    'import/no-nodejs-modules': OFF,
    'import/no-relative-parent-imports': OFF,
    'import/no-restricted-paths': OFF,
    'import/no-self-import': OFF,
    'import/no-unassigned-import': OFF,
    'import/no-unresolved': OFF,
    'import/no-unused-modules': OFF,
    'import/no-useless-path-segments': OFF,
    'import/no-webpack-loader-syntax': OFF,
    'import/order': OFF,
    'import/unambiguous': OFF,
  },
}
