var express = require('express');
var app = express();
var server= require('http').createServer(app);
var io = require('socket.io').listen(server);


server.listen(process.env.PORT || 3000);
console.log('Server Running');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/client/index.html');
});

io.sockets.on('connection', function(client){
	//when the server receives clicked message, do this

    client.on('colorChoice', function(data){

    	  io.emit('buttonColor', data);
    	  console.log(data);

    });

    client.on('picChoice', function(data){

    	  io.emit('buttonImg', data);
    	  console.log(data);

    });
});
