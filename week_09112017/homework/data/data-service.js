const fs = require('fs');
const BASE_DB_PATH = `${__dirname}/`

exports.save = async (obj, modelName) => {

    return new Promise((resolve, reject) => {
        fs.writeFile(`${BASE_DB_PATH}${modelName}.json`, JSON.stringify(obj), (err, contents) => {
            if (err) {
                reject('err');
            }

            resolve();
        });
    });
}

exports.load = async (modelName) => {
    let content = await readFile(`${BASE_DB_PATH}${modelName}.json`);
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