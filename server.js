 var http = require('http');

http.createServer(function (request , response){
    
    response.writeHead(200 , {"Content-Type": "text/plain"});
    response.write("Heyyy!!");
    response.end();
}).listen(8888);
console.log('listening');