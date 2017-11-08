const dataService = require('../data/data-service');
const bookService = require('./book-service')
const Author = require('../models/author-model');
const MODEL_NAME = 'authors';

async function findAll() {
    const loadedAuthors = await dataService.load(MODEL_NAME);
    return loadedAuthors.map(Author.create);
}

async function find(authorId) {
    const allAuthors = await findAll()
    return allAuthors.find(author => author.id == authorId)
}

async function add(author) {
    const allAuthors = await findAll()
    const lastAuthor = allAuthors[allAuthors.length - 1]
    const lastAuthorId = lastAuthor && lastAuthor.id || 0

    author.id = lastAuthorId + 1

    author = Author.create(author)
    allAuthors.push(author)

    await saveAll(allAuthors)
    
    return author
}

async function saveAll(authors) {
    return dataService.save(authors, MODEL_NAME);
}

module.exports = {
    findAll,
    find,
    add
}