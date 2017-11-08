const dataService = require('../data/data-service');
const authorService = require('./author-service');
const Book = require('../models/book-model')
const MODEL_NAME = 'books';

async function findAll() {
    let loadedBooks = await dataService.load(MODEL_NAME);
    return loadedBooks.map(Book.create);
}

async function find(bookId) {
    const allBooks = await findAll()
    return allBooks.find(book => book.id == bookId)
}

async function add(book) {
    const allBooks = await findAll()
    const lastBook = allBooks[allBooks.length - 1]
    const lastBookId = lastBook && lastBook.id || 0
    const author = await authorService.find(book.author.id)
    
    book.id = lastBookId + 1
    book.author = author

    book = Book.create(book)
    allBooks.push(book)

    saveAll(allBooks)
    
    return book
}

async function del(bookId) {
    const allBooks = await findAll()
    const bookIndex = allBooks.findIndex(a => a.id == bookId)
    if (bookIndex < 0) {
        return
    }

    allBooks.splice(bookIndex, 1)

    saveAll(allBooks)
}

async function saveAll(books) {
    return dataService.save(books, MODEL_NAME)
}

// exports.findByAuthor = async (authorName) => {
//     let loadedBooks = await this.load();
//     let filteredBooks = loadedBooks.filter(book => {
//         return book.author.name == authorName;
//     });
//     return filteredBooks.map(book => book.title);
// };


module.exports = {
    findAll,
    find,
    add,
    del
}