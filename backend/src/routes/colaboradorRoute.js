const express = require("express");
const router = express.Router();
const colaboradoresController = require("../controllers/colaboradoresController");

router.get("/api/colaboradores", colaboradoresController.getAll);

router.post("/api/colaboradores", colaboradoresController.createColaborador);

// todo put e delete

module.exports = router;
