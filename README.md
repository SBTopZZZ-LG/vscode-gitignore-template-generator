# GitIgnore Template Generator

VSCode extension that generates .gitignore files directly from your editor. Select multiple templates with autocompletion and instantly apply them - simple, fast and effective.

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue.svg)](https://github.com/SBTopZZZ-LG/vscode-gitignore-template-generator)

## Features

- Automatically detects when a .gitignore file is opened
- Provides a command to generate .gitignore content
- Multi-select interface with autocompletion for languages, tools, and platforms
- Directly uses the gitignore.io API to fetch templates and generate content

## Usage

1. Open a .gitignore file in VSCode
2. Run the command "Generate .gitignore Content" from the Command Palette (Ctrl+Shift+P or Cmd+Shift+P)
3. Select the languages, tools, or platforms you want to include
4. The extension will generate the appropriate .gitignore content and replace the current file content

## Requirements

- VSCode 1.60.0 or higher
- Internet connection to access the gitignore.io API

## Extension Settings

This extension does not add any settings yet.

## Known Issues

- Limited error handling for network issues when fetching templates
- Requires internet connection to function properly

## Release Notes

See [CHANGELOG.md](CHANGELOG.md) for all version updates and changes.

### 1.0.0

Initial release:
- Basic functionality to generate .gitignore files
- Support for multiple platforms
- Autocompletion for common templates
- Service-based architecture for extensibility

## Author

[SBTopZZZ-LG](https://github.com/SBTopZZZ-LG)