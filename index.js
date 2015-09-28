var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/build'));

app.listen(8080, function () {
	console.log('Express server started');
});