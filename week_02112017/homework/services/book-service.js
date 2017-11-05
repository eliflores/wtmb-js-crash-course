const dataService = require('./data-service');
const Book = require('../models/book')
const modelName = 'books';

exports.save = async (books) => {
    await dataService.save(books, modelName);
}

exports.load = async () => {
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