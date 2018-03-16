// server.js
var express = require('express');  
var app = express();  
var server = app.listen(process.env.PORT || 3000);
var io = require('socket.io')(server); 

//keep track of how times clients have clicked the button
var clickCount = 0;

app.use(express.static(__dirname + '/public')); 
//redirect / to our index.html file
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/client/index.html');
});

io.on('connection', function(client) {  
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

//start our web server and socket.io server listening
server.listen(3000, function(){
  console.log('listening on *:3000');
}); 