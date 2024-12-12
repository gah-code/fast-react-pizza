// module.exports = {
//   plugins: [require('prettier-plugin-tailwindcss')],

// };

module.exports = {
  plugins: [
    (async () => {
      const tailwindcss = await import('prettier-plugin-tailwindcss');
      return tailwindcss.default;
    })(),
  ],
};
