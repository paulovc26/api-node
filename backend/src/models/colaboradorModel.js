const connection = require("./connection");

const getAllColaboradores = async () => {
  const [colaboradores] = await connection.execute(
    "SELECT * FROM colaboradores"
  );
  return colaboradores;
};

const getOneColaborador = async (nome) => {
  const query = "SELECT * FROM colaboradores WHERE nome = ?";
  const [colaborador] = await connection.execute(query, [nome]);
  return [colaborador];
};

const createColaborador = async (colaborador) => {
  const { nome, cargo, salario } = colaborador;

  const query =
    "INSERT INTO colaboradores(nome, cargo, salario) values (?, ?, ?)";

  const [createdColaborador] = await connection.execute(query, [
    nome,
    cargo,
    salario,
  ]);
  return createdColaborador;
};

// todo put e delete

module.exports = {
  getAllColaboradores,
  getOneColaborador,
  createColaborador,
};
