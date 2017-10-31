const Book = require('./models/book');
const Author = require('./models/author');

exports.createAuthors = () => {
    return [
        new Author('George Martin'),
        new Author('Antoine de Saint-Exupéry')
    ];
}

exports.createBooks = (authors) => {
    return [
        new Book('Game of Thrones', authors[0], '9788496422612'),
        new Book('Le Petit Prince', authors[1], '9788995317471')
    ];
}