import defaultTheme from 'tailwindcss/defaultTheme';
import radix from './plugins/radix';

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: [
    './src/**/*.{ts,tsx}',
    './**/*.{ts,tsx}',
    '../../packages/devlabs-ui/src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
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
