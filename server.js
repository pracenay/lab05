const express = require('express');
const app = express();

app.get('/', function (req, res) {
	res.send('Hello, World!');
});

app.get('/healthcheck', function (req, res) {
	res.send('Service!');
});

app.listen(8080, function () {
	console.log('Example app listening on port 80!');
});
