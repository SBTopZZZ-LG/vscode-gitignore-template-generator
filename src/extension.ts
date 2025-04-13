import * as vscode from 'vscode';
import * as path from 'path';
import { TemplateService } from './services/templateService';
import { ServiceFactory, ServiceType } from './services/serviceFactory';

// Service to use
const SERVICE_TYPE = ServiceType.GITIGNORE_IO;

// Cache for templates
let gitignoreTemplates: string[] = [];

export async function activate(context: vscode.ExtensionContext): Promise<void> {
  console.log('GitIgnore Generator extension is now active');

  // Create the template service
  const templateService: TemplateService = ServiceFactory.createService(SERVICE_TYPE);

  // Fetch available templates from the service
  gitignoreTemplates = await templateService.fetchTemplates();

  // Register the command
  const disposable = vscode.commands.registerCommand('gitignoreio.generate', async () => {
    // Check if current file is .gitignore
    const editor = vscode.window.activeTextEditor;
    if (!editor || path.basename(editor.document.fileName) !== '.gitignore') {
      vscode.window.showErrorMessage(
        'This command can only be used when editing a .gitignore file'
      );
      return;
    }

    // Show quick pick with multi-select and autocompletion
    const selectedTemplates = await vscode.window.showQuickPick(gitignoreTemplates, {
      canPickMany: true,
      placeHolder: 'Select languages, tools, or platforms to add to .gitignore',
    });

    if (!selectedTemplates || selectedTemplates.length === 0) {
      return;
    }

    // Generate content using the service
    const content = await templateService.generateContent(selectedTemplates);

    // Write to the current file
    if (content) {
      const document = editor.document;
      const edit = new vscode.WorkspaceEdit();

      // Replace entire document with generated content
      edit.replace(document.uri, new vscode.Range(0, 0, document.lineCount, 0), content);

      await vscode.workspace.applyEdit(edit);
      await document.save();

      vscode.window.showInformationMessage('.gitignore content generated successfully!');
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate(): void {
  // Clean up resources if needed
}
