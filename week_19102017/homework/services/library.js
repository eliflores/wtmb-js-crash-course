const booksService = require('./books');

exports.loadLibrary = () => {
    console.log('== Welcome to my Library ===');
    console.log('List of books available:');
    console.log(booksService.loadBooks());
}