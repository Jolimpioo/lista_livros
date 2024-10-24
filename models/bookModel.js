const { poll } = require("../db");

const getAllBooks = async () => {
  const query = "SELECT * FROM books";
  const connection = await poll.getConnection();
  const [rows] = await connection.query(query);
  connection.release();
  return rows;
};

const getBookById = async (id) => {
  const query = "SELECT * FROM books WHERE id = ?";
  const connection = await poll.getConnection();
  const [rows] = await connection.query(query, [id]);
  connection.release();
  return rows[0];
};

const insertBook = async (title, pageqty) => {
  const query = `INSERT INTO books (title, pageqty) VALUES (?, ?)`;
  const connection = await poll.getConnection();
  await connection.query(query, [title, pageqty]);
  connection.release();
};

const updateBook = async (id, title, pageqty) => {
  const query = "UPDATE books SET title = ?, pageqty = ? WHERE id = ?";
  const connection = await poll.getConnection();
  await connection.query(query, [title, pageqty, id]);
  connection.release();
};

const deleteBook = async (id) => {
  const query = "DELETE FROM books WHERE id = ?";
  const connection = await poll.getConnection();
  await connection.query(query, [id]);
  connection.release();
};

module.exports = {
  getAllBooks,
  getBookById,
  insertBook,
  updateBook,
  deleteBook,
};
