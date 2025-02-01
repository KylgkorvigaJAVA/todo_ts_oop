"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const todo_1 = require("../models/todo");
class TodoController {
    constructor() {
        this.todos = [];
        this.createTodo = (req, res, next) => {
            try {
                const task = req.body.task;
                const newTodo = { id: Math.ceil(Math.random() * 10).toString(), task };
                this.todos.push(newTodo);
                res.status(201).json({
                    message: "New todo created",
                    createdTask: newTodo,
                });
            }
            catch (error) {
                next(error);
            }
        };
        this.getTodo = (req, res, next) => {
            try {
                res.status(201).json({
                    message: "Todo list returned",
                    tasks: this.todos
                });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateTodo = (req, res, next) => {
            try {
                const taskId = req.params.id;
                const editedTask = req.body.task;
                const taskIndex = this.todos.findIndex((todo) => todo.id === taskId);
                this.todos[taskIndex] = new todo_1.Todo(this.todos[taskIndex].id, editedTask);
                res.status(200).json({
                    message: "Todo updated",
                    updatedTask: this.todos[taskIndex]
                });
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteTodo = (req, res, next) => {
            try {
                const taskId = req.params.id;
                const taskIndex = this.todos.findIndex((todo) => todo.id === taskId);
                this.todos.splice(taskIndex, 1);
                res.status(200).json({
                    message: "Todo with index " + taskIndex + " deleted",
                });
            }
            catch (error) {
                next(error);
            }
        };
        this.createTodo = this.createTodo.bind(this);
        this.getTodo = this.getTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }
}

exports.TodoController = TodoController;