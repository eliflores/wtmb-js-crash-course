const fs = require('fs');

exports.save = (obj, modelName) => {
    fs.writeFileSync(`${__dirname }/${modelName}.json`, JSON.stringify(obj));
}

exports.load = (modelName) => {
    return JSON.parse(fs.readFileSync(`${__dirname }/${modelName}.json`, 'utf8', {'flags': 'r'}));
}