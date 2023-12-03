/** @type {import("prettier").Config} */
module.exports = {
  bracketSpacing: true,
  semi: false,
  trailingComma: 'all',
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: 'avoid',
  plugins: ['prettier-plugin-tailwindcss'],
}
