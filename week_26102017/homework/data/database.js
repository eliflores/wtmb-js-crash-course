const fs = require('fs');

exports.save = async (obj, modelName) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(`${__dirname}/${modelName}.json`, JSON.stringify(obj), (err, contents) => {
            if (err) {
                reject('err');
            }

            resolve(contents);
        });
    });
}

exports.load = async (modelName) => {
    let content = await readFile(`${__dirname }/${modelName}.json`);
    return JSON.parse(content);
}

const readFile = async (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, contents) => {
            if (err) {
                reject('err');
            }

            resolve(contents);
        });
    });
};