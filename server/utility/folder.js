const fs = require('fs');

export const createDir = (folderName) => {
    /** check if the folder already exists  */
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
        console.log(`Folder ${folderName} created successfully`)
    } else {
        console.log(`Folder ${folderName} already exists`);
    }
};