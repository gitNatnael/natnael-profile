var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('public'));

// viewed at http://localhost:8080
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});

app.listen(8080, function () {
    console.log("app is running...")
});