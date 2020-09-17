const { ERROR, OFF, WARN } = require('./_const')

module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        /**
         * Recommended to turn off these eslint built-in rules
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/eslint-recommended.ts
         */

        // ts(2335) & ts(2377)
        'constructor-super': OFF,
        // ts(2378)
        'getter-return': OFF,
        // ts(2588)
        'no-const-assign': OFF,
        // ts(2300)
        'no-dupe-args': OFF,
        // ts(2393) & ts(2300)
        'no-dupe-class-members': OFF,
        // ts(1117)
        'no-dupe-keys': OFF,
        // ts(2539)
        'no-func-assign': OFF,
        // ts(2539) & ts(2540)
        'no-import-assign': OFF,
        // ts(2588)
        'no-new-symbol': OFF,
        // ts(2349)
        'no-obj-calls': OFF,
        // ts(2451)
        'no-redeclare': OFF,
        // ts(2408)
        'no-setter-return': OFF,
        // ts(2376)
        'no-this-before-super': OFF,
        // ts(2304)
        'no-undef': OFF,
        // ts(7027)
        'no-unreachable': OFF,
        // ts(2365) & ts(2360) & ts(2358)
        'no-unsafe-negation': OFF,
        // ts transpiles let/const to var, so no need for vars any more
        'no-var': ERROR,
        // ts provides better types with const
        'prefer-const': ERROR,
        // ts provides better types with rest args over arguments
        'prefer-rest-params': ERROR,
        // ts transpiles spread to apply, so no need for manual apply
        'prefer-spread': ERROR,
        // ts(2367)
        'valid-typeof': OFF,

        /**
         * TS Recommended
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.ts
         */

        '@typescript-eslint/adjacent-overload-signatures': ERROR,
        '@typescript-eslint/ban-ts-comment': ERROR,
        '@typescript-eslint/ban-types': ERROR,
        '@typescript-eslint/explicit-module-boundary-types': WARN,
        'no-array-constructor': OFF,
        '@typescript-eslint/no-array-constructor': ERROR,
        'no-empty-function': OFF,
        '@typescript-eslint/no-empty-function': ERROR,
        '@typescript-eslint/no-empty-interface': ERROR,
        '@typescript-eslint/no-explicit-any': WARN,
        'no-extra-semi': OFF,
        '@typescript-eslint/no-extra-semi': ERROR,
        '@typescript-eslint/no-inferrable-types': ERROR,
        '@typescript-eslint/no-misused-new': ERROR,
        '@typescript-eslint/no-namespace': ERROR,
        '@typescript-eslint/no-non-null-asserted-optional-chain': ERROR,
        '@typescript-eslint/no-non-null-assertion': WARN,
        '@typescript-eslint/no-this-alias': ERROR,
        '@typescript-eslint/no-var-requires': ERROR,
        '@typescript-eslint/prefer-as-const': ERROR,
        '@typescript-eslint/prefer-namespace-keyword': ERROR,
        '@typescript-eslint/triple-slash-reference': ERROR,

        /**
         * These are for type checking which I don't use eslint for
         */
        '@typescript-eslint/await-thenable': OFF,
        '@typescript-eslint/no-floating-promises': OFF,
        '@typescript-eslint/no-for-in-array': OFF,
        '@typescript-eslint/no-implied-eval': OFF,
        '@typescript-eslint/no-misused-promises': OFF,
        '@typescript-eslint/no-unnecessary-type-assertion': OFF,
        '@typescript-eslint/no-unsafe-assignment': OFF,
        '@typescript-eslint/no-unsafe-call': OFF,
        '@typescript-eslint/no-unsafe-member-access': OFF,
        '@typescript-eslint/no-unsafe-return': OFF,
        '@typescript-eslint/prefer-regexp-exec': OFF,
        '@typescript-eslint/require-await': OFF,
        '@typescript-eslint/restrict-plus-operands': OFF,
        '@typescript-eslint/restrict-template-expressions': OFF,
        '@typescript-eslint/unbound-method': OFF,

        /**
         * Tweaks
         */

        // Don't mind if functions do not have return types.
        '@typescript-eslint/explicit-function-return-type': OFF,

        // Disallow non-null assertion in locations that may be confusing
        '@typescript-eslint/no-confusing-non-null-assertion': WARN,

        // Variables must be used unless name ends with "ignored"
        'no-unused-vars': OFF,
        '@typescript-eslint/no-unused-vars': [
          ERROR,
          { varsIgnorePattern: '[iI]gnored' },
        ],

        'no-use-before-define': OFF,
        '@typescript-eslint/no-use-before-define': [ERROR],

        // Requires using T[] over Array<T> for arrays
        '@typescript-eslint/array-type': [WARN, { default: 'array' }],

        'lines-between-class-members': OFF,
        '@typescript-eslint/lines-between-class-members': [
          WARN,
          'always',
          { exceptAfterOverload: true },
        ],

        // Require a consistent member declaration order
        '@typescript-eslint/member-ordering': ERROR,

        // ❌
        // interface T1 {
        //  func(arg: string): number;
        // }
        // ✅
        // interface T1 {
        //  func: (arg: string) => number;
        // }
        '@typescript-eslint/method-signature-style': WARN,

        // Disallow duplicate class members
        '@typescript-eslint/no-dupe-class-members': ERROR,

        // ❌ const bar = foo!!!.bar
        // ✅ const bar = foo!.bar
        '@typescript-eslint/no-extra-non-null-assertion': WARN,

        // Disallows usage of void type outside of generic or return types
        '@typescript-eslint/no-invalid-void-type': ERROR,

        // Disallow this keywords outside of classes or class-like objects
        'no-invalid-this': OFF,
        '@typescript-eslint/no-invalid-this': ERROR,

        // Disallow literal numbers that lose precision
        'no-loss-of-precision': OFF,
        '@typescript-eslint/no-loss-of-precision': [ERROR],

        // Aims to eliminate unused expressions which have no effect on the state of the program.
        'no-unused-expressions': OFF,
        '@typescript-eslint/no-unused-expressions': [ERROR],

        // Require that all enum members be literal values to prevent unintended enum member name shadow issues.
        '@typescript-eslint/prefer-literal-enum-member': ERROR,

        // Prefer using concise optional chain expressions instead of chained logical ands
        '@typescript-eslint/prefer-optional-chain': ERROR,

        // Recommends using // @ts-expect-error over // @ts-ignore
        '@typescript-eslint/prefer-ts-expect-error': WARN,

        // Use single quotes and disallow strings to use backticks
        quotes: OFF,
        '@typescript-eslint/quotes': [
          WARN,
          'single',
          { avoidEscape: true, allowTemplateLiterals: false },
        ],

        /**
         * REACT tweaks
         */

        // No need for prop types when using TS.
        'react/prop-types': OFF,
      },
    },
  ],
}
