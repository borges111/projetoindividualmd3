const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const produtos = require("./src/produtos.json")

app.get("/produtos", (req,res) => {
    return res.json(produtos)//visualizar
});

app.post("/add", (req, res) => {
  const { nome, carne, ingredientes, imagem, preço} = req.body; 
  const hamburguer = { id: uuid(), nome, carne, ingredientes, imagem, preço};
  hamburguer.push(hamburguer);
  return res.status(201).json(hamburguer);
}); //inserir--// nome das rotas

app.put("/hamburguer/:id", (req, res) => {
  const { id } = req.params;
  const { nome, carne, ingredientes, imagem, preço} = req.body;
  const newhamburguer = { nome, carne, ingredientes, imagem, preço };
  const hamburguerindex = hamburguer.findIndex((hamburguer) => hamburguer.id == id);
  hamburguer[hamburguerindex] = newhamburguer;
  return res.json(newhamburguer);
}); //atualizar

app.delete("/hamburguer/:id", (req, res) => {
  const { id } = req.params;
  const hamburguerindex = hamburguer.findIndex((hamburguer) => hamburguer.id == id);
  hamburguer.splice(hamburguerindex, 1);
  return res.status(204).send();
}); //excluir


app.listen(port, () =>{
  console.log("Servidor esta rodando...")
});

//------------------Porções----------------//

app.get("/porções", (req,res) => {
  return res.json(porções)//visualizar
});

app.post("/add", (req, res) => {
const { nome, unidade, ingredientes, imagem, preço,  } = req.body; 
const porções = { id: uuid(), nome, unidade, ingredientes, imagem, preço, };
porções.push(porções);
return res.status(201).json(porções);
}); //inserir-// nome das rotas

app.put("/porções/:id", (req, res) => {
const { id } = req.params;
const { nome, unidade, ingredientes, imagem, preço,  } = req.body;
const newporções = { nome, unidade, ingredientes, imagem, preço,  };
const porçõesindex = porções.findIndex((porções) => porções.id == id);
porções[porçõesindex] = newporções;
return res.json(newporções);
}); //atualizar

app.delete("/porções/:id", (req, res) => {
const { id } = req.params;
const porçõesindex = porções.findIndex((porções) => porções.id == id);
porções.splice(porçõesindex, 1);
return res.status(204).send();
}); //excluir

app.listen(port, () =>{
  console.log("Servidor esta rodando...")
});