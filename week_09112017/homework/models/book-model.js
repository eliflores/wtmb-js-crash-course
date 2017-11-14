const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const BookSchema = mongoose.Schema({
    isbn: {
        type: String,
        require: true
    }, 
    title: {
        type: String,
        require: true
    }, 
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
});

BookSchema.plugin(AutoIncrement, {inc_field: 'book_id'});

module.exports = mongoose.model('Book', BookSchema);
