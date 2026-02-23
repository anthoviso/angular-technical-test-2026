[← Back to summary](../README.md)

<a alt="Git logo" href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://git-scm.com/images/logo@2x.png" height="50"></a>

## hooks

We use Husky to configure git hooks.

### Commit

- This project use a pre-commit hook. We use conventional commits naming. A script will analyse your commit before applying `commit` action.
- Rules are defined and can be override [here](../commitlint.config.js).
- See examples [here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional).

### Push

- This project a pre-push hook. A script will analyse the nave given to your branch before applying `push` action.
- Rules are defined and can be override [here](../.validate-branch-namerc.js).
