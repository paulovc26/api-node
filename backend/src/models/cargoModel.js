const connection = require("./connection");

const getAllCargos = async () => {
  const query = "SELECT * FROM cargos;";
  const [cargos] = await connection.execute(query);
  return cargos;
};

const getOneCargo = async (nome) => {
  const query = "SELECT * FROM cargos WHERE nome = ?;";
  const [cargo] = await connection.execute(query, [nome]);
  return cargo;
};

const createCargo = async (cargo) => {
  const { nome } = cargo;

  const query = "INSERT INTO cargos(nome) VALUES (?)";

  const [createdCargo] = await connection.execute(query, [nome]);

  return createdCargo;
};

const deleteCargo = async (id) => {
  const query = "DELETE FROM cargos WHERE id = ?";
  const removeCargo = await connection.execute(query, [id]);
  return removeCargo;
};

const updateCargo = async (id, cargo) => {
  const query = "UPDATE cargos SET nome = ? where id = ?;";
  const { nome } = cargo;

  const updatedCargo = await connection.execute(query, [nome, id]);
  return updatedCargo;
};

module.exports = {
  getAllCargos,
  getOneCargo,
  createCargo,
  deleteCargo,
  updateCargo,
};
