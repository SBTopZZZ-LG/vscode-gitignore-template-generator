module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [1, 'always', 200], // Changed from error(2) to warning(1) and increased length
  },
  ignores: [
    // Ignore semantic-release commit messages
    (commit) => commit.includes('[skip ci]')
  ],
};