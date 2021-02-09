import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/* Slice */

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },

  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      state.todoList.push(action.payload);
    },
    getTodos: (state, action) => {
      state.todoList = action.payload;
    },
  },
});

/* Actions */

export const { addTodo, getTodos } = todoSlice.actions;

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

export default todoSlice.reducer;
