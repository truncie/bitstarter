var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var buffer = new Buffer(255);

fs.readFileSync('./index.html', function (err, buffer) {
  if (err) throw err;
  console.log(data);
});

app.get('/', function(request, response) {
  response.send(buffer.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
