// The ESLint browser environment defines all browser globals as valid,
// Even though most people don't know some of them exist (e.g. `name` or `status`).
// This is dangerous as it hides accidentally undefined variables.
// We blacklist the globals that we deem potentially confusing.
// To use them, explicitly reference them, e.g. `window.name` or `window.status`.
const restrictedGlobals = require('confusing-browser-globals')

module.exports = {
  rules: {
    // Enforces getter/setter pairs in objects and classes
    'accessor-pairs': 'error',

    // Enforces return statements in callbacks of array's methods
    'array-callback-return': [
      'error',
      // To be compatible with unicorn/no-useless-undefined
      { allowImplicit: true },
    ],

    // Can cause issues when Prettier is enabled
    'arrow-body-style': 'off',

    // Generates warnings when variables are used outside of the
    // block in which they were defined
    'block-scoped-var': 'error',

    // camelCase vars
    camelcase: 'error',

    // Write comments however you like
    'capitalized-comments': 'off',

    // If a class method does not use this,
    // it can sometimes be made into a static function
    'class-methods-use-this': 'error',

    // Measures the number of linearly independent paths through a program's
    // source code. Rubbish. Use your own judgement on complexity.
    complexity: 'off',

    // Not sure if required
    'consistent-this': 'error',

    // Do not care how return statements specify values.
    // When on, this rule gets annoying when combined with Unicorn's no-useless-* rules.
    'consistent-return': 'off',

    // Constructors of derived classes must call super().
    // Constructors of non derived classes must not call super()
    'constructor-super': 'error',

    // never omit curly braces around blocks
    curly: ['warn', 'all'],

    // Require Default Case in Switch Statements
    'default-case': 'error',

    // enforce default clauses in switch statements to be last
    'default-case-last': 'error',

    // Putting default parameter at last allows function calls
    // to omit optional tail arguments.
    'default-param-last': 'error',

    // Access properties using the dot notation.
    'dot-notation': 'warn',

    // Use === over ==
    eqeqeq: 'warn',

    // Enforce "for" loop update clause moving the counter in the right direction
    'for-direction': 'error',

    // Requires function expressions to have a name,
    // If the name cannot be assigned automatically
    'func-names': ['error', 'as-needed'],

    // Require function names to match the name of the variable or property to
    // which they are assigned.
    'func-name-matching': 'error',

    // Declaration style: function name() {}
    // Except arrow functions
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

    // Enforces that a return statement is present in property getters
    'getter-return': 'error',

    // If a property has a getter and a setter, the setter should be defined
    // right after the getter, or vice versa.
    'grouped-accessor-pairs': 'error',

    // This rule is aimed at preventing unexpected behavior that could arise
    // from using a for in loop without filtering the results in the loop.
    'guard-for-in': 'error',

    // Disallows specified identifiers.
    // Maybe turn this on when it's obvious which identifiers do not make sense.
    // Rules like unicorn/catch-error-name look after some of these, anyway.
    'id-denylist': 'off',

    // Allow variables named with as little chars as you like
    'id-length': 'off',

    // Requires identifiers to match a specified regular expression.
    // Mainly covered by rules like "camelcase". This could probably cause more
    // trouble than it's worth.
    'id-match': 'off',

    // Initialise vairables however you like
    'init-declarations': 'off',

    // Put lines between comments however you like
    'lines-around-comment': 'off',

    // Enforces line comments positioned above code
    'line-comment-position': 'error',

    // Require an empty line between class members
    'lines-between-class-members': 'warn',

    // Organise classes how you see fit
    'max-classes-per-file': 'off',

    // This rule enforces a maximum depth that blocks can be nested to reduce
    // code complexity. Might turn this off it gets in the way too much.
    'max-depth': 'error',

    // Let prettier handle this and am not worried if Prettier does not deal with
    // all strings. There may be occasions where long strings look better when
    // then go over the 80 char limit; comments, for example.
    'max-len': 'off',

    // Files can contain as many lines as you like
    'max-lines': 'off',

    // Functions can be as complicated as you like
    'max-lines-per-function': 'off',

    // This rule enforces a maximum depth that callbacks can be nested to
    // increase code clarity. Defaults to 10.
    'max-nested-callbacks': 'error',

    // Enforces a maximum number of parameters allowed in function definitions.
    // This is usually to help readability but TS self-documents this kind of thing.
    'max-params': 'off',

    // Statements can be as complicated as you like
    'max-statements': 'off',

    // Enforces maximum number of statements allowed per line to 1.
    'max-statements-per-line': 'error',

    // Allow any style of multiline comments
    'multiline-comment-style': 'off',

    // Require constructor names to begin with a capital letter
    'new-cap': 'error',

    // alert is often used while debugging code, which should be removed before
    // deployment to production.
    'no-alert': 'error',

    // Use of the Array constructor to construct a new array is generally
    // discouraged in favor of array literal notation because of the
    // single-argument pitfall and because the Array global may be redefined.
    // The exception is when the Array constructor is used to intentionally
    // create sparse arrays of a specified size by giving the constructor a
    // single numeric argument.
    'no-array-constructor': 'error',

    // The executor function can also be an async function.
    // However, this is usually a mistake:
    // https://eslint.org/docs/rules/no-async-promise-executor#top
    'no-async-promise-executor': 'error',

    // Use Promise.all() instead
    'no-await-in-loop': 'error',

    // Use of bitwise operators in JavaScript is very rare and often & or | is
    // simply a mistyped && or ||, which will lead to unexpected behavior.
    'no-bitwise': 'error',

    // Use the producer methods Buffer.from, Buffer.alloc,
    // and Buffer.allocUnsafe instead.
    'no-buffer-constructor': 'error',

    // arguments.caller and arguments.callee ave been deprecated in future
    // versions of JavaScript and their use is forbidden in ECMAScript 5 while
    // in strict mode.
    'no-caller': 'error',

    // Disallows lexical declarations (let, const, function and class) in
    // case/default clauses. To ensure that the lexical declaration only applies
    // to the current case clause wrap your clauses in blocks.
    'no-case-declarations': 'error',

    // Disallow modifying variables of class declarations
    'no-class-assign': 'error',

    // Disallow comparing against -0
    'no-compare-neg-zero': 'error',

    // Disallow assignment operators in conditional statements. e.g.
    // if (user.jobTitle = "manager") { }
    'no-cond-assign': 'error',

    // Disallow arrow functions where they could be confused with comparisons.
    'no-confusing-arrow': ['warn', { allowParens: false }],

    // Disallow the use of console
    'no-console': 'warn',

    // Disallow modifying variables that are declared using const
    'no-const-assign': 'error',

    // Disallow constant expressions in conditions
    // if (true) {}
    'no-constant-condition': 'error',

    // Disallows return statements in the constructor of a class
    'no-constructor-return': 'error',

    // Disallow continue statements.
    // When used incorrectly it makes code less testable, less readable and less
    // maintainable. Structured control flow statements such as if should be
    // used instead.
    'no-continue': 'error',

    // Control characters are special, invisible characters in the ASCII range
    // 0-31. These characters are rarely used in JavaScript strings so a regular
    // expression containing these characters is most likely a mistake.
    'no-control-regex': 'error',

    // The debugger statement is used to tell the executing JavaScript
    // environment to stop execution and start up a debugger at the current
    // point in the code. This has fallen out of favor as a good practice with
    // the advent of modern debugging and development tools.
    'no-debugger': 'error',

    // The purpose of the delete operator is to remove a property from an
    // object. Using the delete operator on a variable might lead to unexpected
    // behavior.
    'no-delete-var': 'error',

    // Require regex literals to escape division operators.
    'no-div-regex': 'warn',

    // function foo(a, b, a) { } // duplicate "a" arg
    'no-dupe-args': 'error',

    // class Foo {
    //   bar() { console.log("hello") }
    //   bar() { console.log("goodbye") } // duplicate class member
    // }
    'no-dupe-class-members': 'error',

    // if (isSomething(x)) {
    //   foo()
    // } else if (isSomething(x)) { // duplicate condition
    //   bar()
    // }
    'no-dupe-else-if': 'error',

    // const foo = {
    //   bar: "baz",
    //   bar: "qux" // duplicate key
    // }
    'no-dupe-keys': 'error',

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
    'no-duplicate-case': 'error',

    // Combine named imports in single statement.
    'no-duplicate-imports': 'error',

    // If an `if` block contains a return statement, the else block becomes
    // unnecessary. Its contents can be placed outside of the block.
    'no-else-return': 'warn',

    // Disallow empty block statements.
    'no-empty': 'error',

    // Disallow empty character classes in regular expressions.
    'no-empty-character-class': 'error',

    // Disallow empty functions.
    'no-empty-function': 'error',

    // Disallow empty destructuring patterns.
    'no-empty-pattern': 'error',

    // Error: if (foo == null)
    // Good: if (foo === null)
    'no-eq-null': 'error',

    // Disallow eval()
    'no-eval': 'error',

    // Disallow reassigning exceptions in catch clauses.
    'no-ex-assign': 'error',

    // Disallow extending of native objects.
    'no-extend-native': 'error',

    // Disallow unnecessary function binding
    'no-extra-bind': 'warn',

    // In contexts such as an if statement's test where the result of the
    // expression will already be coerced to a Boolean, casting to a Boolean via
    // double negation (!!) or a Boolean call is unnecessary.
    'no-extra-boolean-cast': 'warn',

    // If a loop contains no nested loops or switches, labeling the loop is unnecessary.
    'no-extra-label': 'warn',

    // Disallow case statement fallthrough.
    'no-fallthrough': 'error',

    // Disallow reassigning function declarations.
    'no-func-assign': 'error',

    // Disallow assignment to native objects or read-only global variables.
    'no-global-assign': 'error',

    // Disallow the type conversion with shorter notations.
    'no-implicit-coercion': 'warn',

    // Disallow declarations in the global scope.
    'no-implicit-globals': 'error',

    // There are some other ways to pass a string and have it interpreted as
    // JavaScript code that have similar concerns.
    // e.g. setTimeout("alert('Hi!');", 100);
    'no-implied-eval': 'error',

    // Disallow assigning to imported bindings.
    'no-import-assign': 'error',

    // Disallow inline comments after code.
    'no-inline-comments': 'error',

    // Disallow variable or function declarations in nested blocks.
    'no-inner-declarations': 'error',

    // Disallow invalid regular expression strings in RegExp constructors.
    'no-invalid-regexp': 'error',

    // Disallow this keywords outside of classes or class-like objects.
    'no-invalid-this': 'error',

    // Invalid or irregular whitespace causes issues with ECMAScript 5 parsers
    // and also makes code harder to debug in a similar nature to mixed tabs and spaces.
    'no-irregular-whitespace': 'error',

    // The __iterator__ property was a SpiderMonkey extension to JavaScript that
    // could be used to create custom iterators that are compatible with
    // JavaScript's for in and for each constructs. However, this property is
    // now obsolete, so it should not be used.
    'no-iterator': 'error',

    // Disallow labels that are variables names.
    'no-label-var': 'error',

    // While convenient in some cases, labels tend to be used only rarely and
    // are frowned upon by some as a remedial form of flow control that is more
    // error prone and harder to understand.
    'no-labels': 'error',

    // Disallow unnecessary nested blocks
    'no-lone-blocks': 'error',

    // Disallow if statements as the only statement in else blocks.
    'no-lonely-if': 'warn',

    // Writing functions within loops tends to result in errors due to the way
    // the function creates a closure around the loop.
    'no-loop-func': 'error',

    // Disallow the use of number literals that immediately lose precision at
    // runtime when converted to a JS Number due to 64-bit floating-point rounding.
    'no-loss-of-precision': 'error',

    // Disallowing magic numbers causes all sorts of problems
    'no-magic-numbers': 'off',

    // Disallow characters which are made with multiple code points in character class syntax.
    'no-misleading-character-class': 'error',

    // Let Prettier deal with this
    'no-mixed-operators': 'off',

    // const foo = bar = "baz"
    'no-multi-assign': 'error',

    // var x = "Line 1 \
    //          Line 2"
    'no-multi-str': 'error',

    // Negated conditions are more difficult to understand. Code can be made
    // more readable by inverting the condition instead.
    'no-negated-condition': 'error',

    // Disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // Disallows constructor calls using the new keyword that do not assign
    // the resulting object to a variable.
    'no-new': 'error',

    // ❌ Function()
    // ✅ function()
    'no-new-func': 'error',

    // ❌ var myObject = new Object()
    // ✅ var myObject = {}
    'no-new-object': 'error',

    // Symbol is not intended to be used with the new operator, but to be called
    //  as a function.
    'no-new-symbol': 'error',

    // This rule aims to eliminate the use of String, Number, and Boolean with
    // the new operator. As such, it warns whenever it sees new String,
    // new Number, or new Boolean.
    'no-new-wrappers': 'error',

    // Disallow \8 and \9 escape sequences in string literals
    'no-nonoctal-decimal-escape': 'error',

    // This rule disallows calling the Math, JSON, Reflect and Atomics objects as functions.
    'no-obj-calls': 'error',

    // the leading zero which identifies an octal literal has been a source of
    // confusion and error in JavaScript code, ECMAScript 5 deprecates the use
    // of octal numeric literals.
    'no-octal': 'error',

    // As of the ECMAScript 5 specification, octal escape sequences in string
    // literals are deprecated and should not be used. Unicode escape sequences
    // should be used instead.
    'no-octal-escape': 'error',

    // Assignment to variables declared as function parameters can be misleading
    // and lead to confusing behavior, as modifying function parameters will
    // also mutate the arguments object.
    'no-param-reassign': 'error',

    // Because the unary ++ and -- operators are subject to automatic semicolon
    // insertion, differences in whitespace can change semantics of source code.
    'no-plusplus': 'error',

    // Disallow returning values from Promise executor functions
    'no-promise-executor-return': 'error',

    // __proto__ property has been deprecated as of ECMAScript 3.1 and shouldn't
    // be used in the code. Use Object.getPrototypeOf and Object.setPrototypeOf instead.
    'no-proto': 'error',

    // Disallow use of Object.prototypes builtins directly.
    'no-prototype-builtins': 'error',

    // Disallow variable redeclaration.
    'no-redeclare': 'error',

    // Disallow multiple spaces in regular expression literals.
    'no-regex-spaces': 'warn',

    // No export names are restricted
    'no-restricted-exports': 'off',

    // Global variable names that are dangerous to use by mistake
    'no-restricted-globals': ['error', ...restrictedGlobals],

    // No imports are restricted
    'no-restricted-imports': 'off',

    // No properties are restricted
    'no-restricted-properties': 'off',

    // No syntax is restricted
    'no-restricted-syntax': 'off',

    // Disallow assignment in return statement
    'no-return-assign': 'error',

    // Disallows unnecessary return await
    'no-return-await': 'error',

    // ❌ location.href = "javascript:void(0)"
    'no-script-url': 'error',

    // Self assignments have no effect.
    // ❌ foo = foo
    'no-self-assign': 'error',

    // Comparing a variable against itself is usually an error, either a typo or
    // refactoring error.
    'no-self-compare': 'error',

    // Disallow use of the comma operator.
    'no-sequences': 'error',

    // Disallow returning values from setters.
    'no-setter-return': 'error',

    // Disallow variable declarations from shadowing variables declared in the outer scope.
    'no-shadow': 'error',

    // ES5 Value Properties of the Global Object (NaN, Infinity, undefined) as
    // well as strict mode restricted identifiers eval and arguments are considered
    // to be restricted names in JavaScript. Defining them to mean something
    // else can have unintended consequences and confuse others reading the code.
    'no-shadow-restricted-names': 'error',

    // This rule disallows sparse array literals which have "holes" where commas
    //  are not preceded by elements. It does not apply to a trailing comma
    // following the last element. Use ignored values instead.
    'no-sparse-arrays': 'error',

    // Tabs are handled by Prettier
    'no-tabs': 'off',

    // Disallow template literal placeholder syntax in regular strings.
    'no-template-curly-in-string': 'error',

    // Simple ternaries are okay
    'no-ternary': 'off',

    // Disallow use of this/super before calling super() in constructors.
    'no-this-before-super': 'error',

    // Maintain consistency when throwing exception by disallowing to throw
    // literals and other expressions which cannot possibly be an Error object.
    'no-throw-literal': 'error',

    // Disallow undeclared variables.
    'no-undef': 'error',

    // Disallow initializing to undefined.
    'no-undef-init': 'warn',

    // Allow undefined. Use no-global-assign and no-shadow-restricted-names
    // rules to prevent undefined from being shadowed or assigned a different value.
    'no-undefined': 'off',

    // Allow dangling underscores in identifiers.
    'no-underscore-dangle': 'off',

    // Disallow unmodified conditions of loops
    'no-unmodified-loop-condition': 'error',

    // Disallow ternary operators when simpler alternatives exist.
    'no-unneeded-ternary': 'warn',

    // Disallow unreachable code after return, throw, continue, and break statements.
    'no-unreachable': 'error',

    // Disallow loops with a body that allows only one iteration
    'no-unreachable-loop': 'error',

    // Disallow control flow statements in finally blocks.
    'no-unsafe-finally': 'error',

    // Disallow negating the left operand of relational operators.
    'no-unsafe-negation': 'error',

    // Disallow use of optional chaining in contexts where the `undefined` value is not allowed
    'no-unsafe-optional-chaining': 'error',

    // An unused expression which has no effect on the state of the program
    // indicates a logic error.
    'no-unused-expressions': 'error',

    // Labels that are declared and not used anywhere in the code are most
    // likely an error due to incomplete refactoring.
    'no-unused-labels': 'warn',

    // Variables must be used unless name starts with "ignored"
    'no-unused-vars': ['error', { varsIgnorePattern: '[iI]gnored' }],

    // Can cause conflicts with Prettier
    'no-unexpected-multiline': 'off',

    // It's possible to use identifiers before their formal declarations in code.
    // This can be confusing and some believe it is best to always declare
    // variables and functions before using them.
    'no-use-before-define': 'error',

    // A return; statement with nothing after it is redundant, and has no effect
    // on the runtime behavior of a function. This can be confusing, so it's
    // better to disallow these redundant statements.
    'no-useless-return': 'warn',

    // Do I need this? https://eslint.org/docs/rules/no-useless-backreference
    'no-useless-backreference': 'off',

    // Function.prototype.call() and Function.prototype.apply() are slower than
    // the normal function invocation.
    'no-useless-call': 'error',

    // A catch clause that only rethrows the original error is redundant, and
    // has no effect on the runtime behavior of the program.
    'no-useless-catch': 'error',

    // ❌ var foo = {['a']: 'b'}
    // ✅ var foo = {a: 'b'}
    'no-useless-computed-key': 'error',

    // ❌ var foo = 'a' + 'b'
    // ✅ var foo = 'ab'
    'no-useless-concat': 'error',

    // ES2015 provides a default class constructor if one is not specified. As
    // such, it isunnecessary to provide an empty constructor or one that simply
    // delegates into its parent class.
    'no-useless-constructor': 'error',

    // Escaping non-special characters in strings, template literals, and
    // regular expressions doesn't have any effect.
    'no-useless-escape': 'error',

    // Disallow renaming import, export, and destructured assignments to the same name.
    'no-useless-rename': 'error',

    // Require let or const instead of var.
    'no-var': 'warn',

    // Disallow use of the void operator.
    'no-void': 'error',

    // Allow TODOs and FIXMEs
    'no-warning-comments': 'off',

    // The with statement is potentially problematic because it adds members of
    // an object to the current scope, making it impossible to tell what a
    // variable inside the block actually refers to.
    'no-with': 'error',

    // Functions declared in object keys must conform to a certain style
    // Capitalised functions are exempt as they are probably constructor functions
    'object-shorthand': ['warn', 'always', { ignoreConstructors: true }],

    // Prevent combined variable declarations
    'one-var': ['warn', 'never'],

    // Disallow assignment operator shorthand where possible.
    'operator-assignment': ['warn', 'never'],

    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
    ],

    // Can cause issues when Prettier is enabled
    'prefer-arrow-callback': 'off',

    // If a variable is never reassigned, using the const declaration is better.
    'prefer-const': 'warn',

    // Make compatible with Unicorn's no-unreadable-array-destructuring
    'prefer-destructuring': ['warn', { object: true, array: false }],

    // Introduced in ES2016, the infix exponentiation operator ** is an
    // alternative for the standard Math.pow function. Infix notation is
    // considered to be more readable and thus more preferable than the function notation.
    'prefer-exponentiation-operator': 'warn',

    // Allow regex to be left as-is
    'prefer-named-capture-group': 'off',

    // This rule disallows calls to parseInt() or Number.parseInt() if called
    // with two arguments: a string; and a radix option of 2 (binary), 8 (octal),
    // or 16 (hexadecimal).
    'prefer-numeric-literals': 'warn',

    // Prefer use of an object spread over Object.assign()
    'prefer-object-spread': 'warn',

    // It is considered good practice to only pass instances of the built-in
    // Error object to the reject() function for user-defined errors in Promises.
    // Error objects automatically store a stack trace, which can be used to
    // debug an error by determining where it came from. If a Promise is rejected
    // with a non-Error value, it can be difficult to determine where the rejection occurred.
    'prefer-promise-reject-errors': 'error',

    // Disallow use of the RegExp constructor in favor of regular expression literals.
    'prefer-regex-literals': 'error',

    // Suggest using the rest parameters instead of `arguments`.
    'prefer-rest-params': 'error',

    // Suggest using spread syntax instead of `.apply()`.
    'prefer-spread': 'error',

    // Suggest using template literals instead of string concatenation.
    'prefer-template': 'warn',

    // Use single quotes and disallow strings to use backticks
    quotes: [
      'warn',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],

    // When using the parseInt() function it is common to omit the second argument,
    // the radix, and let the function try to determine from the first argument
    // what type of number it is. By default, parseInt() will autodetect decimal
    // and hexadecimal (via 0x prefix). Prior to ECMAScript 5, parseInt() also
    // autodetected octal literals, which caused problems because many developers
    // assumed a leading 0 would be ignored.
    radix: 'error',

    // Disallow assignments that can lead to race conditions due to usage of await or yield.
    'require-atomic-updates': 'error',

    // Disallow async functions which have no await expression.
    'require-await': 'error',

    // Enforce the use of 'u' flag on RegExp.
    'require-unicode-regexp': 'error',

    // Disallow generator functions that do not have yield.
    'require-yield': 'error',

    // Sorting imports is handled by simple-import-sort
    'sort-imports': 'off',

    // Allow object keys to be in any order
    'sort-keys': 'off',

    // Not required as one-var rule is set to 'error' and so there will never be vars to sort.
    'sort-vars': 'off',

    // All comments must have a space after the //
    // This also allows /// reference comments
    'spaced-comment': ['warn', 'always', { markers: ['/'] }],

    // As modules are used nearly all of the time, this probably isn't required,
    // but leaving it on just in case.
    strict: 'warn',

    // Using description promotes easier debugging.
    // ✅ var foo = Symbol("some description")
    'symbol-description': 'error',

    // Require calls to isNaN() when checking for NaN.
    'use-isnan': 'error',

    // Enforce comparing typeof expressions against valid strings.
    'valid-typeof': 'error',

    // By default variable declarations are always moved (“hoisted”) invisibly
    // to the top of their containing scope by the JavaScript interpreter.
    // This rule forces the programmer to represent that behavior by manually
    // moving the variable declaration to the top of its containing scope.
    'vars-on-top': 'error',

    // ❌ if ('red' === color) {}
    // ✅ if (color === 'red') {}
    yoda: 'warn',
  },
}
