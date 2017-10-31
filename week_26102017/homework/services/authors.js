const database = require('../data/database');
const Author = require('../models/author');
const modelName = 'authors';

exports.saveAuthors = authors => {
    database.save(authors, modelName);
}

exports.loadAuthors = author => {
    return database.load(modelName).map(Author.create);
}