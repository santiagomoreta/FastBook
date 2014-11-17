var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Images = new Schema({
    kind: {
        type: String,
        enum: ['thumbnail', 'detail'],
        required: true
    },
    url: { type: String, required: true }
});

var Book   = new Schema({
	author: String,
        images:    [Images],
        title: String,
        year: Number ,
        publisher:   String ,
        isbn:  Number ,
        genre: String,
        description:  String ,
        modified: { type: Date, default: Date.now }    
});

module.exports = mongoose.model('Book', Book);
