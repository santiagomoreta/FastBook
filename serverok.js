var express=require('express');
var bodyParser=require('body-parser');
mongoose = require('mongoose');

var app=express();
//----estaticoo-----------
app.use(express.static(__dirname + '/public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//----------------------------------
routes = require('./server/routes/book')(app);
//--------------conexion a mongoosee---------
// Conexión
mongoose.connect('mongodb://localhost/books', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});



//---------------------------autenticacion para probar api n localhost
app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST,DELETE");
  return next();
});


//-------------------------


app.get('/', function(req, res) {
  res.send("Hello world!");
});

//-----------puertos
var port     = process.env.PORT || 8080; // set our port

app.listen(port);
console.log('server running in ' + port+'   port');





module.exports = app;


