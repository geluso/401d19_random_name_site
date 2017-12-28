var express = require('express');
var randomPerson = require('./lib/random-generator');
var app = express();

app.get('/', (req, res) => {
  var name = randomPerson.randomName();
  res.send(name);
});

var port = 3000;
app.listen(port, () => {
  console.log('http://localhost:' + port);
});
