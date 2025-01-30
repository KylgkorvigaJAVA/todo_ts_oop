import { Request, Response, NextFunction } from "express";
import { Todo } from "../models/todo";

export class TodoController {
    public todos: Todo[] = []

    constructor() {
        this.createTodo = this.createTodo.bind(this)
        this.getTodos = this.getTodos.bind(this)
    }

    createTodo = (req: Request, res: Response, next: NextFunction) => {
        try {
            const task = (req.body as {task: string}).task
            const newTodo = new Todo(Math.random().toString(), task)
            this.todos.push(newTodo)
            res.status(201).json({
                message: 'Created new ToDo',
                createdTask: newTodo
            })
        } catch (error) {
            console.log(error)
        }
    }

    getTodos = (req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(201).json({
                todos: this.todos
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export const todoController =  new TodoController()
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

