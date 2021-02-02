import {
  handleSuccessResponse,
  handleErrorResponse,
} from "../helpers/response.util";
import {
  validateTodoData,
  validateTodoUpdateData,
} from "../../validators/todo.validator";
import { Todo } from "../../models/Todo.model";

export const FetchTodos = async (req, res) => {
  try {
    let todos = await Todo.find().where({ deleted: !false });
    handleSuccessResponse(res, "todos fetched successfully", todos, 200);
  } catch (err) {
    handleErrorResponse(res, err, 400);
  }
};

export const CreateTodo = async (req, res) => {
  try {
    let { err, value } = validateTodoData(req.body);
    if (err) handleErrorResponse(res, err.details[0], 400);
    else {
      let todos = await Todo.create(value);
      handleSuccessResponse(res, "todo created successfully", todos, 201);
    }
  } catch (err) {
    handleErrorResponse(res, err, 400);
  }
};

export const FetchTodoById = async (req, res) => {
  try {
    let { todoId } = req.params;
    let todos = await Todo.findById(todoId);
    handleSuccessResponse(res, "todo fetched successfully", todos, 200);
  } catch (err) {
    handleErrorResponse(res, err, 400);
  }
};

export const UpdateTodoById = async (req, res) => {
  try {
    let { err, value } = await validateTodoUpdateData(req.body);
    if (err) handleErrorResponse(res, err.details[0], 400);
    else {
      let { todoId } = req.params;
      let todo = await Todo.findByIdAndUpdate(todoId, value, { new: true });
      handleSuccessResponse(res, "todo updated successfully", todo, 200);
    }
  } catch (err) {
    handleErrorResponse(res, err, 400);
  }
};

export const DeleteTodoById = async (req, res) => {
  try {
    let { todoId } = req.params;
    let todo = await Todo.findById(todoId);
    await todo.delete();
    handleSuccessResponse(res, "todo deleted", todo, 200);
  } catch (err) {
    handleErrorResponse(res, err, 400);
  }
};

export const RestoreTodoById = async (req, res) => {
  try {
    let { todoId } = req.params;
    let todos = await Todo.findById(todoId);
    handleSuccessResponse(res, "todo deleted", todos, 200);
  } catch (err) {
    handleErrorResponse(res, err, 400);
  }
};
