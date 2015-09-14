var express = require('express');

var list = require('./routes/list');
var connections = require('./routes/connections');

var app = express();

app.set('view engine', 'ejs');

app.locals.title = "From-me-to-you";

app.use('/', list);
app.use('/connections', connections);
app.use(express.static('www'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
})

