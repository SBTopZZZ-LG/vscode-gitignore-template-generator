/**
 * Interface for template service providers
 * Allows for different implementations like gitignore.io, github/gitignore, etc.
 */
export interface TemplateService {
  /**
   * Fetches all available templates from the service
   * @returns Promise that resolves to an array of template names
   */
  fetchTemplates(): Promise<string[]>;

  /**
   * Generates gitignore content based on selected templates
   * @param templates Array of template names to include
   * @returns Promise that resolves to the generated content
   */
  generateContent(templates: string[]): Promise<string | undefined>;
}
