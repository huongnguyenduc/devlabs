import shareConfig from '@devlabs/tailwindcss/tailwind.preset';

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  presets: [shareConfig],
  theme: {
    extend: {
      container: {
        center: true,
      },
      animation: {
        'meteor-effect': 'meteor 5s linear infinite',
      },
      keyframes: {
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
          '70%': { opacity: 1 },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: 0,
          },
        },
      },
    },
  },
};

export default tailwindConfig;
