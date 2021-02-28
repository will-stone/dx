module.exports = {
  rules: {
    // Only allow JSX in these file types:
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

    /**
     * React
     */

    // Components can use any props.
    'react/forbid-component-props': 'off',

    // Functional components can use any style.
    'react/function-component-definition': 'off',

    // Allow as many components per file as you like
    'react/no-multi-comp': 'off',

    // ❌ <div class="hello">Hello World</div>
    // ✅ <div className="hello">Hello World</div>
    'react/no-unknown-property': 'warn',

    // Require prop types.
    'react/prop-types': 'off',

    // Do not enforce React components to have a shouldComponentUpdate method.
    'react/require-optimization': 'off',

    // Prevent extra closing tags for components without children.
    'react/self-closing-comp': 'warn',

    /**
     * JSX-specific rules
     */

    // ❌ <Hello personal={true} />
    // ✅ <Hello personal />
    'react/jsx-boolean-value': 'warn',

    // disallow unnecessary curly braces in JSX props and/or children.
    'react/jsx-curly-brace-presence': 'warn',

    // Enforce shorthand for React fragments.
    'react/jsx-fragments': 'warn',

    // Unlimited JSX nesting.
    'react/jsx-max-depth': 'off',

    // Enforce a new line after jsx elements and expressions
    'react/jsx-newline': 'warn',

    // I haven't found any modern benchmarks for disallowing inline arrow
    // functions, and quite frankly it feels like this "optimisation" is just
    // people repeating sentiments from old blog posts.
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
      },
    ],

    // ✅ <div>test</div>
    // ✅ <div>{'test'}</div>
    'react/jsx-no-literals': 'off',

    // Disallow unnecessary fragments.
    'react/jsx-no-useless-fragment': 'warn',

    // Allow prop spreading, you know the dangers!
    'react/jsx-props-no-spreading': 'off',

    // Alphabetical sorting of props
    'react/jsx-sort-props': ['warn', { reservedFirst: true }],

    /**
     * React Hooks
     */

    // Checks effect dependencies
    'react-hooks/exhaustive-deps': 'warn',

    // Checks rules of Hooks
    'react-hooks/rules-of-hooks': 'error',
  },

  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        // It is common to use these lifecycle methods without using "this".
        'class-methods-use-this': [
          'error',
          {
            exceptMethods: [
              'render',
              'getInitialState',
              'getDefaultProps',
              'getChildContext',
              'componentWillMount',
              'componentDidMount',
              'componentWillReceiveProps',
              'shouldComponentUpdate',
              'componentWillUpdate',
              'componentDidUpdate',
              'componentWillUnmount',
              'componentDidCatch',
            ],
          },
        ],
      },
    },
  ],
}
