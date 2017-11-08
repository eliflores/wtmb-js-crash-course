const Author = require('./author-model');

module.exports = class Book {
    constructor(id, isbn, title, author) {
        this.id = id;
        this.isbn = isbn;
        this.title = title;
        this.author = author;
    }

    static create(obj) {
        return new Book(obj.id, obj.isbn, obj.title, obj.author);
    }
};
