const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const getAll = async (req, res) => {
  const users = await userModel.getAllUsers();
  return res.status(200).json({ users });
};

const getOne = async (req, res) => {
  const user = await userModel.getOneUser();
  return res.status(200).json({ user });
};

const createUser = async (req, res) => {
  const createdUser = await userModel.createUser(req.body);
  return res.status(201).json(createdUser);
};

//  todo put e delete controller

// const deleteTask = async (req, res) => {
//   const { id } = req.params;

//   await userModel.deleteTask(id);

//   return res.status(204).json({});
// };

// const updateTask = async (req, res) => {
//   const { id } = req.params;

//   await userModel.updateTask(id, req.body);

//   return res.status(204).json({});
// };

module.exports = {
  getAll,
  createUser,
  deleteTask,
  updateTask,
  getOne,
};
