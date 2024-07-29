// routes/index.js
const express = require("express");
const router = express.Router();

// Importar suas rotas
const usersRoutes = require("./userRoute");
const taskRoutes = require("./taskRoute");
const colaboradorRoutes = require("./colaboradorRoute");
const cargoRoutes = require("./cargoRoute");

// Usar as rotas importadas
router.use(usersRoutes);
router.use(taskRoutes);
router.use(colaboradorRoutes);
router.use(cargoRoutes);

module.exports = router;
