import shareConfig from '@devlabs/tailwindcss/tailwind.preset';

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  presets: [shareConfig],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
};

export default tailwindConfig;
