var express = require('express');
var fs = require('fs');
var Buffer = require('buffer').Buffer;
var constants = require('constants');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
/*
	fs.readFile("index.html", function(err, data) {
		if (err) {
			console.log(err.message);
			return;
		}
		console.log(data);
		response.send(data);
	});
*/

	var data = fs.readFileSync("index.html");
	response.send(data.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
