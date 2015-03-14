/**
 * Created by SHERRI on 3/14/15.
 */
var express = require('express');
var app = express();
var path = require('path');
//set the client folder to serve public assets

app.use(express.static(__dirname + '/public'));

//set up one route to the index.html file

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/views/index.html'));

});
//start the server on port 8080
app.listen(8080);
console.log('hey, magic here on port 8080.');