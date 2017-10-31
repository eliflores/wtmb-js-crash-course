const database = require('../data/database');
const Author = require('../models/author');
const modelName = 'authors';

exports.saveAuthors = authors => {
    database.save(authors, modelName);
}

exports.loadAuthors = async ()  => {
    let loadedAuthors =  await database.load(modelName);
    return loadedAuthors.map(Author.create);
}