const BookModel = require("../models/bookModel");

const showAllBooks = async (req, res) => {
  try {
    const books = await BookModel.getAllBooks();
    res.render("books", { books });
  } catch (err) {
    console.error("Erro ao buscar livros:", err);
    res.status(500).send("Erro ao buscar livros");
  }
};

const showBook = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await BookModel.getBookById(id);
    if (book) {
      res.render("book", { book });
    } else {
      res.status(404).send("Livro não encontrado");
    }
  } catch (err) {
    console.error("Erro ao buscar livro:", err);
    res.status(500).send("Erro ao buscar livro");
  }
};

const createBook = async (req, res) => {
  const { title, pageqty } = req.body;
  try {
    await BookModel.insertBook(title, pageqty);
    res.redirect("/books");
  } catch (err) {
    console.error("Erro ao inserir livro:", err);
    res.status(500).send("Erro ao inserir livro");
  }
};

const showEditBook = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await BookModel.getBookById(id);
    if (book) {
      res.render("editbook", { book });
    } else {
      res.status(404).send("Livro não encontrado");
    }
  } catch (err) {
    console.error("Erro ao buscar livro:", err);
    res.status(500).send("Erro ao buscar livro");
  }
};

const updateBook = async (req, res) => {
  const { id, title, pageqty } = req.body;
  try {
    await BookModel.updateBook(id, title, pageqty);
    res.redirect("/books");
  } catch (err) {
    console.error("Erro ao atualizar livro:", err);
    res.status(500).send("Erro ao atualizar livro");
  }
};

const deleteBook = async (req, res) => {
  const id = req.params.id;
  try {
    await BookModel.deleteBook(id);
    res.redirect("/books");
  } catch (err) {
    console.error("Erro ao deletar livro:", err);
    res.status(500).send("Erro ao deletar livro");
  }
};

module.exports = {
  showAllBooks,
  showBook,
  createBook,
  showEditBook,
  updateBook,
  deleteBook,
};
