//solicitar um módulo interno do node chamado http
var http = require('http')

//abrindo um servidor http
http.createServer(function(req, res){
    res.end("Hello Etec MCM")
}).listen(8081)

console.log('SERVIDOR ESTÁ RODANDO')