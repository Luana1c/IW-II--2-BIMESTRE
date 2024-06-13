const express = require('express')
const app = express()
// const para nao mudar a variavel depois


app.get('/', function(req, res){
    res.sendFile(__dirname + '/paginas/index.html')
})

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + '/paginas/sobre.html')
})

app.get('/blog', function(req, res){
    res.send("Blog")
})

app.get('/cadastro/:nome/:cargo', function(req, res){
    res.send("Nome: " + req.params.nome + "\nCargo: " + req.params.cargo)

    // res.send(req.params)
})

app.listen(8081, function(){
    console.log('Servidor rodando em http://localhost:8081')
}) //criou servidor e está escutando a porta

