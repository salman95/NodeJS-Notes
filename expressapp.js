const express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api', function(req, res) {
    res.json({
        firstname : 'John',
        lastname : 'Doe'
    });
});
app.get('/person/:id', function(req, res) {
    res.send(`<html><head></head><body><h1>Person: ${req.params.id} <h1></body></html>`);
    //sends a quick html format of 'Person: {:id (whatever you requested on the address bar)}'
    //You can use the url to pull data onto the webpage.
});

app.listen(port);