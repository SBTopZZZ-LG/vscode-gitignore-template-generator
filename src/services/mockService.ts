import { TemplateService } from './templateService';

/**
 * Mock implementation of TemplateService for demonstration or testing purposes
 */
export class MockService implements TemplateService {
  /**
   * Returns a predefined list of templates
   * @returns Promise that resolves to an array of template names
   */
  public async fetchTemplates(): Promise<string[]> {
    // Simulating API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Return a static list of templates
    return [
      'android',
      'angular',
      'c',
      'cpp',
      'csharp',
      'dart',
      'django',
      'flutter',
      'go',
      'gradle',
      'java',
      'javascript',
      'jetbrains',
      'kotlin',
      'linux',
      'macos',
      'maven',
      'node',
      'objective-c',
      'php',
      'python',
      'react',
      'ruby',
      'rust',
      'swift',
      'typescript',
      'unity',
      'visualstudio',
      'vue',
      'windows',
      'wordpress',
      'xcode',
    ];
  }

  /**
   * Generates a mock gitignore content
   * @param templates Array of template names to include
   * @returns Promise that resolves to the generated content
   */
  public async generateContent(templates: string[]): Promise<string | undefined> {
    // Simulating API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Generate mock content
    const header = `# Generated gitignore file for: ${templates.join(', ')}\n\n`;

    const content: string[] = [];

    if (templates.includes('node')) {
      content.push('# Node\nnode_modules/\nnpm-debug.log\nyarn-error.log\n');
    }

    if (templates.includes('python')) {
      content.push('# Python\n__pycache__/\n*.py[cod]\n*$py.class\n.env\nvenv/\n.venv/\n');
    }

    if (templates.includes('java') || templates.includes('kotlin')) {
      content.push('# Java/Kotlin\n*.class\n*.jar\n.gradle/\nbuild/\ntarget/\n');
    }

    if (templates.includes('macos')) {
      content.push('# macOS\n.DS_Store\n.AppleDouble\n.LSOverride\n');
    }

    if (templates.includes('windows')) {
      content.push('# Windows\nThumbs.db\nehthumbs.db\n*.lnk\n');
    }

    // Add a note for templates not specifically handled
    const handledTemplates = ['node', 'python', 'java', 'kotlin', 'macos', 'windows'];
    const unhandledTemplates = templates.filter(t => !handledTemplates.includes(t));

    if (unhandledTemplates.length > 0) {
      content.push(
        `# The following templates would have more specific rules: ${unhandledTemplates.join(', ')}\n`
      );
    }

    return header + content.join('\n');
  }
}
