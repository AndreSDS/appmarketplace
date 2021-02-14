module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks',
    'jsx-ally',
    'import',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extensions' :[
      'warn',
      {
        extensions: ['.jsx', '.js']
      }
    ],
    'import/prettier-default-export': 'off',
    'no-parse-reassign': 'off'
  },
};
