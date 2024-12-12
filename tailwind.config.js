/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto Mono', 'monospace'], // Added array format for better compatibility
    },
    extend: {
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }], // Ensure you need such a large size
      },
      height: {
        screen: '100dvh', // Modern unit for dynamic viewport height
      },
    },
  },
  plugins: [],
};
 