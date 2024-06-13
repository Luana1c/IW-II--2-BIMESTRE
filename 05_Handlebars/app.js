const express = require('express')
const app = express() // const para nao mudar a variavel depois
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')
 
// configuração
 
 //template engine
    app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine','handlebars')

// conexão com o banco de dados
    const sequelize = new Sequelize('test', 'root', '', {
        host: 'localhost',
        dialect: 'mysql'
    })  

// rotas
app.get('/cadastro',function(req,res){
   // res.send('rota de cadastro de posts')
   res.render('formulario')
})

app.get('/add',function(req,res){
    res.send('formulario recebido')})
 
app.listen(8081, function(){
    console.log('Servidor rodando em http://localhost:8081')
}) //criou servidor e está escutando a porta

