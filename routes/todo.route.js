const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');

router.post('/', todoController.createTodoController);

router.get('/', todoController.getAllTodoController);

router.get('/search', todoController.searchTodoController);

router.get('/:id', todoController.getOneTodoController);

router.put('/:id', todoController.updateTodoController);

router.delete('/:id', todoController.deleteTodoController);

module.exports = router;