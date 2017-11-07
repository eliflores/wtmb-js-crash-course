const dataService = require('./data-service');
const Author = require('../models/author-model');
const modelName = 'authors';

exports.save = async (authors) => {
    await dataService.save(authors, modelName);
}

exports.findAll = async ()  => {
    let loadedAuthors =  await dataService.load(modelName);
    return loadedAuthors.map(Author.create);
}