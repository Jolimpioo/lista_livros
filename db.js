const mysql = require("mysql2/promise");

const poll = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "nodemysql",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function connect() {
  try {
    const connection = await poll.getConnection();
    console.log("Conectou ao MySQL");
    connection.release(); // Libera a conexão imediatamente após o teste
  } catch (erro) {
    console.error("Erro ao conectar ao MySQL:", erro);
    throw erro;
  }
}

module.exports = { connect, poll };
