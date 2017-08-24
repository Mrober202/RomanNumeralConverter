var express = require('express');
var app = express();
var path = require('path');
var Converter = require("./public/converter");

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// set up API to call results for inputted values from web app.
app.get("/convertNumberToRoman/:number", function(req, res) {
  var converter = new Converter();
  res.json({
    result: converter.convertNumberToRN(req.params.number)
  });
});

app.get("/convertRomanToNumber/:numeral", function(req, res) {
  var converter = new Converter();
  res.json({
    result: converter.convertNumeralToNumber(req.params.numeral)
  });
});

app.use(express.static('public'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});