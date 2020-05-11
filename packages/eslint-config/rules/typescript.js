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

        // Checked by Typescript - ts(2378)
        'getter-return': 'off',
        // Checked by Typescript - ts(2300)
        'no-dupe-args': 'off',
        // Checked by Typescript - ts(1117)
        'no-dupe-keys': 'off',
        // Checked by Typescript - ts(7027)
        'no-unreachable': 'off',
        // Checked by Typescript - ts(2367)
        'valid-typeof': 'off',
        // Checked by Typescript - ts(2588)
        'no-const-assign': 'off',
        // Checked by Typescript - ts(2588)
        'no-new-symbol': 'off',
        // Checked by Typescript - ts(2376)
        'no-this-before-super': 'off',
        // This is checked by Typescript using the option `strictNullChecks`.
        'no-undef': 'off',
        // This is already checked by Typescript.
        'no-dupe-class-members': 'off',
        // This is already checked by Typescript.
        'no-redeclare': 'off',

        /**
         * TS Recommended
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json
         */

        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-types': 'error',
        camelcase: 'off',
        '@typescript-eslint/camelcase': 'error',
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/interface-name-prefix': 'error',
        '@typescript-eslint/member-delimiter-style': 'error',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/no-this-alias': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',

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
        '@typescript-eslint/prefer-optional-chain': [WARN],

        // Recommends using // @ts-expect-error over // @ts-ignore
        // TODO [2020-06-01]: ts-expect doesn't exist yet, has ts 3.9 been released yet?
        // '@typescript-eslint/prefer-ts-expect-error': WARN,

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
