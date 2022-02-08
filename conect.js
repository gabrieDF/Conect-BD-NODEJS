const Sequelize = require('sequelize')
const sequelize = new Sequelize('curso', 'root','',{
  host:"localhost",
  dialect:"mysql"
})

/*Verificação de conectividade com o banco de dados*/
sequelize.authenticate().then(function(){
  console.log("conectado com sucesso")
}).catch(function(erro){
  console.log("Falha ao conectar: "+erro)
})

/*Model*/
const Cursos = sequelize.define('',{
    title: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.TEXT            
    }
})

//Sincronizando e criando o banco de dados no mysql
Cursos.sync({force: true})
