import express from "express";
import "reflect-metadata";
import "./database";
import { router } from "./routes";

// @types/express
const app = express();

app.use(express.json());

app.use(router); // Inserir as rotas dentro do express, para que todas as rotas façam parte do projeto

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));

/*
 * GET => Buscar uma informação
 * POST => Inserir(Criar) uma informação
 * PUT => Alterar uma informação
 * DELETE => Remover uma informação
 * PATCH => Alterar uma informação específica



 * Tipos de parâmetros
 * Routes params => http://localhost:3000/products/123154
 * Query Params => http://localhost:3000/products?name=keyboard&description=goodkeyboard&
 * Body params => {
 *  "name": "Keyboard"
 *  "description": "good keyboard"
 * }



app.get("/test", (request, response) => {
    //request => entrando
    //response => saindo
    return response.send("Olá NLW");
})

app.post("/test-post", (request, response) => {
    return response.send("Test POST")
})
*/
