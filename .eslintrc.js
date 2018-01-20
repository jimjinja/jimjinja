// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  // https://github.com/babel/babel-eslint
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  // https://github.com/airbnb/javascript
  extends: 'airbnb-base',
  globals: {
    __static: true
  },
  // https://github.com/BenoitZugmeyer/eslint-plugin-html
  plugins: [
    'html'
  ],
  // https://eslint.org/docs/rules/
  'rules': {
    // require require() calls to be placed at top-level module scope
    'global-require': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': 'off',
    // disallow reassigning function parameters
    'no-param-reassign': 'off',
    // disallow variable declarations from shadowing variables declared in the outer scope
    'no-shadow': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': 'off',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': 'off',
    // disallow use of chained assignment expressions
    'no-multi-assign': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};