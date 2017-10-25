const database = require('../data/database');
const model_name = 'books';

exports.saveBooks = books => {
    database.save(books, model_name);
}

exports.loadBooks = () => {
    return database.load(model_name);
}