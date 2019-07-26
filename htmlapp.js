//Displays the html file to the browser on an address and port.
let http = require('http');
let fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);

}).listen(1337, '127.0.0.1');