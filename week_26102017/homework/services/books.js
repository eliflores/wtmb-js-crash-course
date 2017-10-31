const database = require('../data/database');
const Book = require('../models/book')
const modelName = 'books';

exports.saveBooks = books => {
    database.save(books, modelName);
}

exports.loadBooks = async () => {
    let loadedBooks = await database.load(modelName);
    return loadedBooks.map(Book.create);
}

exports.findBookByAuthor = async (authorName) => {
   let loadedBooks = this.loadBooks(); 
   let filteredBooks =  loadedBooks.filter(book => {
        return book.author.name == authorName;
    });

    return filteredBooks;
};