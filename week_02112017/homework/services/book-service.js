const dataService = require('../data/data-service');
const Book = require('../models/book-model')
const modelName = 'books';

exports.save = async (books) => {
    await dataService.save(books, modelName);
}

exports.findAll = async () => {
    let loadedBooks = await dataService.load(modelName);
    return loadedBooks.map(Book.create);
}

exports.findByAuthor = async (authorName) => {
   let loadedBooks = await this.load(); 
   let filteredBooks =  loadedBooks.filter(book => {
        return book.author.name == authorName;
    });
    return filteredBooks.map(book => book.title);
};