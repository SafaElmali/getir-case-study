import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/* Slice */

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },

  reducers: {
    getTodos: (state, action) => {
      state.todoList = action.payload;
    },
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    updateTodo: (state, action) => {
      state.todoList = state.todoList.map((todo) =>
        todo.id !== action.payload.id ? todo : action.payload
      );
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

/* Actions */

export const { addTodo, getTodos, updateTodo, deleteTodo } = todoSlice.actions;

export const fetchTodoAction = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3000/api/todos");
    dispatch(getTodos(response.data));
  } catch (er) {
    return console.error(er.message);
  }
};

export const addTodoAction = (todo) => async (dispatch) => {
  const response = await axios.post("http://localhost:3000/api/todos", {
    content: todo.content,
    isChecked: todo.isChecked,
  });
  dispatch(addTodo(response.data));
};

export const editTodoAction = (todo) => async (dispatch) => {
  const response = await axios.put(
    `http://localhost:3000/api/todos/${todo.id}`,
    {
      content: todo.content,
      isChecked: todo.isChecked,
    }
  );
  dispatch(updateTodo(response.data));
};

export const deleteTodoAction = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3000/api/todos/${id}`);
  dispatch(deleteTodo(id));
};

export default todoSlice.reducer;
