const { ERROR, OFF, WARN } = require('./_const')

module.exports = {
  rules: {
    // Only allow JSX in these file types:
    'react/jsx-filename-extension': [ERROR, { extensions: ['.jsx', '.tsx'] }],

    /**
     * React
     */

    // Components can use any props.
    'react/forbid-component-props': OFF,

    // Functional components can use any style.
    'react/function-component-definition': OFF,

    // ❌ <div class="hello">Hello World</div>
    // ✅ <div className="hello">Hello World</div>
    'react/no-unknown-property': WARN,

    // Require prop types.
    'react/prop-types': OFF,

    // Do not enforce React components to have a shouldComponentUpdate method.
    'react/require-optimization': OFF,

    // Prevent extra closing tags for components without children.
    'react/self-closing-comp': WARN,

    /**
     * JSX-specific rules
     */

    // ❌ <Hello personal={true} />
    // ✅ <Hello personal />
    'react/jsx-boolean-value': WARN,

    // disallow unnecessary curly braces in JSX props and/or children.
    'react/jsx-curly-brace-presence': WARN,

    // Enforce shorthand for React fragments.
    'react/jsx-fragments': WARN,

    // Unlimited JSX nesting.
    'react/jsx-max-depth': OFF,

    // ✅ <div>test</div>
    // ✅ <div>{'test'}</div>
    'react/jsx-no-literals': OFF,

    // Disallow unnecessary fragments.
    'react/jsx-no-useless-fragment': WARN,

    // It is common to create wrappers around html elements and so prop spreading
    // has been allowed for these but enabled on all other components.
    'react/jsx-props-no-spreading': [ERROR, { html: 'ignore' }],

    // Alphabetical sorting of props
    'react/jsx-sort-props': [WARN, { reservedFirst: true }],

    /**
     * React Hooks
     */

    // Checks effect dependencies
    'react-hooks/exhaustive-deps': WARN,

    // Checks rules of Hooks
    'react-hooks/rules-of-hooks': ERROR,
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
        /**
         * ESLint built-in tweaks
         */

        // It is common to use these lifecycle methods without using "this".
        'class-methods-use-this': [
          ERROR,
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
