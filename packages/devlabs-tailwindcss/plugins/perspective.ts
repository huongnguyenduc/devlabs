import plugin from 'tailwindcss/plugin';

export default plugin(({ matchUtilities }) => {
  matchUtilities({
    perspective: (value) => ({
      perspective: value,
    }),
  });
});
