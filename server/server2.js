var express=require('express');
var bodyParser=require('body-parser');
mongoose = require('mongoose');

var app=express();
//----
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//----------------------------------

//--------------conexion a mongoosee---------
// Conexión
mongoose.connect('mongodb://localhost/books', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});



//---------------------------


app.get('/', function(req, res) {
  res.send("Hello world!");
});

//-----------puertos
var port     = process.env.PORT || 8080; // set our port
app.listen(port);
console.log('server running in ' + port+'   port');




module.exports = app;


