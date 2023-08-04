import defaultTheme from 'tailwindcss/defaultTheme';
import radix from './plugins/radix';

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: [
    './src/**/*.{ts,tsx}',
    '../../packages/devlabs-ui/src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5D25FE',
          100: '#F4F0FF',
          700: '#5D25FE',
        },
        info: {
          500: '#1B64F5',
        },
        success: {
          DEFAULT: '#00C01F',
          100: '#EEFFEF',
          200: '#D7FFDD',
          300: '#33F552',
          400: '#00C01F',
          500: '#04911C',
        },
        error: {
          DEFAULT: '#FF3C3C',
          100: '#FFF2ED',
          200: '#FFE2D4',
          300: '#FF5630',
          400: '#FF3C3C',
          500: '#9D0F11',
        },
      },
      container: {
        center: true,
      },
      fontFamily: {
        sans: [`var(--font-sans, ${defaultTheme.fontFamily.sans.join(', ')})`],
      },
      minHeight: {
        screen: ['100vh', '100dvh'],
      },
      maxHeight: {
        screen: ['100vh', '100dvh'],
      },
      height: {
        screen: ['100vh', '100dvh'],
      },
    },
  },
  plugins: [radix],
};

export default config;
