const database = require('../data/database');
const Author = require('../models/author');
const modelName = 'authors';

exports.save = authors => {
    database.save(authors, modelName);
}

exports.load = async ()  => {
    let loadedAuthors =  await database.load(modelName);
    return loadedAuthors.map(Author.create);
}