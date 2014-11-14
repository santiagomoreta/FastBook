var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BookSchema   = new Schema({
	author: String,
        title: String,
        year: Number ,
        publisher:   String ,
        isbn:  Number ,
        genre:    { type: String, enum:
        ['Drama', 'Fantasia', 'Sci-Fi', 'Thriller', 'Comedia','Other']
              },
        description:  String    
});

module.exports = mongoose.model('BookSchema', BookSchema);
