var express=require('express');
var app=express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser=require('body-parser');

mongoose = require('mongoose');


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
  res.sendfile("public/index2.html");
});

//-----------puertos
var port     = process.env.PORT || 8080; // set our port


//socket io
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log(msg);
    io.emit('chat message', msg);

  });
});

http.listen(port, function(){
  console.log('listening on *:' +port);
});



module.exports = app;


