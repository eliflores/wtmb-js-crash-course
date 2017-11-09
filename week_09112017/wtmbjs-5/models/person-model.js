const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const PersonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 0
    },
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    }]
});

PersonSchema.plugin(AutoIncrement, { inc_field: 'id' });

module.exports = mongoose.model('Person', PersonSchema);


