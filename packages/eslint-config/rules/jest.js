const { ERROR } = require('./_const')

module.exports = {
  rules: {
    // Consistent test function names
    // test
    // describe -> it
    'jest/consistent-test-it': [ERROR, { fn: 'test', withinDescribe: 'it' }],

    // Consistent expect methods
    'jest/no-alias-methods': ERROR,

    // Do not allow multiple beforeEach, for example
    'jest/no-duplicate-hooks': ERROR,

    // Tests shouldn't return anything
    'jest/no-test-return-statement': ERROR,

    // Asserting toBeTruthy or toBeFalsy matches non-boolean values as well
    // and encourages weaker tests
    'jest/no-truthy-falsy': ERROR,

    // beforeEach, beforeAll, afterEach etc. should be at top of test block
    'jest/prefer-hooks-on-top': ERROR,

    // By overwriting a property with `jest.fn()` you have to manually restore
    // the original implementation when cleaning up. When using jest.spyOn()
    // Jest keeps track of changes, and they can be restored.
    'jest/prefer-spy-on': ERROR,

    // .toBe(null) -> .toBeNull()
    'jest/prefer-to-be-null': ERROR,

    // .toBe(undefined) -> .toBeUndefined()
    'jest/prefer-to-be-undefined': ERROR,

    // expect(a.includes(b)).toBe(true) -> expect(a).toContain(b)
    'jest/prefer-to-contain': ERROR,

    // expect(files.length).toBe(1) -> expect(files).toHaveLength(1)
    'jest/prefer-to-have-length': ERROR,

    // When test cases are empty then it is better to mark them as test.todo
    // as it will be highlighted in the summary output
    'jest/prefer-todo': ERROR,

    // Requiring a message ensures that the intended error is thrown
    'jest/require-to-throw-message': ERROR,

    // Titles are...
    // - not empty
    // - is a string
    // - not prefixed with their block name
    // - have no leading or trailing spaces
    'jest/valid-title': ERROR,
  },
}