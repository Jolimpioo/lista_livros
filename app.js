const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const bookController = require("./controllers/bookController"); // Importando o controlador

// Middleware para processar dados de formulários
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configurando o motor de template Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Servindo arquivos estáticos
app.use(express.static("public"));

// Rota para a página inicial
app.get("/", (req, res) => {
  res.render("home");
});

// Rotas para livros, usando as funções do controlador
app.get("/books", bookController.showAllBooks);
app.get("/books/:id", bookController.showBook);
app.get("/books/edit/:id", bookController.showEditBook); // Rota para carregar o formulário de edição
app.post("/books/insertbook", bookController.createBook);
app.post("/books/updatebook", bookController.updateBook); // Rota para processar a atualização do livro
app.post("/books/remove/:id", bookController.deleteBook);

module.exports = app;
