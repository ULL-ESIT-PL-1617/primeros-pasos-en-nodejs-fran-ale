var express = require('express');
var path = require('path');

var app = express();
app.listen(process.env.PORT || 8080);
app.use(express.static(path.resolve('gh-pages')));

app.get('/', function(request, response){
  response.sendFile(__dirname + '/ghpages/index.html');
});

console.log("Listening to port: 8080");
