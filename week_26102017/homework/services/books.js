const database = require('../data/database');
const Book = require('../models/book')
const modelName = 'books';

exports.saveBooks = books => {
    database.save(books, modelName);
}

exports.loadBooks = () => {
    let loadedBooks = database.load(modelName);
    return loadedBooks.map(Book.create);
}

exports.findBookByAuthor = (authorName) => {
   let filteredBooks =  this.loadBooks().filter(book => {
        return book.author.name == authorName;
    });

    return filteredBooks;
};