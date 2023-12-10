"use strict";
/**
 * Represents a file model with properties related to a file.
 * @class
 * @implements {IFileModel}
 */
class FileModel {
    /**
     * Creates an instance of FileModel.
     * @param {IFileModel} data - The data to initialize the file model.
     */
    constructor(data) {
        this.sha = data.sha;
        this.path = data.path;
        this.name = data.name;
        this.type = data.type;
    }
}
