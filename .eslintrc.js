module.exports = {
  'env': {
    'es6': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'react-hooks'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'react/jsx-uses-vars': [2],
    'react/prop-types': 0,
    'no-console': 0,
    'comma-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ],
    'space-infix-ops': 'error',
    'no-mixed-spaces-and-tabs': 0,
    'no-cond-assign': [
      'error',
      'always'
    ],
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-empty': [
      'error',
      {
        'allowEmptyCatch': true
      }
    ],
    'no-irregular-whitespace': 'error',
    'no-template-curly-in-string': 'error'
  },
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn'
}