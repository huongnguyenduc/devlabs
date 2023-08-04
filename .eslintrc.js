module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-devlabs`
  extends: ['devlabs'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
