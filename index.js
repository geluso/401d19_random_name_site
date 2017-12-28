var express = require('express');
var randomPerson = require('./lib/random-generator');
var app = express();

app.get('/', (req, res) => {
  var name = randomPerson.randomName();
  res.send('<style>body{background-color:green; text-align: center;}</style>' + name);
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('http://localhost:' + port);
});
