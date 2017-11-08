module.exports = class Author {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.writtenBooks = [];
    }

    addWrittenBook(books) {
        this.writtenBooks.push(book);
    }

    static create(obj) {
        return new Author(obj.id, obj.name);
    }
};