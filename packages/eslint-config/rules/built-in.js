// The ESLint browser environment defines all browser globals as valid,
// Even though most people don't know some of them exist (e.g. `name` or `status`).
// This is dangerous as it hides accidentally undefined variables.
// We blacklist the globals that we deem potentially confusing.
// To use them, explicitly reference them, e.g. `window.name` or `window.status`.
const restrictedGlobals = require('confusing-browser-globals')

const { ERROR, OFF, WARN } = require('./_const')

module.exports = {
  rules: {
    /**
     * OFF
     */

    // Can cause issues when Prettier is enabled
    'arrow-body-style': OFF,
    'prefer-arrow-callback': OFF,

    // Write comments however you like
    'capitalized-comments': OFF,

    // Disallows specified identifiers.
    // Maybe turn this on when it's obvious which identifiers do not make sense.
    // Rules like unicorn/catch-error-name look after some of these, anyway.
    'id-blacklist': OFF,

    // Allow variables named with as little chars as you like
    'id-length': OFF,

    // Requires identifiers to match a specified regular expression.
    // Mainly covered by rules like "camelcase". This could probably cause more
    // trouble than it's worth.
    'id-match': OFF,

    // Initialise vairables however you like
    'init-declarations': OFF,

    // Put lines between comments however you like
    'lines-around-comment': OFF,

    // Let prettier handle this and am not worried if Prettier does not deal with
    // all strings. There may be occasions where long strings look better when
    // then go over the 80 char limit; comments, for example.
    'max-len': OFF,

    // Files can contain as many lines as you like
    'max-lines': OFF,

    // Functions can be as complicated as you like
    'max-lines-per-function': OFF,

    // Enforces a maximum number of parameters allowed in function definitions.
    // This is usually to help readability but TS self-documents this kind of thing.
    'max-params': OFF,

    // Statements can be as complicated as you like
    'max-statements': OFF,

    // Allow any style of multiline comments
    'multiline-comment-style': OFF,

    // Disallowing magic numbers causes all sorts of problems
    'no-magic-numbers': OFF,

    // Let Prettier deal with this
    'no-mixed-operators': OFF,

    // No imports are restricted
    'no-restricted-imports': OFF,

    // No properties are restricted
    'no-restricted-properties': OFF,

    // No syntax is restricted
    'no-restricted-syntax': OFF,

    // Tabs are handled by Prettier
    'no-tabs': OFF,

    // Simple ternaries are okay
    'no-ternary': OFF,

    // Can cause conflicts with Prettier
    'no-unexpected-multiline': OFF,

    // Allow TODOs and FIXMEs
    'no-warning-comments': OFF,

    // Allow regex to be left as-is
    'prefer-named-capture-group': OFF,

    // Sorting imports is handled by simple-import-sort
    'sort-imports': OFF,

    // Allow object keys to be in any order
    'sort-keys': OFF,

    // Not required as one-var rule is set to ERROR and so there will never be vars to sort.
    'sort-vars': OFF,

    /**
     * WARN
     */

    // never omit curly braces around blocks
    curly: [WARN, 'all'],

    // Access properties using the dot notation.
    'dot-notation': WARN,

    // Use === over ==
    eqeqeq: WARN,

    // Require an empty line between class members
    'lines-between-class-members': WARN,

    // Disallow arrow functions where they could be confused with comparisons.
    'no-confusing-arrow': [WARN, { allowParens: false }],

    // Disallow the use of console
    'no-console': WARN,

    // Require regex literals to escape division operators.
    'no-div-regex': WARN,

    // If an `if` block contains a return statement, the else block becomes
    // unnecessary. Its contents can be placed outside of the block.
    'no-else-return': WARN,

    // Disallow unnecessary function binding
    'no-extra-bind': WARN,

    // In contexts such as an if statement's test where the result of the
    // expression will already be coerced to a Boolean, casting to a Boolean via
    // double negation (!!) or a Boolean call is unnecessary.
    'no-extra-boolean-cast': WARN,

    // If a loop contains no nested loops or switches, labeling the loop is unnecessary.
    'no-extra-label': WARN,

    // Disallow the type conversion with shorter notations.
    'no-implicit-coercion': WARN,

    // Disallow if statements as the only statement in else blocks.
    'no-lonely-if': WARN,

    // Disallow multiple spaces in regular expression literals.
    'no-regex-spaces': WARN,

    // Disallow initializing to undefined.
    'no-undef-init': WARN,

    // Disallow ternary operators when simpler alternatives exist.
    'no-unneeded-ternary': WARN,

    // Labels that are declared and not used anywhere in the code are most
    // likely an error due to incomplete refactoring.
    'no-unused-labels': WARN,

    // A return; statement with nothing after it is redundant, and has no effect
    // on the runtime behavior of a function. This can be confusing, so it's
    // better to disallow these redundant statements.
    'no-useless-return': WARN,

    // Require let or const instead of var.
    'no-var': WARN,

    // Functions declared in object keys must conform to a certain style
    // Capitalised functions are exempt as they are probably constructor functions
    'object-shorthand': [WARN, 'always', { ignoreConstructors: true }],

    // Prevent combined variable declarations
    'one-var': [WARN, 'never'],

    // Disallow assignment operator shorthand where possible.
    'operator-assignment': [WARN, 'never'],

    'padding-line-between-statements': [
      WARN,
      { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
    ],

    // If a variable is never reassigned, using the const declaration is better.
    'prefer-const': WARN,

    // Make compatible with Unicorn's no-unreadable-array-destructuring
    'prefer-destructuring': [WARN, { object: true, array: false }],

    // Introduced in ES2016, the infix exponentiation operator ** is an
    // alternative for the standard Math.pow function. Infix notation is
    // considered to be more readable and thus more preferable than the function notation.
    'prefer-exponentiation-operator': WARN,

    // This rule disallows calls to parseInt() or Number.parseInt() if called
    // with two arguments: a string; and a radix option of 2 (binary), 8 (octal),
    // or 16 (hexadecimal).
    'prefer-numeric-literals': WARN,

    // Prefer use of an object spread over Object.assign()
    'prefer-object-spread': WARN,

    // Suggest using template literals instead of string concatenation.
    'prefer-template': WARN,

    // Use single quotes and disallow strings to use backticks
    quotes: [
      WARN,
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],

    // All comments must have a space after the //
    // This also allows /// reference comments
    'spaced-comment': [WARN, 'always', { markers: ['/'] }],

    // As modules are used nearly all of the time, this probably isn't required,
    // but leaving it on just in case.
    strict: WARN,

    // ❌ if ('red' === color) {}
    // ✅ if (color === 'red') {}
    yoda: WARN,

    /**
     * ERROR
     */

    // Enforces getter/setter pairs in objects and classes
    'accessor-pairs': ERROR,

    // Enforces return statements in callbacks of array's methods
    'array-callback-return': ERROR,

    // Generates warnings when variables are used outside of the
    // block in which they were defined
    'block-scoped-var': ERROR,

    // camelCase vars
    camelcase: ERROR,

    // If a class method does not use this,
    // it can sometimes be made into a static function
    'class-methods-use-this': ERROR,

    // Measures the number of linearly independent paths through a program's
    // source code. Not sure if this is required, defaults to 20 paths though so
    // should be ok.
    complexity: ERROR,

    // Require return statements to always specify values
    'consistent-return': ERROR,

    // Not sure if required
    'consistent-this': ERROR,

    // Constructors of derived classes must call super().
    // Constructors of non derived classes must not call super()
    'constructor-super': ERROR,

    // Require Default Case in Switch Statements
    'default-case': ERROR,

    // Putting default parameter at last allows function calls
    // to omit optional tail arguments.
    'default-param-last': ERROR,

    // Enforce "for" loop update clause moving the counter in the right direction
    'for-direction': ERROR,

    // Requires function expressions to have a name,
    // If the name cannot be assigned automatically
    'func-names': [ERROR, 'as-needed'],

    // Require function names to match the name of the variable or property to
    // which they are assigned.
    'func-name-matching': ERROR,

    // Declaration style: function name() {}
    // Except arrow functions
    'func-style': [ERROR, 'declaration', { allowArrowFunctions: true }],

    // Enforces that a return statement is present in property getters
    'getter-return': ERROR,

    // If a property has a getter and a setter, the setter should be defined
    // right after the getter, or vice versa.
    'grouped-accessor-pairs': ERROR,

    // This rule is aimed at preventing unexpected behavior that could arise
    // from using a for in loop without filtering the results in the loop.
    'guard-for-in': ERROR,

    // Enforces line comments positioned above code
    'line-comment-position': ERROR,

    // Files containing multiple classes can often result in a less navigable
    // and poorly structuredcodebase. Best practice is to keep each file limited
    // to a single responsibility.
    'max-classes-per-file': ERROR,

    // This rule enforces a maximum depth that blocks can be nested to reduce
    // code complexity. Might turn this off it gets in the way too much.
    'max-depth': ERROR,

    // This rule enforces a maximum depth that callbacks can be nested to
    // increase code clarity. Defaults to 10.
    'max-nested-callbacks': ERROR,

    // Enforces maximum number of statements allowed per line to 1.
    'max-statements-per-line': ERROR,

    // Require constructor names to begin with a capital letter
    'new-cap': ERROR,

    // alert is often used while debugging code, which should be removed before
    // deployment to production.
    'no-alert': ERROR,

    // Use of the Array constructor to construct a new array is generally
    // discouraged in favor of array literal notation because of the
    // single-argument pitfall and because the Array global may be redefined.
    // The exception is when the Array constructor is used to intentionally
    // create sparse arrays of a specified size by giving the constructor a
    // single numeric argument.
    'no-array-constructor': ERROR,

    // The executor function can also be an async function.
    // However, this is usually a mistake:
    // https://eslint.org/docs/rules/no-async-promise-executor#top
    'no-async-promise-executor': ERROR,

    // Use Promise.all() instead
    'no-await-in-loop': ERROR,

    // Use of bitwise operators in JavaScript is very rare and often & or | is
    // simply a mistyped && or ||, which will lead to unexpected behavior.
    'no-bitwise': ERROR,

    // Use the producer methods Buffer.from, Buffer.alloc,
    // and Buffer.allocUnsafe instead.
    'no-buffer-constructor': ERROR,

    // arguments.caller and arguments.callee ave been deprecated in future
    // versions of JavaScript and their use is forbidden in ECMAScript 5 while
    // in strict mode.
    'no-caller': ERROR,

    // Disallows lexical declarations (let, const, function and class) in
    // case/default clauses. To ensure that the lexical declaration only applies
    // to the current case clause wrap your clauses in blocks.
    'no-case-declarations': ERROR,

    // Disallow modifying variables of class declarations
    'no-class-assign': ERROR,

    // Disallow comparing against -0
    'no-compare-neg-zero': ERROR,

    // Disallow assignment operators in conditional statements. e.g.
    // if (user.jobTitle = "manager") { }
    'no-cond-assign': ERROR,

    // Disallow modifying variables that are declared using const
    'no-const-assign': ERROR,

    // Disallow constant expressions in conditions
    // if (true) {}
    'no-constant-condition': ERROR,

    // Disallows return statements in the constructor of a class
    'no-constructor-return': ERROR,

    // Disallow continue statements.
    // When used incorrectly it makes code less testable, less readable and less
    // maintainable. Structured control flow statements such as if should be
    // used instead.
    'no-continue': ERROR,

    // Control characters are special, invisible characters in the ASCII range
    // 0-31. These characters are rarely used in JavaScript strings so a regular
    // expression containing these characters is most likely a mistake.
    'no-control-regex': ERROR,

    // The debugger statement is used to tell the executing JavaScript
    // environment to stop execution and start up a debugger at the current
    // point in the code. This has fallen out of favor as a good practice with
    // the advent of modern debugging and development tools.
    'no-debugger': ERROR,

    // The purpose of the delete operator is to remove a property from an
    // object. Using the delete operator on a variable might lead to unexpected
    // behavior.
    'no-delete-var': ERROR,

    // function foo(a, b, a) { } // duplicate "a" arg
    'no-dupe-args': ERROR,

    // class Foo {
    //   bar() { console.log("hello") }
    //   bar() { console.log("goodbye") } // duplicate class member
    // }
    'no-dupe-class-members': ERROR,

    // if (isSomething(x)) {
    //   foo()
    // } else if (isSomething(x)) { // duplicate condition
    //   bar()
    // }
    'no-dupe-else-if': ERROR,

    // const foo = {
    //   bar: "baz",
    //   bar: "qux" // duplicate key
    // }
    'no-dupe-keys': ERROR,

    // switch (a) {
    //   case 1:
    //     break
    //   case 2:
    //     break
    //   case 1: // duplicate test expression
    //     break
    //   default:
    //     break
    // }
    'no-duplicate-case': ERROR,

    // Combine named imports in single statement.
    'no-duplicate-imports': ERROR,

    // Disallow empty block statements.
    'no-empty': ERROR,

    // Disallow empty character classes in regular expressions.
    'no-empty-character-class': ERROR,

    // Disallow empty functions.
    'no-empty-function': ERROR,

    // Disallow empty destructuring patterns.
    'no-empty-pattern': ERROR,

    // Error: if (foo == null)
    // Good: if (foo === null)
    'no-eq-null': ERROR,

    // Disallow eval()
    'no-eval': ERROR,

    // Disallow reassigning exceptions in catch clauses.
    'no-ex-assign': ERROR,

    // Disallow extending of native objects.
    'no-extend-native': ERROR,

    // Disallow case statement fallthrough.
    'no-fallthrough': ERROR,

    // Disallow reassigning function declarations.
    'no-func-assign': ERROR,

    // Disallow assignment to native objects or read-only global variables.
    'no-global-assign': ERROR,

    // Disallow declarations in the global scope.
    'no-implicit-globals': ERROR,

    // There are some other ways to pass a string and have it interpreted as
    // JavaScript code that have similar concerns.
    // e.g. setTimeout("alert('Hi!');", 100);
    'no-implied-eval': ERROR,

    // Disallow assigning to imported bindings.
    'no-import-assign': ERROR,

    // Disallow inline comments after code.
    'no-inline-comments': ERROR,

    // Disallow variable or function declarations in nested blocks.
    'no-inner-declarations': ERROR,

    // Disallow invalid regular expression strings in RegExp constructors.
    'no-invalid-regexp': ERROR,

    // Disallow this keywords outside of classes or class-like objects.
    'no-invalid-this': ERROR,

    // Invalid or irregular whitespace causes issues with ECMAScript 5 parsers
    // and also makes code harder to debug in a similar nature to mixed tabs and spaces.
    'no-irregular-whitespace': ERROR,

    // The __iterator__ property was a SpiderMonkey extension to JavaScript that
    // could be used to create custom iterators that are compatible with
    // JavaScript's for in and for each constructs. However, this property is
    // now obsolete, so it should not be used.
    'no-iterator': ERROR,

    // Disallow labels that are variables names.
    'no-label-var': ERROR,

    // While convenient in some cases, labels tend to be used only rarely and
    // are frowned upon by some as a remedial form of flow control that is more
    // error prone and harder to understand.
    'no-labels': ERROR,

    // Disallow unnecessary nested blocks
    'no-lone-blocks': ERROR,

    // Writing functions within loops tends to result in errors due to the way
    // the function creates a closure around the loop.
    'no-loop-func': ERROR,

    // Disallow characters which are made with multiple code points in character class syntax.
    'no-misleading-character-class': ERROR,

    // const foo = bar = "baz"
    'no-multi-assign': ERROR,

    // var x = "Line 1 \
    //          Line 2"
    'no-multi-str': ERROR,

    // Negated conditions are more difficult to understand. Code can be made
    // more readable by inverting the condition instead.
    'no-negated-condition': ERROR,

    // Disallow nested ternary expressions
    'no-nested-ternary': ERROR,

    // Disallows constructor calls using the new keyword that do not assign
    // the resulting object to a variable.
    'no-new': ERROR,

    // ❌ Function()
    // ✅ function()
    'no-new-func': ERROR,

    // ❌ var myObject = new Object()
    // ✅ var myObject = {}
    'no-new-object': ERROR,

    // Symbol is not intended to be used with the new operator, but to be called
    //  as a function.
    'no-new-symbol': ERROR,

    // This rule aims to eliminate the use of String, Number, and Boolean with
    // the new operator. As such, it warns whenever it sees new String,
    // new Number, or new Boolean.
    'no-new-wrappers': ERROR,

    // This rule disallows calling the Math, JSON, Reflect and Atomics objects as functions.
    'no-obj-calls': ERROR,

    // the leading zero which identifies an octal literal has been a source of
    // confusion and error in JavaScript code, ECMAScript 5 deprecates the use
    // of octal numeric literals.
    'no-octal': ERROR,

    // As of the ECMAScript 5 specification, octal escape sequences in string
    // literals are deprecated and should not be used. Unicode escape sequences
    // should be used instead.
    'no-octal-escape': ERROR,

    // Assignment to variables declared as function parameters can be misleading
    // and lead to confusing behavior, as modifying function parameters will
    // also mutate the arguments object.
    'no-param-reassign': ERROR,

    // Because the unary ++ and -- operators are subject to automatic semicolon
    // insertion, differences in whitespace can change semantics of source code.
    'no-plusplus': ERROR,

    // __proto__ property has been deprecated as of ECMAScript 3.1 and shouldn't
    // be used in the code. Use Object.getPrototypeOf and Object.setPrototypeOf instead.
    'no-proto': ERROR,

    // Disallow use of Object.prototypes builtins directly.
    'no-prototype-builtins': ERROR,

    // Disallow variable redeclaration.
    'no-redeclare': ERROR,

    // Global variable names that are dangerous to use by mistake
    'no-restricted-globals': [ERROR, ...restrictedGlobals],

    // Disallow assignment in return statement
    'no-return-assign': ERROR,

    // Disallows unnecessary return await
    'no-return-await': ERROR,

    // ❌ location.href = "javascript:void(0)"
    'no-script-url': ERROR,

    // Self assignments have no effect.
    // ❌ foo = foo
    'no-self-assign': ERROR,

    // Comparing a variable against itself is usually an error, either a typo or
    // refactoring error.
    'no-self-compare': ERROR,

    // Disallow use of the comma operator.
    'no-sequences': ERROR,

    // Disallow returning values from setters.
    'no-setter-return': ERROR,

    // Disallow variable declarations from shadowing variables declared in the outer scope.
    'no-shadow': ERROR,

    // ES5 Value Properties of the Global Object (NaN, Infinity, undefined) as
    // well as strict mode restricted identifiers eval and arguments are considered
    // to be restricted names in JavaScript. Defining them to mean something
    // else can have unintended consequences and confuse others reading the code.
    'no-shadow-restricted-names': ERROR,

    // This rule disallows sparse array literals which have "holes" where commas
    //  are not preceded by elements. It does not apply to a trailing comma
    // following the last element. Use ignored values instead.
    'no-sparse-arrays': ERROR,

    // Disallow template literal placeholder syntax in regular strings.
    'no-template-curly-in-string': ERROR,

    // Disallow use of this/super before calling super() in constructors.
    'no-this-before-super': ERROR,

    // Maintain consistency when throwing exception by disallowing to throw
    // literals and other expressions which cannot possibly be an Error object.
    'no-throw-literal': ERROR,

    // Disallow undeclared variables.
    'no-undef': ERROR,

    // Prevent undefined from being overwritten.
    'no-undefined': ERROR,

    // Disallow dangling underscores in identifiers.
    'no-underscore-dangle': ERROR,

    // Disallow unmodified conditions of loops
    'no-unmodified-loop-condition': ERROR,

    // Disallow unreachable code after return, throw, continue, and break statements.
    'no-unreachable': ERROR,

    // Disallow control flow statements in finally blocks.
    'no-unsafe-finally': ERROR,

    // Disallow negating the left operand of relational operators.
    'no-unsafe-negation': ERROR,

    // An unused expression which has no effect on the state of the program
    // indicates a logic error.
    'no-unused-expressions': ERROR,

    // Variables must be used unless name starts with "ignored"
    'no-unused-vars': [ERROR, { varsIgnorePattern: '[iI]gnored' }],

    // It's possible to use identifiers before their formal declarations in code.
    // This can be confusing and some believe it is best to always declare
    // variables and functions before using them.
    'no-use-before-define': ERROR,

    // Function.prototype.call() and Function.prototype.apply() are slower than
    // the normal function invocation.
    'no-useless-call': ERROR,

    // A catch clause that only rethrows the original error is redundant, and
    // has no effect on the runtime behavior of the program.
    'no-useless-catch': ERROR,

    // ❌ var foo = {['a']: 'b'}
    // ✅ var foo = {a: 'b'}
    'no-useless-computed-key': ERROR,

    // ❌ var foo = 'a' + 'b'
    // ✅ var foo = 'ab'
    'no-useless-concat': ERROR,

    // ES2015 provides a default class constructor if one is not specified. As
    // such, it isunnecessary to provide an empty constructor or one that simply
    // delegates into its parent class.
    'no-useless-constructor': ERROR,

    // Escaping non-special characters in strings, template literals, and
    // regular expressions doesn't have any effect.
    'no-useless-escape': ERROR,

    // Disallow renaming import, export, and destructured assignments to the same name.
    'no-useless-rename': ERROR,

    // Disallow use of the void operator.
    'no-void': ERROR,

    // The with statement is potentially problematic because it adds members of
    // an object to the current scope, making it impossible to tell what a
    // variable inside the block actually refers to.
    'no-with': ERROR,

    // It is considered good practice to only pass instances of the built-in
    // Error object to the reject() function for user-defined errors in Promises.
    // Error objects automatically store a stack trace, which can be used to
    // debug an error by determining where it came from. If a Promise is rejected
    // with a non-Error value, it can be difficult to determine where the rejection occurred.
    'prefer-promise-reject-errors': ERROR,

    // Disallow use of the RegExp constructor in favor of regular expression literals.
    'prefer-regex-literals': ERROR,

    // Suggest using the rest parameters instead of `arguments`.
    'prefer-rest-params': ERROR,

    // Suggest using spread syntax instead of `.apply()`.
    'prefer-spread': ERROR,

    // When using the parseInt() function it is common to omit the second argument,
    // the radix, and let the function try to determine from the first argument
    // what type of number it is. By default, parseInt() will autodetect decimal
    // and hexadecimal (via 0x prefix). Prior to ECMAScript 5, parseInt() also
    // autodetected octal literals, which caused problems because many developers
    // assumed a leading 0 would be ignored.
    radix: ERROR,

    // Disallow assignments that can lead to race conditions due to usage of await or yield.
    'require-atomic-updates': ERROR,

    // Disallow async functions which have no await expression.
    'require-await': ERROR,

    // Enforce the use of 'u' flag on RegExp.
    'require-unicode-regexp': ERROR,

    // Disallow generator functions that do not have yield.
    'require-yield': ERROR,

    // Using description promotes easier debugging.
    // ✅ var foo = Symbol("some description")
    'symbol-description': ERROR,

    // Require calls to isNaN() when checking for NaN.
    'use-isnan': ERROR,

    // Enforce comparing typeof expressions against valid strings.
    'valid-typeof': ERROR,

    // By default variable declarations are always moved (“hoisted”) invisibly
    // to the top of their containing scope by the JavaScript interpreter.
    // This rule forces the programmer to represent that behavior by manually
    // moving the variable declaration to the top of its containing scope.
    'vars-on-top': ERROR,
  },
}
