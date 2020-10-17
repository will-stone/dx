const { ERROR, WARN, OFF } = require('./_const')

module.exports = {
  rules: {
    // Improve regexes by making them shorter, consistent, and safer
    'unicorn/better-regex': WARN,

    // Catch error argument name should be "error"
    'unicorn/catch-error-name': ERROR,

    // I like nested arrow fns and this can mess with those
    // This would error: () => dispatch => setTimeout(() => dispatch(action), 500)
    'unicorn/consistent-function-scoping': OFF,

    // Custom Error classes must conform to standard
    'unicorn/custom-error-definition': WARN,

    // Enforces a message value to be passed in when throwing built-in Error
    'unicorn/error-message': ERROR,

    // Enforces defining escape sequence values with uppercase characters rather
    // than lowercase ones. This promotes readability by making the escaped
    // value more distinguishable from the identifier.
    'unicorn/escape-case': WARN,

    // Allows todo/fixme to be given expiry conditions and will error when met
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/expiring-todo-comments.md
    'unicorn/expiring-todo-comments': ERROR,

    // Don't care how if(blah.length) is checked
    'unicorn/explicit-length-check': OFF,

    // TODO [eslint-plugin-unicorn@>=20] turn on when this feature added:
    // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/203
    'unicorn/filename-case': OFF,

    // Enforces importing index file with . instead of ./, ./index or ./index.js
    'unicorn/import-index': WARN,

    // Not sure if this is useful yet
    'unicorn/import-style': OFF,

    // Enforce the use of new for all builtins, except String, Number and Boolean
    'unicorn/new-for-builtins': WARN,

    // Enforce specifying rules to disable in eslint-disable comments
    'unicorn/no-abusive-eslint-disable': ERROR,

    // Require Array.isArray() instead of instanceof Array
    'unicorn/no-array-instanceof': WARN,

    // Do not use leading/trailing space between console.log parameters
    'unicorn/no-console-spaces': WARN,

    // Allow passing a function reference directly to iterator methods
    'unicorn/no-fn-reference-in-iterator': OFF,

    // Do not use a for loop that can be replaced with a for-of loop
    'unicorn/no-for-loop': WARN,

    // Enforce the use of Unicode escapes instead of hexadecimal escapes
    'unicorn/no-hex-escape': WARN,

    // Disallow identifiers (var names) starting with new.
    // Do not check properties and allow "class" so that "className" is allowed.
    'unicorn/no-keyword-prefix': [
      ERROR,
      { blacklist: ['new'], checkProperties: false },
    ],

    // Enforce the use of Buffer.from() and Buffer.alloc() instead of the
    // deprecated new Buffer()
    'unicorn/no-new-buffer': WARN,

    // Disallow the use of the null literal, to encourage using undefined instead.
    'unicorn/no-null': ERROR,

    // Disallow the use of objects as default parameters
    'unicorn/no-object-as-default-parameter': ERROR,

    // Extension to ESLint's no-process-exit rule, that allows process.exit() to
    // be called in files that start with a hashbang → #!/usr/bin/env node
    'unicorn/no-process-exit': ERROR,

    // for..of is much easier to read
    'unicorn/no-reduce': ERROR,

    // ❌ let foo = undefined;
    // ✅ let foo;
    'unicorn/no-useless-undefined': WARN,

    // Disallow [,, foo], use ignored vars instead
    'unicorn/no-unreadable-array-destructuring': ERROR,

    // Uses safe-regex to disallow potentially catastrophic exponential-time regular expressions.
    // Turned off for now, even Sindre doesn't like it: https://github.com/sindresorhus/eslint-plugin-unicorn/issues/153
    'unicorn/no-unsafe-regex': OFF,

    // Recommended config turned this off so I will too
    'unicorn/no-unused-properties': OFF,

    // Disallow number literals with zero fractions or dangling dots
    'unicorn/no-zero-fractions': WARN,

    // Enforce the style of numeric separators by correctly grouping digits
    'unicorn/numeric-separators-style': WARN,

    // Prefer .addEventListener() and .removeEventListener() over on-functions
    'unicorn/prefer-add-event-listener': WARN,

    // Prefer .find(…) over the first element from .filter(…)
    'unicorn/prefer-array-find': WARN,

    // Prefer using .dataset on DOM elements over .setAttribute(…)
    'unicorn/prefer-dataset': WARN,

    // Prefer KeyboardEvent#key over KeyboardEvent#keyCode
    'unicorn/prefer-event-key': WARN,

    // Prefer .flatMap(…) over .map(…).flat()
    'unicorn/prefer-flat-map': WARN,

    // Prefer .includes() over .indexOf() when checking for existence or non-existence
    'unicorn/prefer-includes': WARN,

    // Enforce the use of Math.trunc instead of bitwise operators
    'unicorn/prefer-math-trunc': WARN,

    // e.g. foo.insertBefore(baz, bar) -> foo.before(bar, 'baz')
    'unicorn/prefer-modern-dom-apis': WARN,

    // Prefer negative index over .length - index
    // for {String,Array,TypedArray}#slice() and Array#splice()
    'unicorn/prefer-negative-index': WARN,

    // Prefer Number static properties over global ones
    'unicorn/prefer-number-properties': WARN,

    // Prefer Node#append() over Node#appendChild()
    'unicorn/prefer-node-append': WARN,

    // Prefer node.remove() over parentNode.removeChild(node) and parentElement.removeChild(node)
    'unicorn/prefer-node-remove': WARN,

    // Prefer omitting the catch binding parameter
    'unicorn/prefer-optional-catch-binding': WARN,

    // Prefer .querySelector() over .getElementById(),
    // .querySelectorAll() over .getElementsByClassName() and .getElementsByTagName()
    'unicorn/prefer-query-selector': WARN,

    // Prefer Reflect.apply() over Function#apply()
    'unicorn/prefer-reflect-apply': WARN,

    // Prefer String#replaceAll() over regex searches with the global flag
    'unicorn/prefer-replace-all': WARN,

    // Prefer Set#has() over Array#includes() when checking for existence or non-existence
    // Set#has() is faster than Array#includes().
    'unicorn/prefer-set-has': WARN,

    // Prefer the spread operator over Array.from()
    'unicorn/prefer-spread': WARN,

    // Prefer String#startsWith() & String#endsWith() over more complex alternatives
    'unicorn/prefer-starts-ends-with': ERROR,

    // Prefer String#slice() over String#substr() and String#substring()
    'unicorn/prefer-string-slice': WARN,

    // Prefer ternary expressions over simple if-else statements
    'unicorn/prefer-ternary': WARN,

    // Prefer .textContent over .innerText
    'unicorn/prefer-text-content': WARN,

    // Prefer String#trimStart() / String#trimEnd() over String#trimLeft() / String#trimRight()
    'unicorn/prefer-trim-start-end': WARN,

    // Enforce throwing TypeError in type checking conditions
    'unicorn/prefer-type-error': WARN,

    // Using complete words results in more readable code. Not everyone knows all your abbreviations.
    // Code is written only once, but read many times.
    'unicorn/prevent-abbreviations': [
      WARN,
      {
        whitelist: {
          getInitialProps: true,
          getStaticProps: true,
          props: true,
          Props: true,
        },
      },
    ],

    // Enforce the use of regex shorthands to improve readability
    'unicorn/regex-shorthand': WARN,

    // No swaps needed yet
    'unicorn/string-content': OFF,

    // Require new when throwing an error
    'unicorn/throw-new-error': WARN,
  },
}
