/** @type {{plugins: string[], singleQuote: boolean, printWidth: number, trailingComma: string, semi: boolean}} */
const config = {
  trailingComma: 'all',
  semi: false,
  singleQuote: true,
  printWidth: 100,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;