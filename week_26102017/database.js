const fs = require('fs');

exports.save = (people, cb) => {
    setTimeout(() => {
        fs.writeFile('./data.json', JSON.stringify(people), cb);
    }, 5000);
}

exports.load = () => {
    return JSON.parse(fs.readFile('./data.json', 'utf8'));
}