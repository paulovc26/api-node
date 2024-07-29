const colaboradorModel = require("../models/colaboradorModel");

const getAll = async (req, res) => {
  const colaboradores = await colaboradorModel.getAllColaboradores();
  return res.status(200).json({ colaboradores });
};

const getOne = async (req, res) => {
  const colaborador = await colaboradorModel.getOneColaborador();
  return res.status(200).json({ colaborador });
};

const createColaborador = async (req, res) => {
  const createdColaborador = await colaboradorModel.createColaborador(req.body);
  return res.status(201).json(createdColaborador);
};

// todo put e delete controller

module.exports = {
  getAll,
  getOne,
  createColaborador,
};
