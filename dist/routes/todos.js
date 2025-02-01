"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = (0, express_1.Router)();
const controller = new todos_1.TodoController();
router.post('/', controller.createTodo);
router.get('/', controller.getTodo);
router.patch('/:id', controller.updateTodo);
router.delete('/:id', controller.deleteTodo);
exports.default = router;