const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retorna todos os usuários
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   username:
 *                     type: string
 *                     example: Username
 *                   password:
 *                     type: string
 *                     example: Senha
 */

router.get("/api/users", usersController.getAll);

router.post("/api/users", usersController.createUser);

// todo put e delete

module.exports = router;
