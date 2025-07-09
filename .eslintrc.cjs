module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname
  },
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'standard-with-typescript',
    'standard-react',
    'plugin:prettier/recommended'
  ]
}
