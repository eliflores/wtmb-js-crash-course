const database = require('../data/database');
const model_name = 'authors';

exports.saveAuthors = authors => {
    database.save(authors, model_name);
}

exports.loadAuthors = author => {
    return database.load(model_name);
}