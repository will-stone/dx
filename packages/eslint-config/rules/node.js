const { ERROR, OFF } = require('./_const')

module.exports = {
  rules: {
    // Enforces return statements in callbacks of array's methods
    'node/callback-return': ERROR,

    // require() should be called only in the top level of a module to make it
    // easier to identify dependencies.
    'node/global-require': ERROR,

    // This rule expects that when you're using the callback pattern in Node.js
    // you'll handle the error.
    'node/handle-callback-err': ERROR,

    // Disallow require calls to be mixed with regular variable declarations.
    'node/no-mixed-requires': ERROR,

    // ❌ var appHeader = new require('app-header')
    // ✅ var AppHeader = require('app-header')
    //    var appHeader = new AppHeader()
    'no-new-require': ERROR,

    // Disallow string concatenation when using __dirname and __filename.
    // Use path.join() instead.
    'node/no-path-concat': ERROR,

    // Allow env vars in code
    'node/no-process-env': OFF,

    // Handled by Unicorn
    'node/no-process-exit': OFF,

    // No modules are restricted
    'node/no-restricted-require': OFF,

    // I like synchronous functions
    'node/no-sync': OFF,

    // Not sure I need this...?
    // TODO check others' configs to see how they use this.
    'node/shebang': OFF,
  },
}
