/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../features/todo/todoSlice";
const baseUrl = "api/todos/";

export const fetchTodoAction = () => async (dispatch) => {
  try {
    const response = await axios.get(baseUrl);
    dispatch(getTodos(response.data));
  } catch (er) {
    return console.error(er.message);
  }
};

export const addTodoAction = (todo) => async (dispatch) => {
  const response = await axios.post(baseUrl, {
    content: todo.content,
    isChecked: todo.isChecked,
  });
  dispatch(addTodo(response.data));
};

export const editTodoAction = (todo) => async (dispatch) => {
  const response = await axios.put(`${baseUrl}/${todo.id}`, {
    content: todo.content,
    isChecked: todo.isChecked,
  });
  dispatch(updateTodo(response.data));
};

export const deleteTodoAction = (id) => async (dispatch) => {
  await axios.delete(`${baseUrl}/${id}`);
  dispatch(deleteTodo(id));
};

export default { fetchTodoAction, addTodoAction, editTodoAction };
