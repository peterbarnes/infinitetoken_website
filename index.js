var express = require('express');
var path = require('path');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(1337, function() {
  console.log("Listening on port 1337");
});