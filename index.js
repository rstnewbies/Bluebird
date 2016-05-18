/*var express = require('express');
var app = express();
var http = require('http').createServer(app);
*/
var app = require('http').createServer(handler)
var io = require('socket.io')(app);


var io = require('socket.io')(http);
io.set('transports', ['xhr-polling']);
io.set('polling duration', 10);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});






/*var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
http.listen(port, function(){
  console.log('listening on *:3000');
});*/
