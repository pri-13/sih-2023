/**
 * Represents a file comment model with properties related to a comment.
 * @interface
 */
export interface IFileComment {
    /**
     * The IP address associated with the comment.
     * @type {string | undefined}
     */
    ip_address?: string;
    /**
     * The text content of the comment.
     * @type {string}
     */
    text: string;
    /**
     * The ID of the comment.
     * @type {string}
     */
    id: string;
    /**
     * The timestamp of the comment.
     * @type {string}
     */
    time: string;
    /**
     * The page ID associated with the comment.
     * @type {string}
     */
    page_id: string;
}
/**
 * Represents a file comment model with properties related to a comment.
 * @class
 * @implements {IFileComment}
 */
export declare class FileComment implements IFileComment {
    /**
     * The IP address associated with the comment.
     * @type {string | undefined}
     */
    ip_address?: string;
    /**
     * The text content of the comment.
     * @type {string}
     */
    text: string;
    /**
     * The ID of the comment.
     * @type {string}
     */
    id: string;
    /**
     * The timestamp of the comment.
     * @type {string}
     */
    time: string;
    /**
     * The page ID associated with the comment.
     * @type {string}
     */
    page_id: string;
    /**
     * Creates an instance of FileComment.
     * @param {IFileComment} data - The data to initialize the file comment model.
     */
    constructor(data: IFileComment);
}
//# sourceMappingURL=index.d.ts.map