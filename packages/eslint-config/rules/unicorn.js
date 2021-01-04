module.exports = {
  rules: {
    // Improve regexes by making them shorter, consistent, and safer
    'unicorn/better-regex': 'warn',

    // Catch error argument name should be "error"
    'unicorn/catch-error-name': 'error',

    // I like nested arrow fns and this can mess with those
    // This would error: () => dispatch => setTimeout(() => dispatch(action), 500)
    'unicorn/consistent-function-scoping': 'off',

    // Custom Error classes must conform to standard
    'unicorn/custom-error-definition': 'warn',

    // Enforce no spaces between braces
    'unicorn/empty-brace-spaces': 'warn',

    // Enforces a message value to be passed in when throwing built-in Error
    'unicorn/error-message': 'error',

    // Enforces defining escape sequence values with uppercase characters rather
    // than lowercase ones. This promotes readability by making the escaped
    // value more distinguishable from the identifier.
    'unicorn/escape-case': 'warn',

    // Allows todo/fixme to be given expiry conditions and will error when met
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/expiring-todo-comments.md
    'unicorn/expiring-todo-comments': 'error',

    // Don't care how if(blah.length) is checked
    'unicorn/explicit-length-check': 'off',

    // TODO [eslint-plugin-unicorn@>=20] turn on when this feature added:
    // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/203
    'unicorn/filename-case': 'off',

    // Enforces importing index file with . instead of ./, ./index or ./index.js
    'unicorn/import-index': 'warn',

    // Not sure if this is useful yet
    'unicorn/import-style': 'off',

    // Enforce the use of new for all builtins, except String, Number and Boolean
    'unicorn/new-for-builtins': 'warn',

    // Enforce specifying rules to disable in eslint-disable comments
    'unicorn/no-abusive-eslint-disable': 'error',

    // Allow passing a function reference directly to iterator methods
    'unicorn/no-array-callback-reference': 'off',

    // for..of is much easier to read
    'unicorn/no-array-reduce': 'error',

    // Do not use leading/trailing space between console.log parameters
    'unicorn/no-console-spaces': 'warn',

    // Do not use a for loop that can be replaced with a for-of loop
    'unicorn/no-for-loop': 'warn',

    // Enforce the use of Unicode escapes instead of hexadecimal escapes
    'unicorn/no-hex-escape': 'warn',

    // Require Array.isArray() instead of instanceof Array
    'unicorn/no-instanceof-array': 'warn',

    // Disallow identifiers (var names) starting with new.
    // Do not check properties and allow "class" so that "className" is allowed.
    'unicorn/no-keyword-prefix': [
      'error',
      { blacklist: ['new'], checkProperties: false },
    ],

    // This rule adds onto the built-in no-lonely-if rule, which only forbids if
    // statements in else, not in if.
    'unicorn/no-lonely-if': 'warn',

    // Enforce the use of Buffer.from() and Buffer.alloc() instead of the
    // deprecated new Buffer()
    'unicorn/no-new-buffer': 'warn',

    // Disallow the use of the null literal, to encourage using undefined instead.
    'unicorn/no-null': 'error',

    // Disallow the use of objects as default parameters
    'unicorn/no-object-as-default-parameter': 'error',

    // Extension to ESLint's no-process-exit rule, that allows process.exit() to
    // be called in files that start with a hashbang → #!/usr/bin/env node
    'unicorn/no-process-exit': 'error',

    // ❌ let foo = undefined;
    // ✅ let foo;
    'unicorn/no-useless-undefined': 'warn',

    // Disallow [,, foo], use ignored vars instead
    'unicorn/no-unreadable-array-destructuring': 'error',

    // Uses safe-regex to disallow potentially catastrophic exponential-time regular expressions.
    // Turned off for now, even Sindre doesn't like it: https://github.com/sindresorhus/eslint-plugin-unicorn/issues/153
    'unicorn/no-unsafe-regex': 'off',

    // Recommended config turned this off so I will too
    'unicorn/no-unused-properties': 'off',

    // Disallow number literals with zero fractions or dangling dots
    'unicorn/no-zero-fractions': 'warn',

    // Enforce the style of numeric separators by correctly grouping digits
    'unicorn/numeric-separators-style': 'warn',

    // Prefer .addEventListener() and .removeEventListener() over on-functions
    'unicorn/prefer-add-event-listener': 'warn',

    // Prefer .find(…) over the first element from .filter(…)
    'unicorn/prefer-array-find': 'warn',

    // Prefer .flatMap(…) over .map(…).flat()
    'unicorn/prefer-array-flat-map': 'warn',

    // Prefer using Array#some over Array#find when ensuring at least one element
    // in the array passes a given check.
    'unicorn/prefer-array-some': 'error',

    // Prefer Date.now() to get the number of milliseconds since the Unix Epoch
    'unicorn/prefer-date-now': 'warn',

    // Prefer default parameters over reassignment
    'unicorn/prefer-default-parameters': 'warn',

    // Prefer Node#append() over Node#appendChild()
    'unicorn/prefer-dom-node-append': 'warn',

    // Prefer using .dataset on DOM elements over .setAttribute(…)
    'unicorn/prefer-dom-node-dataset': 'warn',

    // Prefer node.remove() over parentNode.removeChild(node) and parentElement.removeChild(node)
    'unicorn/prefer-dom-node-remove': 'warn',

    // Prefer .textContent over .innerText
    'unicorn/prefer-dom-node-text-content': 'warn',

    // Prefer .includes() over .indexOf() when checking for existence or non-existence
    'unicorn/prefer-includes': 'warn',

    // Prefer KeyboardEvent#key over KeyboardEvent#keyCode
    'unicorn/prefer-keyboard-event-key': 'warn',

    // Enforce the use of Math.trunc instead of bitwise operators
    'unicorn/prefer-math-trunc': 'warn',

    // e.g. foo.insertBefore(baz, bar) -> foo.before(bar, 'baz')
    'unicorn/prefer-modern-dom-apis': 'warn',

    // Prefer negative index over .length - index
    // for {String,Array,TypedArray}#slice() and Array#splice()
    'unicorn/prefer-negative-index': 'warn',

    // Prefer Number static properties over global ones
    'unicorn/prefer-number-properties': 'warn',

    // Prefer omitting the catch binding parameter
    'unicorn/prefer-optional-catch-binding': 'warn',

    // Prefer .querySelector() over .getElementById(),
    // .querySelectorAll() over .getElementsByClassName() and .getElementsByTagName()
    'unicorn/prefer-query-selector': 'warn',

    // Prefer Reflect.apply() over Function#apply()
    'unicorn/prefer-reflect-apply': 'warn',

    // Prefer Set#has() over Array#includes() when checking for existence or non-existence
    // Set#has() is faster than Array#includes().
    'unicorn/prefer-set-has': 'warn',

    // Prefer the spread operator over Array.from()
    'unicorn/prefer-spread': 'warn',

    // Prefer String#startsWith() & String#endsWith() over more complex alternatives
    'unicorn/prefer-string-starts-ends-with': 'error',

    // Prefer String#replaceAll() over regex searches with the global flag
    'unicorn/prefer-string-replace-all': 'warn',

    // Prefer String#slice() over String#substr() and String#substring()
    'unicorn/prefer-string-slice': 'warn',

    // Prefer String#trimStart() / String#trimEnd() over String#trimLeft() / String#trimRight()
    'unicorn/prefer-string-trim-start-end': 'warn',

    // Prefer ternary expressions over simple if-else statements
    'unicorn/prefer-ternary': 'warn',

    // Enforce throwing TypeError in type checking conditions
    'unicorn/prefer-type-error': 'warn',

    // Using complete words results in more readable code. Not everyone knows all your abbreviations.
    // Code is written only once, but read many times.
    'unicorn/prevent-abbreviations': [
      'warn',
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
    'unicorn/regex-shorthand': 'warn',

    // No swaps needed yet
    'unicorn/string-content': 'off',

    // Require new when throwing an error
    'unicorn/throw-new-error': 'warn',
  },
}
