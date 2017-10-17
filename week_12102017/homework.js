// A very simple library :-)

const Library = class {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    logBooks() {
        this.books.forEach(book => {
            console.log(book.toString());
        });
    }
};

const Book = class {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    toString() {
        return 'Title: ' + this.title + ', Author: ' + this.author.name + ', ISBN: ' + this.isbn;
    }
};

const Author = class {
    constructor(name) {
        this.name = name;
    }
};

const library = new Library('Ely Library');

const george = new Author('George Martin');
const gameOfThrones = new Book('Game of Thrones', george, '9788496422612');

const antoine = new Author('Antoine de Saint-Exupéry');
const lePetitPrince = new Book('Le Petit Prince', antoine, '9788995317471');

library.addBook(gameOfThrones);
library.addBook(lePetitPrince);

library.logBooks();

