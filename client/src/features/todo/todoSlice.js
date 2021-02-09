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
      console.log(action);
      state.todoList.push(action.payload);
    },
    updateTodos: (state, action) => {
      state.todoList = state.todoList.map((todo) =>
        todo.id !== action.payload.id ? todo : action.payload
      );
    },
  },
});

/* Actions */

export const { addTodo, getTodos, updateTodos } = todoSlice.actions;

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
  console.log(todo);
  const response = await axios.put(
    `http://localhost:3000/api/todos/${todo.id}`,
    {
      content: todo.content,
      isChecked: todo.isChecked,
    },
  );
  dispatch(updateTodos(response.data));
};

export default todoSlice.reducer;
