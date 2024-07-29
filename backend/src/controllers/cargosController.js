const cargoModel = require("../models/cargoModel");

const getAll = async (req, res) => {
  const cargos = await cargoModel.getAllCargos();
  return res.status(200).json({ cargos });
};

const getOne = async (req, res) => {
  const cargo = await cargoModel.getOneCargo();
  return res.status(200).json({ cargo });
};

const createCargo = async (req, res) => {
  const createdCargo = await cargoModel.createCargo(req.body);
  return res.status(201).json(createdCargo);
};

const deleteCargo = async (req, res) => {
  const { id } = req.params;

  await cargoModel.deleteCargo(id);

  return res.status(204).json({});
};

const updateCargo = async (req, res) => {
  const { id } = req.params;

  await cargoModel.updateCargo(id, req.body);

  return res.status(204).json({});
};

module.exports = {
  getAll,
  getOne,
  createCargo,
  updateCargo,
  deleteCargo,
};
