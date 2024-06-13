const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
//nome banco, usuario,senha, onde está seu bd, tipo de programa

// sequelize.authenticate().then(function(){
//     console.log("-----deu certo!!! conectado com sucesso-----")
// }).catch(function(erro){
//     console.log("deu errado!!! houve o seguinte erro: " + erro)
// })

//then deu certo; catch deu errado

const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
}) 

const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
}) 

//Postagem.sync(force = true)
//Usuario.sync(force = true)

// Postagem.create({
//     titulo: 'TESTE DO TITULO DA MINHA POSTAGEM',
//     conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
// })

// Usuario.create({
//     nome: 'LUANA',
//     sobrenome:'MATHIAS',
//     idade: 16,
//     email:'LUANAGM09@GAMIL.COM'
// })