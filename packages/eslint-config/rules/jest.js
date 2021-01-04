module.exports = {
  rules: {
    // Consistent test function names
    // test
    // describe -> it
    'jest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'it' }],

    // Enforce it, test and describe to have descriptions that begin with a
    // lowercase letter. This provides more readable test failures.
    'jest/lowercase-name': 'warn',

    // Consistent expect methods
    'jest/no-alias-methods': 'error',

    // Prevent calling expect conditionally
    'jest/no-conditional-expect': 'error',

    // Do not allow multiple beforeEach, for example
    'jest/no-duplicate-hooks': 'error',

    // No standalone expect in a describe block
    'jest/no-standalone-expect': 'error',

    // Tests shouldn't return anything
    'jest/no-test-return-statement': 'error',

    // beforeEach, beforeAll, afterEach etc. should be at top of test block
    'jest/prefer-hooks-on-top': 'error',

    // By overwriting a property with `jest.fn()` you have to manually restore
    // the original implementation when cleaning up. When using jest.spyOn()
    // Jest keeps track of changes, and they can be restored.
    'jest/prefer-spy-on': 'error',

    // .toBe(null) -> .toBeNull()
    'jest/prefer-to-be-null': 'error',

    // .toBe(undefined) -> .toBeUndefined()
    'jest/prefer-to-be-undefined': 'error',

    // expect(a.includes(b)).toBe(true) -> expect(a).toContain(b)
    'jest/prefer-to-contain': 'error',

    // expect(files.length).toBe(1) -> expect(files).toHaveLength(1)
    'jest/prefer-to-have-length': 'error',

    // When test cases are empty then it is better to mark them as test.todo
    // as it will be highlighted in the summary output
    'jest/prefer-todo': 'error',

    // Requiring a message ensures that the intended error is thrown
    'jest/require-to-throw-message': 'error',

    // Titles are...
    // - not empty
    // - is a string
    // - not prefixed with their block name
    // - have no leading or trailing spaces
    'jest/valid-title': 'error',
  },
}
