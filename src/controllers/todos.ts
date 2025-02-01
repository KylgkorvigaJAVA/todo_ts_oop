import { Request, Response, NextFunction } from "express";
import { Todo } from "../models/todo";

export class TodoController {
  todos: Todo[] = [];

  constructor() {
    this.createTodo = this.createTodo.bind(this);
    this.getTodo = this.getTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  createTodo = (req: Request, res: Response, next: NextFunction) => {
    try {
      const task = (req.body as { task: string }).task;
      const newTodo: Todo = {
        id: Math.ceil(Math.random() * 10).toString(),
        task,
      };
      this.todos.push(newTodo);
      res.status(201).json({
        message: "New todo created",
        createdTask: newTodo,
      });
    } catch (error) {
      next(error);
    }
  };

  getTodo = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(201).json({
        message: "Todo list returned",
        tasks: this.todos,
      });
    } catch (error) {
      next(error);
    }
  };

  updateTodo = (req: Request, res: Response, next: NextFunction) => {
    try {
      const taskId = req.params.id;
      const editedTask = (req.body as { task: string }).task;
      const taskIndex = this.todos.findIndex((todo) => todo.id === taskId);

      this.todos[taskIndex] = new Todo(this.todos[taskIndex].id, editedTask);

      res.status(200).json({
        message: "Todo updated",
        updatedTask: this.todos[taskIndex],
      });
    } catch (error) {
      next(error);
    }
  };

  deleteTodo = (req: Request, res: Response, next: NextFunction) => {
    try {
      const taskId = req.params.id;
      const taskIndex = this.todos.findIndex((todo) => todo.id === taskId);

      this.todos.splice(taskIndex, 1);

      res.status(200).json({
        message: "Todo with index " + taskIndex + " deleted",
      });
    } catch (error) {
      next(error);
    }
  };
}
