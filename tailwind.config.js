/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#fff',
      'lilac-300': '#B266FF',
      'lilac-600': '#9580F8',
      'lilac-700': '#6044d8',

      'grey-600': '#A1A3BB',
      'grey-700': '#252437',

      'dark-500': '#26242B',
      'dark-700': '#1A1A22',
      'dark-800': '#0B0B0F',
      'dark-900': '#010101',

      'sky-600': '#6691FF',

      'sun-300': '#FDEAA6',
      'sun-600': '#FFD951',
    },
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      borderWidth: {
        1: '1px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
