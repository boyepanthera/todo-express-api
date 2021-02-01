import express from "express";
const router = express.Router();
import {
  FetchTodos,
  CreateTodo,
  FetchTodoById,
  UpdateTodoById,
  DeleteTodoById,
} from "./controllers/todo.controller";

router.route("/").get(FetchTodos).post(CreateTodo);

router
  .route("/:todoId")
  .get(FetchTodoById)
  .put(UpdateTodoById)
  .delete(DeleteTodoById);
