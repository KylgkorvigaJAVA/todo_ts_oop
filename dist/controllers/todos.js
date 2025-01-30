"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoController = void 0;
const todo_1 = require("../models/todo");
class TodoController {
    constructor() {
        this.todos = [];
        this.createTodo = (req, res, next) => {
            try {
                const task = req.body.task;
                const newTodo = new todo_1.Todo(Math.random().toString(), task);
                this.todos.push(newTodo);
                res.status(201).json({
                    message: 'Created new ToDo',
                    createdTask: newTodo
                });
            }
            catch (error) {
                console.log(error);
            }
        };
        this.cgetTodos = (req, res, next) => {
            try {
                res.status(201).json({
                    todos: this.todos
                });
            }
            catch (error) {
                console.log(error);
            }
        };
        this.createTodo = this.createTodo.bind(this);
    }
}
exports.todoController = new TodoController();
/* const todos: Todo[] = []

export const createTodo = (req:Request, res:Response, next:NextFunction) => {
    try {
        const task = (req.body as {task: string}).task
        const newTodo = new Todo(Math.random().toString(), task)
        todos.push(newTodo)
        res.status(201).json({
            message: "Created new ToDo",
            createdTask: newTodo
        })
    } catch (error) {
        console.log(error)
    }
} */
