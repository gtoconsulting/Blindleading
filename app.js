var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Homepage');
});

app.get('/myfirst', function(request, response) {
  response.send('Glenn=Master!');
});

app.get('/mysecond', function(request, response) {
  response.send('Carlos=HeadstandMaster!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});