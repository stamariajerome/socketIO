var express = require('express');
var app = express();
var http = require('http').Server(app);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

http.listen(process.env.PORT,process.env.IP, function() {
  console.log('server up!');
});
