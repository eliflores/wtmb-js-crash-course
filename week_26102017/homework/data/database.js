const fs = require('fs');

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

exports.save = (obj, modelName) => {
    fs.writeFileSync(`${__dirname}/${modelName}.json`, JSON.stringify(obj));
}

exports.load = async (modelName) => {
    let content = await readFile(`${__dirname }/${modelName}.json`);
    return JSON.parse(content);
}