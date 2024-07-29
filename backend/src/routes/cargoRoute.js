const express = require("express");
const router = express.Router();
const cargosController = require("../controllers/cargosController");

router.get("/api/cargos", cargosController.getAll);

router.post("/api/cargos", cargosController.createCargo);

router.put("/api/cargos/:id", cargosController.updateCargo);

router.delete("/api/cargos/:id", cargosController.deleteCargo);

module.exports = router;
