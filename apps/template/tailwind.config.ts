import shareConfig from '@devlabs/tailwindcss/tailwind.preset';

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  presets: [shareConfig],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: {
          DEFAULT: '#5D25FE',
          100: '#F4F0FF',
          200: '#D9CDFF',
          300: '#BFA6FF',
          400: '#A273FF',
          500: '#854CFD',
          600: '#6F2BFF',
          700: '#5D25FE',
          800: '#4B02E8',
        },
        secondary: {
          DEFAULT: '#FFBF3C',
          100: '#FFF9EB',
          200: '#FFF9EB',
          300: '#FFBF3C',
          400: '#FFAC20',
          500: '#F98807',
          600: '#DD6202',
          700: '#DD6202',
          800: '#94320C',
        },
        neutral: {
          DEFAULT: '#FFFFFF',
          100: '#F5F5F8',
          200: '#EDEEF2',
          300: '#DEDFE7',
          400: '#BBBBCC',
          500: '#8C8C99',
          600: '#666874',
          700: '#4A4B54',
          800: '#35353A',
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
        'accent-info': {
          DEFAULT: '#1b64f5',
          500: '#1b64f5',
        },
      },
    },
  },
};

export default tailwindConfig;
