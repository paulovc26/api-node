const mysql = require("mysql2/promise");

require("dotenv").config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

const createTableColaborador = `CREATE TABLE IF NOT EXISTS colaboradores (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(125) NOT NULL,
cargo VARCHAR(70) NOT NULL,
salario DECIMAL(10,2) NOT NULL
)`;

// logica para inicializar os dados

async function initializeDatabse() {
  try {
    const [results] = await connection.query(createTableColaborador);
    console.log();
  } catch (error) {
    console.error("erro ao criar tabela: ", error);
  }
}

initializeDatabse();

module.exports = connection;
