// @ts-check
const { defineConfig } = require('eslint-define-config')

// custom your own eslint config here.
module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: '@antfu/eslint-config',
  plugins: [
    'jest',
  ],
  rules: {
    'react/no-string-refs': 'off',
    'react/no-unknown-property': 'off',
    'vue/no-deprecated-functional-template': 'off',
    'vue/one-component-per-file': 'off',
    'vue/no-template-shadow': 'off',
    'vue/require-prop-types': 'off',
    'spaced-comment': ['error', 'always', { exceptions: ['#__PURE__'] }],
    'node/no-callback-literal': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
  },
  overrides: [
    // ...
  ],
})
