module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/brace-style': 'off'
  }
}
