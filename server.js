var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var path = require('path');

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/layout', express.static(path.join(__dirname, 'layout')));
app.use('/pages', express.static(path.join(__dirname, 'pages')));

app.listen(port);