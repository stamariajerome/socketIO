var express = require('express');
var app = express();
var http = require('http').Server(app);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

http.listen('3000', function() {
  console.log('server up!');
});
