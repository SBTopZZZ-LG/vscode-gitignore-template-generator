import * as https from 'https';
import * as vscode from 'vscode';
import { TemplateService } from './templateService';

/**
 * Implementation of TemplateService using gitignore.io API
 */
export class GitignoreIoService implements TemplateService {
  private readonly LIST_API_URL = 'https://www.toptal.com/developers/gitignore/api/list';
  private readonly CONTENT_API_URL = 'https://www.toptal.com/developers/gitignore/api/';

  /**
   * Fetches all available templates from gitignore.io
   * @returns Promise that resolves to an array of template names
   */
  public async fetchTemplates(): Promise<string[]> {
    try {
      return await new Promise<string[]>((resolve, reject) => {
        https
          .get(this.LIST_API_URL, res => {
            let data = '';

            res.on('data', chunk => {
              data += chunk;
            });

            res.on('end', () => {
              // API returns a multi-line response with comma-separated values on each line
              // Replace newlines with commas and then process the comma-separated list
              const flattenedData = data.replace(/\r?\n/g, ',');

              const templates = flattenedData
                .split(',')
                .map(template => template.trim())
                .filter(template => template.length > 0) // Filter out empty strings
                .sort(); // Sort alphabetically for better UX

              resolve(templates);
            });
          })
          .on('error', (error: Error) => {
            vscode.window.showErrorMessage(`Failed to fetch templates: ${error.message}`);
            reject(error);
          });
      });
    } catch (error) {
      vscode.window.showErrorMessage(`Failed to fetch available templates: ${error}`);
      // Return some common templates as fallback
      return [
        'android',
        'angular',
        'c',
        'cpp',
        'csharp',
        'java',
        'javascript',
        'kotlin',
        'linux',
        'macos',
        'node',
        'python',
        'react',
        'rust',
        'typescript',
      ];
    }
  }

  /**
   * Generates gitignore content based on selected templates using gitignore.io API
   * @param templates Array of template names to include
   * @returns Promise that resolves to the generated content
   */
  public async generateContent(templates: string[]): Promise<string | undefined> {
    try {
      const templateString = templates.join(',');
      const apiUrl = `${this.CONTENT_API_URL}${templateString}`;

      return new Promise<string>((resolve, reject) => {
        https
          .get(apiUrl, res => {
            let data = '';

            res.on('data', chunk => {
              data += chunk;
            });

            res.on('end', () => {
              resolve(data);
            });
          })
          .on('error', (error: Error) => {
            vscode.window.showErrorMessage(`Failed to fetch gitignore content: ${error.message}`);
            reject(error);
          });
      });
    } catch (error) {
      vscode.window.showErrorMessage(`Failed to generate gitignore content: ${error}`);
      return undefined;
    }
  }
}
