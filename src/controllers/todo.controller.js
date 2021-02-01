import {
  handleSuccessResponse,
  handleErrorResponse,
} from "./utils/response.util";
import { Todo } from "../models/Todo.model";

export const FetchTodos = (req, res) => {
    try {
    let todos = await Todo.find();
    handleSuccessResponse(res, todos, "todos fetched successfully", 200);
  } catch (err) {
    handleErrorResponse(res, err, 400);
  }
};

export const CreateTodo = (req, res) => {
    try {
        let { err, value } = validateTodoData(req.body);
        if (err) handleErrorResponse(res, err.details[0], 400)
        else {
            let todos = await Todo.create(value);
            handleSuccessResponse(res, todos, "todos fetched successfully", 201);
         }
  } catch (err) {
    handleErrorResponse(res, err, 400);
  }
};

export const FetchTodoById = (req, res) => {
    try {
        let { todoId } = req.params;
        let todos = await Todo.find({id :todoId});
        handleSuccessResponse(res, todos, "todos fetched successfully", 200);
  } catch (err) {
        handleErrorResponse(res, err, 400);
  }
};

export const UpdateTodoById = (req, res) => {
    try {
        let { todoId } = req.params;
    let todo = await Todo.findByIdAndUpdate(todoId, value, {new: true});
    handleSuccessResponse(res, todo, "todo updated successfully", 200);
  } catch (err) {
    handleErrorResponse(res, err, 400);
  }
};

export const DeleteTodoById = (req, res) => {
    try {
        let { todoId } = req.params;
        let todos = await Todo.findByIdAndDelete(todoId);
        handleSuccessResponse(res, todos, "todo deleted", 200);
  } catch (err) {
    handleErrorResponse(res, err, 400);
  }
};
