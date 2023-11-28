const fs = require('fs');

export const createFile = (fileName, content) => {
    fs.writeFileSync(fileName, content, (err) => {
        if (err) {
            console.error(`Error creating file ${fileName}: ${err.message}`);
        } else {
            console.log(`Created file ${fileName} successfully`);
        }
    });
};