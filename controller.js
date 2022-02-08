const express = require("express");
const server = express();

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/test/views/index.html")
})

server.use(express.json)

const cursos = ["SIT", "SAT", "SRT"]


//retorna apenas um curso por vez
server.get("/cursos/:index", (req, res) => {
    const {index} = req.params;

    return res.json(cursos[index]);
});

//retorna todos os cursos da lista
server.get("/cursos", (req,res) => {
  return res.json(cursos)
})

//criar um novo curso
server.post('/cursos', (req,res) =>{
  const {name} = req.body;
  cursos.push(name);

  return res.json(cursos);
});

//atualizar um curso
server.put("/cursos/:index", (req,res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos)
})

//deletar cursos
server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;
  cursos.splice(index, 1);
  return res.json({mesage: "curso foi deletado"})
})

server.listen(8081, () =>{
  console.log("Servidor rodando")
});