import { createSlice } from "@reduxjs/toolkit";

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

export default todoSlice.reducer;
