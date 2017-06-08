const express = require('express');
var path = require('path');
const app = express();

app.listen(3978, function () {
    console.log('Server started and is listening on port 3978');
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});