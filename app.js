
var express = require('express');
var path = require('path')

var router = express.Router();
var app = express();


app.use(express.static(__dirname + '/'));

app.set('port', process.env.PORT || 8080);
var listener = app.listen(app.get('port'), function() {
  console.log( listener.address().port );
});

app.get('/', function(req, res) {
  res.sendFile(__dirname+'/test.html');
});
