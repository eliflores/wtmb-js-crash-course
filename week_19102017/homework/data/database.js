const fs = require('fs');

exports.save = (obj, model_name) => {
    fs.writeFileSync(__dirname + '/' +model_name + '.json', JSON.stringify(obj))
}

exports.load = (model_name) => {
    return JSON.parse(fs.readFileSync(__dirname + '/' + model_name + '.json', 'utf8', {'flags': 'r'}));
}