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
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json
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
         * Tweaks
         */

        // Don't mind if functions do not have return types.
        '@typescript-eslint/explicit-function-return-type': OFF,

        // Variables must be used unless name ends with "ignored"
        'no-unused-vars': OFF,
        '@typescript-eslint/no-unused-vars': [
          ERROR,
          { varsIgnorePattern: '[iI]gnored' },
        ],

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

        // Aims to eliminate unused expressions which have no effect on the state of the program.
        'no-unused-expressions': OFF,
        '@typescript-eslint/no-unused-expressions': [ERROR],

        // Prefer using concise optional chain expressions instead of chained logical ands
        '@typescript-eslint/prefer-optional-chain': ERROR,

        // Recommends using // @ts-expect-error over // @ts-ignore
        '@typescript-eslint/prefer-ts-expect-error': WARN,

        // Use single quotes and disallow strings to use backticks
        quotes: 'off',
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
