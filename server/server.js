// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();

// configure app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port

app.all("/api/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  return next();
});

var mongoose   = require('mongoose');
mongoose.connect('mongodb://fastbook:123456@proximus.modulusmongo.net:27017/oT3uwysa'); // connect to our database
var Book     = require('./app/models/book');

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests hello
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

// on routes that end in /books
// ----------------------------------------------------
 
//-------------------------------------------------------------
router.route('/books')

	// create a book (accessed at POST http://localhost:8080/books)
	.post(function(req, res) {
		
		var book = new Book();		// create a new instance of the Book model
		book.title = req.body.title;  // set the books name (comes from the request)
                book.author = req.body.author;  // set the books name (comes from the request)
                book.year = req.body.year;
                book.publisher = req.body.publisher;
                book.isbn = req.body.isbn;
                book.genre = req.body.genre;
                book.description = req.body.description;

		book.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Book created!' });
		});

		
	})

	// get all the books (accessed at GET http://localhost:8080/api/books)
	.get(function(req, res) {
		Book.find(function(err, books) {
			if (err)
				res.send(err);

			res.json(books);
		});
	});

// on routes that end in /books/:book_id

// ----------------------------------------------------
 router.route('/books/isbn/:book_isbn')
 .get(function(req, res) {
    
		Book.find(req.params.book_isbn,function(err, book) {
			if (err)
				res.send(err);
                       
			res.json(book);
                        //console.log(books.length);
                    
		});
	});
//---------------------------------------------------------


router.route('/books/:book_id')

	// get the book with that id
	.get(function(req, res) {
		Book.findById(req.params.book_id, function(err, book) {
			if (err)
				res.send(err);
			res.json(book);
		});
	})

	// update the book with this id
	.put(function(req, res) {
		Book.findById(req.params.book_id, function(err, book) {

			if (err)
				res.send(err);

			book.title = req.body.title;
                        book.author = req.body.author;  // set the books name (comes from the request)
                        book.year = req.body.year;
                        book.publisher = req.body.publisher;
                        book.isbn = req.body.isbn;
                        book.genre = req.body.genre;
                        book.description = req.body.description;
                    book.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Book updated!' });
			});

		});
	})

	// delete the book with this id
	.delete(function(req, res) {
		Book.remove({
			_id: req.params.book_id
		}, function(err, book) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
