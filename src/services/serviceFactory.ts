import { TemplateService } from './templateService';
import { GitignoreIoService } from './gitignoreIoService';
import { MockService } from './mockService';

/**
 * Service type enumeration
 */
export enum ServiceType {
  GITIGNORE_IO = 'gitignore.io',
  MOCK = 'mock', // For demonstration or testing
  // Add more service types here as they become available
}

/**
 * Factory class for creating template services
 */
export class ServiceFactory {
  /**
   * Creates and returns a template service of the specified type
   * @param type Type of service to create
   * @returns An implementation of TemplateService
   */
  public static createService(type: ServiceType): TemplateService {
    switch (type) {
      case ServiceType.GITIGNORE_IO:
        return new GitignoreIoService();

      case ServiceType.MOCK:
        return new MockService();

      // Add more cases here as services are implemented

      default:
        // Default to gitignore.io
        return new GitignoreIoService();
    }
  }
}
