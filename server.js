var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/imad1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'imad1.png'));
});

app.get('/ui/imad2.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'imad2.png'));
});
app.get('/ui/imad3.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'imad3.png'));
});

app.get('/ui/imad4.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'imad4.png'));
});

app.get('/ui/imad5.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'imad5.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
