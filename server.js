var express = require('express'),
	bodyParser = require("body-parser"),
	app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/'));

app.get('/', function(req, res) {
	res.sendFile("index.html");
});

app.post('/files', function(req, res) {
	console.log(req.body);
	res.end("Ok")
});

app.listen(process.env.port || 3000);
console.log('Running at Port 3000');	