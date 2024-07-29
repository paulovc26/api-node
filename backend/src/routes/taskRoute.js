const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasksController");
const taskMiddleware = require("../middlewares/tasksMiddleware");

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Gerenciamento de tarefas
 */

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Retorna todas as tarefas
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Lista de tarefas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   title:
 *                     type: string
 *                     example: Nome da tarefa
 *                   status:
 *                     type: string
 *                     example: pendente
 */
router.get("/api/tasks", tasksController.getAll);

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Cria uma nova tarefa
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Nome da nova tarefa
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso
 *       400:
 *         description: Requisição inválida
 */
router.post(
  "/api/tasks",
  taskMiddleware.validateTitle,
  tasksController.createTask
);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Deleta uma tarefa
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da tarefa a ser deletada
 *     responses:
 *       200:
 *         description: Tarefa deletada com sucesso
 *       404:
 *         description: Tarefa não encontrada
 */
router.delete("/api/tasks/:id", tasksController.deleteTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Atualiza uma tarefa
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da tarefa a ser atualizada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Nome atualizado da tarefa
 *               status:
 *                 type: string
 *                 example: concluído
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso
 *       400:
 *         description: Requisição inválida
 *       404:
 *         description: Tarefa não encontrada
 */
router.put(
  "/api/tasks/:id",
  taskMiddleware.validateTitle,
  taskMiddleware.validateStatus,
  tasksController.updateTask
);

module.exports = router;
