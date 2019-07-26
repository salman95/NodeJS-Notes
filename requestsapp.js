//Creates options on what to return when the http request differs.

let http = require('http');
let fs = require('fs');

http.createServer(function(req, res) {
    let grabIndex = __dirname + '/index.html';
    let api = '/api';
/** Creates a request for the html file 
 * when "localhost:1337/" is typed. */
    if(req.url === '/') {
        fs.createReadStream(grabIndex).pipe(res);
        console.log(`Request given for ${grabIndex}`)
    }
    /** Creates a request for JSON when
     * "localhost:1337/api" is typed.
     */
    else if(req.url === api) {
        res.writeHead(200, {'Content-Type' : 'application/json'});

        let obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));
        console.log(`Request given for ${api}`)
    }
    else {
        res.writeHead(404);
        res.end();
    }
}).listen(1337, '127.0.0.1');
