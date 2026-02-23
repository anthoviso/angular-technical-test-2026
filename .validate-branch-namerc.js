module.exports = {
  pattern: /^(main)$|^(feat|fix|release|doc|hotfix)\/[a-z0-9._-]+$/,
  errorMessage:
    'Branch name must be in the format: feat|fix|release|doc|hotfix/branch-name',
};
