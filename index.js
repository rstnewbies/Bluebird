var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var data = {};
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});
io.on('connection', function(socket){
  socket.on('message to server', function(msg){
    io.emit('message from server', msg);
  });
  
  /**
   * When new user joins the chat
   */
   socket.on('user.joined', function(id){
    io.emit('user.joined', id);
  });
});
server.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});