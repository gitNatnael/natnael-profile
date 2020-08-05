var express = require('express');
var app = express();
var path = require('path');
app.use('/static', express.static('public'))
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});

app.listen(8080, () => {
    console.log("app is running...")
});