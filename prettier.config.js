/** @type {import("prettier").Config} */
module.exports = {
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: 'avoid',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: 'src/app/globals.css',
  tailwindFunctions: ['cn', 'cva'],
}
