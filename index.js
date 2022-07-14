const express = require("express");
const app = express();

app.use(express.json());

let data = [];

app.post("/personagens", (req, res) => {
  const { id, nome, raça, categoria, idade } = req.body;

  data.push({
    id: id,
    nome: nome,
    raça: raça,
    categoria: categoria,
    idade: idade,
  });

  return res.send("Personagem criado!");
});

app.get("/personagens", (req, res) => {
  return res.send(data);
});

app.get("/personagens/:id", (req, res) => {
  const { id } = req.params;

  const person = data.find((data) => data.id == id);

  return res.send(person);
});

app.put("/personagens/:id", (req, res) => {
  const { id } = req.params;
  const { nome, raça, categoria, idade } = req.body;

  const person = data.findIndex(data => data.id == id);
  data[person] = {
    id: data[person].id,
    nome,
    raça,
    categoria,
    idade,
  };
  return res.send("produto alterado");
});



app.listen(3333, () => {
  console.log("Estamos rodando na porta 3333");
});