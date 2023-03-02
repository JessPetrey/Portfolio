/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {transform: "rotate(-3deg)" },
          '50%': {transform: 'rotate(3deg)'}
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite'
      }
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['light','dark','luxury','cupcake','bumblebee','garden','black'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
