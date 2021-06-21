import express from "express";

// @types/express
const app = express();

app.get("/test", (request, response) => {
    //request => entrando
    //response => saindo
    return response.send("Olá NLW");
})

app.post("/test-post", (request, response) => {
    return response.send("Test POST")
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));