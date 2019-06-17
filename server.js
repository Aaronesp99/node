// const http = require('http');
require('colors');

// const handleServer =function(req, res){
//     res.writeHead(200, {'Content-tyoe' : 'text/html' });
//     res.write("<h1>Bienvenido</h1>");
//     res.end()
// }

// http.createServer(handleServer).listen(3000, function(){
//     console.log("Server on port 3000".red)
// })


// console.log('hello'.red);

const express = require('express');

const server = express();
server.get('/', (req, res) =>{
    res.send('<h1>Express test</h1>');
});

server.listen(3000, () =>{
    console.log('Servidor en puerto 3000'.blue);
});