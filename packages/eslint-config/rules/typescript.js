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
        'constructor-super': 'off',
        // ts(2378)
        'getter-return': 'off',
        // ts(2588)
        'no-const-assign': 'off',
        // ts(2300)
        'no-dupe-args': 'off',
        // ts(2393) & ts(2300)
        'no-dupe-class-members': 'off',
        // ts(1117)
        'no-dupe-keys': 'off',
        // ts(2539)
        'no-func-assign': 'off',
        // ts(2539) & ts(2540)
        'no-import-assign': 'off',
        // ts(2588)
        'no-new-symbol': 'off',
        // ts(2349)
        'no-obj-calls': 'off',
        // ts(2451)
        'no-redeclare': 'off',
        // ts(2408)
        'no-setter-return': 'off',
        // ts(2376)
        'no-this-before-super': 'off',
        // ts(2304)
        'no-undef': 'off',
        // ts(7027)
        'no-unreachable': 'off',
        // ts(2365) & ts(2360) & ts(2358)
        'no-unsafe-negation': 'off',
        // ts transpiles let/const to var, so no need for vars any more
        'no-var': 'error',
        // ts provides better types with const
        'prefer-const': 'error',
        // ts provides better types with rest args over arguments
        'prefer-rest-params': 'error',
        // ts transpiles spread to apply, so no need for manual apply
        'prefer-spread': 'error',
        // ts(2367)
        'valid-typeof': 'off',

        /**
         * TS Recommended
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.ts
         */

        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',

        /**
         * These are for type checking which I don't use eslint for
         */
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-for-in-array': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/non-nullable-type-assertion-style': 'off',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/prefer-regexp-exec': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/unbound-method': 'off',

        /**
         * Tweaks
         */

        // Don't mind if functions do not have return types.
        '@typescript-eslint/explicit-function-return-type': 'off',

        // Disallow non-null assertion in locations that may be confusing
        '@typescript-eslint/no-confusing-non-null-assertion': 'warn',

        // Disallow duplicate imports
        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': ['error'],

        // Variables must be used unless name ends with "ignored"
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { varsIgnorePattern: '[iI]gnored' },
        ],

        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],

        // Requires using T[] over Array<T> for arrays
        '@typescript-eslint/array-type': ['warn', { default: 'array' }],

        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': [
          'warn',
          'always',
          { exceptAfterOverload: true },
        ],

        // Require a consistent member declaration order
        '@typescript-eslint/member-ordering': 'error',

        // ❌
        // interface T1 {
        //  func(arg: string): number;
        // }
        // ✅
        // interface T1 {
        //  func: (arg: string) => number;
        // }
        '@typescript-eslint/method-signature-style': 'warn',

        // Disallow duplicate class members
        '@typescript-eslint/no-dupe-class-members': 'error',

        // ❌ const bar = foo!!!.bar
        // ✅ const bar = foo!.bar
        '@typescript-eslint/no-extra-non-null-assertion': 'warn',

        // Disallows usage of void type outside of generic or return types
        '@typescript-eslint/no-invalid-void-type': 'error',

        // Disallow this keywords outside of classes or class-like objects
        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': 'error',

        // Disallow literal numbers that lose precision
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': ['error'],

        // Aims to eliminate unused expressions which have no effect on the state of the program.
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': ['error'],

        // Disallows unnecessary constraints on generic types
        '@typescript-eslint/no-unnecessary-type-constraint': 'warn',

        // Require that all enum members be literal values to prevent unintended enum member name shadow issues.
        '@typescript-eslint/prefer-literal-enum-member': 'error',

        // Prefer using concise optional chain expressions instead of chained logical ands
        '@typescript-eslint/prefer-optional-chain': 'error',

        // Recommends using // @ts-expect-error over // @ts-ignore
        '@typescript-eslint/prefer-ts-expect-error': 'warn',

        // Use single quotes and disallow strings to use backticks
        quotes: 'off',
        '@typescript-eslint/quotes': [
          'warn',
          'single',
          { avoidEscape: true, allowTemplateLiterals: false },
        ],

        '@typescript-eslint/sort-type-union-intersection-members': 'warn',

        // This rule is aimed at ensuring there are spaces around infix operators.
        'space-infix-ops': 'off',
        '@typescript-eslint/space-infix-ops': ['warn', { int32Hint: false }],

        /**
         * REACT tweaks
         */

        // No need for prop types when using TS.
        'react/prop-types': 'off',
      },
    },
  ],
}
