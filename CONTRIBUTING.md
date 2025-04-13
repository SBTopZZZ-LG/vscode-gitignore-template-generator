# Contributing to VSCode GitIgnore Generator

Thank you for your interest in contributing to this project! We use semantic versioning and conventional commits to automate our release process.

## Commit Message Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/) for commit messages to automate versioning and changelog generation.

### Format

```
<type>(<scope>): <short summary>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to our CI configuration files and scripts

### Examples

```
feat(templates): add filtering to template selection

Add ability to filter templates in the QuickPick UI to make selection easier.

Closes #123
```

```
fix(api): handle network errors gracefully

Improve error handling for network failures when fetching from gitignore.io API.

Fixes #456
```

## Versioning

This project uses semantic versioning:

- **Major**: Breaking changes (`1.0.0` → `2.0.0`)
- **Minor**: New features without breaking changes (`1.0.0` → `1.1.0`)
- **Patch**: Bug fixes and maintenance (`1.0.0` → `1.0.1`)

The version is automatically updated based on the commit types:
- `feat` → Minor version bump
- `fix`, `perf` → Patch version bump
- `feat` with `BREAKING CHANGE` in footer → Major version bump

## Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Commit your changes following the conventional commits format
6. Push your branch and submit a pull request