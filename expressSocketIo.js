var express = require('express')
  , port = 3000
  , app = express.createServer()
  , io = require('socket.io').listen(app)   // attaches socket.io to express app server
  ;

app.get('/', function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end("Express app here");
});

app.listen(3000);