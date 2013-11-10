var app = require('express')()
var server = require('http').createServer(app)
var io = require('socket.io').listen(server);
var fs = require('fs');
var ARRAY1 = ["pretending", "still", "i;m", "totaly", "an", "image","pretending", "still", "i;m", "totaly", "an", "image","pretending", "still", "i;m", "totaly", "an", "image"];

server.listen(3000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
  console.log('Connection!');
 //  for (var i = 0; i < ARRAY1.length; i++) {
	// socket.emit('array', ARRAY1[i]);
	// console.log(ARRAY1[i]);
 //  }


var imgURL = "thumbsup"//

  var count = 0;
  setInterval( function() {
    count = count + 1;
    if (count < ARRAY1.length) { 
      console.log(count + " : " + ARRAY1.length);
      socket.emit('smallarray', ARRAY1[count]);       //EMMITING
    };
  }, 20);

  socket.emit('news', {"hello":"greetings","welcome":"likeasir"});       //EMMITING
  socket.on('my other event', function (data) {
    console.log(JSON.stringify(data));
  });


  var hugefreakincrashbot = fs.readFileSync(imgURL + '.viduri').toString().split('\n');
  socket.emit('prearray', hugefreakincrashbot.length);
  var count = 0;
  setInterval( function() {
    count = count + 1;
    if (count < hugefreakincrashbot.length) { 
      socket.emit('array', hugefreakincrashbot[count]);       //EMMITING
    };
  }, 15);

});


