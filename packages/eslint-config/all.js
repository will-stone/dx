module.exports = {
  extends: [
    './index.js',
    './node.js',
    './react.js',
    './jest.js',
    './typescript',
  ].map(require.resolve),
}
