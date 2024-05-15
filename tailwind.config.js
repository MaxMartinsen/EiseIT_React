/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  darkMode: 'media',
  theme: {
    screens: {
      sm: '435px',
      md: '768px',
      lg: '976px',
      xl: '1240px',
    },
    extend: {
      colors: {
        ebony: {
          50: '#f1f5fc',
          100: '#e6ebf9',
          200: '#d2dbf3',
          300: '#b7c3ea',
          400: '#99a4e0',
          500: '#8087d4',
          600: '#6666c5',
          700: '#5756ac',
          800: '#47478c',
          900: '#3f4070',
          950: '#121220',
        },
      },
    },
    fontFamily: {
      body: [
        'Roboto',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'Segoe UI',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      sans: [
        'Roboto',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      allerta: ['"Allerta Stencil"', 'sans-serif'],
      poppins: ['"Poppins"', 'sans-serif'],
    },
  },
  plugins: [flowbitePlugin],
};
