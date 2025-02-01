import { Router } from "express";
import { TodoController } from "../controllers/todos";

const router = Router();

const controller = new TodoController();

router.post("/", controller.createTodo);
router.get("/", controller.getTodo);
router.patch("/:id", controller.updateTodo);
router.delete("/:id", controller.deleteTodo);

export default router;
