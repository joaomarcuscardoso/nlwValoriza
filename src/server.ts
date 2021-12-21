import express from "express";


const app = express();
/*
* GET => Bsucar infromações
* Post => Inserir(criar) uma informação
* Put => Alterar uma informação
* Delete => Remover um dado
* Patch => alterar uma informação especifica
*/
app.post("/test-post", (request, response) => {
  return response.send("Ola post");
});

app.get("/test", (request, response) => {
  return response.send("OlÁ");
});


app.listen(3000, () => console.log("Server is running"));