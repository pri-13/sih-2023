import { FileContent } from "./models/file_content";
import { FileModel } from "./models/file_model";
/**
 * The EsgSDK class provides methods for file management using the ESG API.
 * It follows the Singleton pattern to ensure a single instance is used throughout the application.
 * @class
 */
export default class EsgSDK {
    private static instance;
    /**
     * Private constructor to prevent direct instantiation. Use the `initialize` method instead.
     */
    private constructor();
    /**
     * Initializes and returns the singleton instance of the EsgSDK class.
     * @returns {EsgSDK} - The singleton instance of the EsgSDK class.
     */
    static initialize(): EsgSDK;
    /**
     * Creates a file with the specified content at the given path.
     * @param {FileContent} file - The file content parameters.
     * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating whether the file creation was successful.
     * @example
     * const esgSDK = EsgSDK.initialize();
     * const fileContentInstance = new FileContent({
     *   sha: "abc123",
     *   path: "docs/environment/file1.mdx",
     *   name: "file1.md",
     *   type: "file",
     *   content: "content string"
     * });
     * const success = await esgSDK.createFile(fileContentInstance);
     * console.log("File creation success:", success);
     */
    createFile(file: FileContent): Promise<boolean>;
    /**
     * Fetches a list of FileModel instances from the specified API endpoint.
     * @param {string} dir - The directory parameter for the API endpoint. Must be one of "environment", "social", "governance".
     * @returns {Promise<FileModel[]>} - A Promise that resolves to an array of FileModel instances.
     * @example
     * const esgSDK = EsgSDK.initialize();
     * const directory = "environment";
     * const files = await esgSDK.fetchFiles(directory);
     * console.log("Fetched Files:", files.map(file => new FileModel(file)));
     */
    fetchFiles(dir: string): Promise<FileModel[]>;
    /**
     * Updates a file with the specified content at the given path.
     * @param {FileContent} file - The file content parameters.
     * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating whether the file update was successful.
     * @example
     * const esgSDK = EsgSDK.initialize();
     * const fileContentInstance = new FileContent({
     *   sha: "abc123",
     *   path: "docs/environment/file1.mdx",
     *   name: "file1.md",
     *   type: "file",
     *   content: "updated content string"
     * });
     * const success = await esgSDK.updateFile(fileContentInstance);
     * console.log("File update success:", success);
     */
    updateFile(file: FileContent): Promise<boolean>;
    /**
     * Fetches the content of a file from the specified API endpoint.
     * @param {string} dir - The directory parameter. Must be one of "environment", "social", "governance".
     * @param {string} fileName - The name of the file without extension.
     * @returns {Promise<FileContent>} - A Promise that resolves to the content of the specified file.
     * @example
     * const esgSDK = EsgSDK.initialize();
     * const dir = "environment";
     * const fileName = "file1";
     * const fileContentInstance = await esgSDK.getFileContent(dir, fileName);
     * console.log("File Content:", new FileContent(fileContentInstance));
     */
    getFileContent(dir: string, fileName: string): Promise<FileContent>;
    /**
     * Deletes a file at the specified path.
     * @param {FileContent} fileContent - The file content model representing the file to be deleted.
     * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating whether the file deletion was successful.
     * @example
     * const esgSDK = EsgSDK.initialize();
     * const fileContentInstance = new FileContent({
     *   sha: "abc123",
     *   path: "docs/environment/file1.mdx",
     *   name: "file1.md",
     *   type: "file",
     *   content: "content string"
     * });
     * const success = await esgSDK.deleteFile(fileContentInstance);
     * console.log("File deletion success:", success);
     */
    deleteFile(fileContent: FileContent): Promise<boolean>;
}
//# sourceMappingURL=sdk.d.ts.map